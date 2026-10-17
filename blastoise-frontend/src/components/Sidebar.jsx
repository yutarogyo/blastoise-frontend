import { useWorkspace } from "../state/WorkspaceContext.jsx";
import blastoiselogo from "../assets/logo.jpg";
import {
  Stethoscope,
  ChevronDown,
  LayoutDashboard,
  Search,
  Users,
  FileText,
  Brain,
  ShieldCheck,
} from "lucide-react";
function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}
export default function Sidebar() {
  const { setTab, tab, setQuery } = useWorkspace();
  return (
    <aside className="sidebar">
      <a className="brand" href="#overview" onClick={() => setTab("Overview")}>
        <span className="brand-mark">
          <img className="brand-logo" src={blastoiselogo} alt="Blastoise Logo" />
        </span>
        <span>
          Blastoise<span className="brand-dot">.</span>
        </span>
      </a>
      <div className="clinic-switch">
        <span className="clinic-mark">
          <Stethoscope size={17} />
        </span>
        <span>
          <b>ICCT Clinic</b>
          <small>Healthcare Management</small>
        </span>
        <ChevronDown size={15} />
      </div>
      <p className="nav-caption">WORKSPACE</p>
      <nav aria-label="Main navigation">
        <NavItem
          icon={LayoutDashboard}
          label="Overview"
          active={tab === "Overview"}
          onClick={() => {
            setTab("Overview");
            setQuery("");
          }}
        />
        <NavItem
          icon={Search}
          label="Find a doctor"
          active={tab === "Find a doctor"}
          onClick={() => {
            setTab("Find a doctor");
            setQuery("");
          }}
        />
        <NavItem
          icon={Users}
          label="Patients"
          active={tab === "Patients"}
          onClick={() => {
            setTab("Patients");
            setQuery("");
          }}
        />
        <NavItem
          icon={FileText}
          label="Billing & invoices"
          active={tab === "Billing & invoices"}
          onClick={() => {
            setTab("Billing & invoices");
            setQuery("");
          }}
        />
        <NavItem
          icon={Brain}
          label="AI triage"
          active={tab === "AI triage"}
          onClick={() => {
            setTab("AI triage");
            setQuery("");
          }}
        />
      </nav>
      <div className="sidebar-foot">
        <div className="prototype-note">
        </div>
        <div className="user-card">
          <span className="user-avatar">BC</span>
          <span>
            <b>Clinic administrator</b>
            <small>Workspace</small>
          </span>
        </div>
      </div>
    </aside>
  );
}
