import { Navigate, Route, Routes } from 'react-router-dom';
import { FounderDashboardPage } from './pages/founder-dashboard-page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FounderDashboardPage mode="executive" />} />
      <Route path="/evidence" element={<FounderDashboardPage mode="evidence" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
