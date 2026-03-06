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
          <Route path="evaluacion-oportunidad" element={<OpportunityAssessment />} />
          <Route path="analisis-comparativo" element={<CMA />} />
          <Route path="tesis-inversion" element={<InvestmentThesis />} />
          <Route path="creacion-valor" element={<ValueCreation />} />
          <Route path="ejecucion-estrategica" element={<StrategicExecution />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
