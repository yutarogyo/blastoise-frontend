import { useWorkspace } from "../state/WorkspaceContext.jsx";
import { Plus } from "lucide-react";
export default function PageHeading() {
  const { tab, setModal } = useWorkspace();
  return (
    <div key={`heading-${tab}`} className="page-heading">
      <div>
        <span className="eyebrow">CLINIC MANAGEMENT</span>
        <h1>
          {tab === "Overview"
            ? "A clear view of your clinic."
            : tab === "Patients"
              ? "Patient records"
              : "Billing & invoices"}
        </h1>
        <p>
          {tab === "Overview"
            ? "Your patients, payments, and clinic activity in one place."
            : tab === "Patients"
              ? "Keep patient information organized and easy to find."
              : "Create sample invoices and review billing activity."}
        </p>
      </div>
      <button
        className="button-primary"
        onClick={() => setModal(tab === "Billing & invoices" ? "invoice" : "patient")}>
        <Plus size={17} />
        {tab === "Billing & invoices" ? "Create invoice" : "Add patient"}
      </button>
    </div>
  );
}
