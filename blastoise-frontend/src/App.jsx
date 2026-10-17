import { WorkspaceProvider, useWorkspace } from "./state/WorkspaceContext.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Doctors from "./pages/Doctors.jsx";
import Patients from "./pages/Patients.jsx";
import Billing from "./pages/Billing.jsx";
import Triage from "./pages/Triage.jsx";
import LogoutDialog from "./components/LogoutDialog.jsx";
import InvoiceDialog from "./components/InvoiceDialog.jsx";
import PatientForm from "./components/PatientForm.jsx";
import InvoiceForm from "./components/InvoiceForm.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
const pages = {
  Overview: Dashboard,
  "Find a doctor": Doctors,
  Patients,
  "Billing & invoices": Billing,
  "AI triage": Triage,
};
function Workspace() {
  const { tab } = useWorkspace();
  const Page = pages[tab] || Dashboard;
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-area">
        <Topbar />
        <div className="page-content" key={tab}>
          <Page />
          <footer className="footer">
            <span>Blastoise · Smart Healthcare Management</span>
            <span>Frontend prototype · Sample data only</span>
          </footer>
        </div>
      </main>
      <LogoutDialog />
      <InvoiceDialog />
      <PatientForm />
      <InvoiceForm />
      <AppointmentForm />
    </div>
  );
}
export default function App({ onLogout }) {
  return (
    <WorkspaceProvider onLogout={onLogout}>
      <Workspace />
    </WorkspaceProvider>
  );
}
