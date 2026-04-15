import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as XLSX from 'xlsx';
import { renderAsync } from 'docx-preview';
import type { DocumentAttachmentType, SectionTheme } from '../../types/sections';

const MAX_EXCEL_ROWS = 800;

type CellValue = string | number | boolean | Date | null | undefined;

export function FileTypeIcon({ kind }: { kind: DocumentAttachmentType }) {
  const common =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold';
  if (kind === 'image') {
    return (
      <span className={`${common} bg-amber-600/15 text-amber-900`} aria-hidden>
        IMG
      </span>
    );
  }
  if (kind === 'pdf') {
    return (
      <span className={`${common} bg-red-600/15 text-red-800`} aria-hidden>
        PDF
      </span>
    );
  }
  if (kind === 'excel') {
    return (
      <span className={`${common} bg-emerald-600/15 text-emerald-800`} aria-hidden>
        XLS
      </span>
    );
  }
  return (
    <span className={`${common} bg-blue-600/15 text-blue-900`} aria-hidden>
      DOC
    </span>
  );
}

function ExcelPreview({ url }: { url: string }) {
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>('loading');
  const [sheets, setSheets] = useState<{ name: string; rows: CellValue[][]; truncated: boolean }[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('fetch');
        return r.arrayBuffer();
      })
      .then((buf) => {
        if (cancelled) return;
        const wb = XLSX.read(buf, { type: 'array', cellDates: true });
        const out = wb.SheetNames.map((name) => {
          const sheet = wb.Sheets[name];
          let rows = XLSX.utils.sheet_to_json<CellValue[]>(sheet, {
            header: 1,
            defval: '',
            raw: false,
          }) as CellValue[][];
          const truncated = rows.length > MAX_EXCEL_ROWS;
          if (truncated) rows = rows.slice(0, MAX_EXCEL_ROWS);
          return { name, rows, truncated };
        });
        setSheets(out);
        setActive(0);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (status === 'loading') {
    return <p className="text-sm text-charcoal/80">Cargando hoja de cálculo…</p>;
  }
  if (status === 'error' || sheets.length === 0) {
    return <p className="text-sm text-red-800">No se pudo leer el archivo Excel.</p>;
  }

  const current = sheets[active]!;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      {sheets.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {sheets.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                i === active ? 'bg-earth text-cream' : 'bg-charcoal/10 text-earth hover:bg-charcoal/15'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}
      {current.truncated && (
        <p className="text-xs text-charcoal/70">
          Mostrando las primeras {MAX_EXCEL_ROWS} filas de esta hoja.
        </p>
      )}
      <div className="max-h-[62vh] overflow-auto rounded-lg border border-charcoal/15 bg-white">
        <table className="min-w-full border-collapse text-left text-xs text-earth">
          <tbody>
            {current.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-cream/40'}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border border-charcoal/10 px-2 py-1.5 align-top whitespace-nowrap">
                    {cell instanceof Date ? cell.toLocaleString() : String(cell ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WordPreview({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'error' | 'ready'>('loading');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    setStatus('loading');
    el.innerHTML = '';
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('fetch');
        return r.blob();
      })
      .then((blob) => {
        if (cancelled || !ref.current) return;
        return renderAsync(blob, ref.current, undefined, {
          className: 'docx-preview-doc',
          inWrapper: true,
        });
      })
      .then(() => {
        if (!cancelled) setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (status === 'error') {
    return <p className="text-sm text-red-800">No se pudo mostrar el documento Word.</p>;
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2">
      {status === 'loading' && <p className="text-sm text-charcoal/80">Cargando documento…</p>}
      <div
        ref={ref}
        className="docx-preview-root max-h-[62vh] min-h-[200px] overflow-auto rounded-lg border border-charcoal/15 bg-white p-4 text-sm text-earth"
      />
    </div>
  );
}

export interface DocumentViewerModalProps {
  open: boolean;
  onClose: () => void;
  fileUrl: string;
  fileName: string;
  kind: DocumentAttachmentType;
}

export function DocumentViewerModal({ open, onClose, fileUrl, fileName, kind }: DocumentViewerModalProps) {
  const titleId = useId();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, handleKeyDown]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  /** Portal a `document.body` para que `fixed` cubra todo el viewport (evita que un ancestro con `transform`, p. ej. ScrollReveal, acorte el overlay). */
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex min-h-dvh w-full items-center justify-center bg-earth/90 p-4 backdrop-blur-xl sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="flex max-h-[min(90dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl ring-1 ring-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 flex-wrap items-start justify-between gap-3 border-b border-charcoal/10 bg-cream px-4 py-4 sm:px-5">
          <h2 id={titleId} className="min-w-0 flex-1 text-base font-semibold text-earth sm:text-lg">
            {fileName}
          </h2>
          <div className="flex w-full shrink-0 items-center justify-end gap-2 sm:w-auto">
            <a
              href={fileUrl}
              download={fileName}
              className="rounded-full border border-earth/30 px-4 py-2 text-sm font-semibold text-earth transition-colors hover:bg-earth/10"
            >
              Descargar
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-earth px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-forest"
            >
              Cerrar
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-5">
          <div className="flex min-h-0 flex-col gap-4">
            {kind === 'image' && (
              <div className="flex min-h-[50dvh] items-center justify-center rounded-lg bg-charcoal/5 py-4">
                <img
                  src={fileUrl}
                  alt={fileName}
                  className="max-h-[min(72dvh,720px)] w-auto max-w-full rounded-lg object-contain shadow-sm"
                />
              </div>
            )}
            {kind === 'pdf' && (
              <iframe
                title={fileName}
                src={fileUrl}
                className="min-h-[60dvh] w-full flex-1 rounded-lg border border-charcoal/15 bg-charcoal/5 sm:min-h-[65vh]"
              />
            )}
            {kind === 'excel' && <ExcelPreview url={fileUrl} />}
            {kind === 'word' && <WordPreview url={fileUrl} />}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export interface DocumentAttachmentProps {
  fileUrl: string;
  fileName: string;
  kind: DocumentAttachmentType;
  theme?: SectionTheme;
}

export function DocumentAttachment({ fileUrl, fileName, kind, theme = 'light' }: DocumentAttachmentProps) {
  const [open, setOpen] = useState(false);
  const isLight = theme === 'light';

  const cardClass = isLight
    ? 'border-charcoal/20 bg-white/70 hover:bg-white'
    : 'border-cream/25 bg-cream/5 hover:bg-cream/10';

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`flex w-full max-w-md items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${cardClass}`}
        aria-haspopup="dialog"
      >
        {kind === 'image' ? (
          <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
            <img src={fileUrl} alt="" className="h-full w-full object-cover" />
          </span>
        ) : (
          <FileTypeIcon kind={kind} />
        )}
        <span className={`min-w-0 flex-1 text-sm font-medium ${isLight ? 'text-earth' : 'text-cream'}`}>
          {fileName}
        </span>
        <span className={`shrink-0 text-xs font-semibold uppercase tracking-wide ${isLight ? 'text-charcoal/60' : 'text-cream/60'}`}>
          Ver
        </span>
      </button>

      <DocumentViewerModal
        open={open}
        onClose={() => setOpen(false)}
        fileUrl={fileUrl}
        fileName={fileName}
        kind={kind}
      />
    </>
  );
}
