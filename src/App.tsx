import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { CMA } from './pages/CMA';
import { Home } from './pages/Home';
import { InvestmentThesis } from './pages/InvestmentThesis';
import { OpportunityAssessment } from './pages/OpportunityAssessment';
import { StrategicExecution } from './pages/StrategicExecution';
import { ValueCreation } from './pages/ValueCreation';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contexto-y-analisis" element={<OpportunityAssessment />} />
          <Route path="plan-maestro-y-financiero" element={<CMA />} />
          <Route path="oportunidad-de-inversion" element={<InvestmentThesis />} />
          <Route path="propuesta-valor" element={<ValueCreation />} />
          <Route path="estetica-y-posicionamiento" element={<StrategicExecution />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
