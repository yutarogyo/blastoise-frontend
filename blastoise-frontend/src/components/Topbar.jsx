import { useWorkspace } from "../state/WorkspaceContext.jsx";
export default function Topbar() {
  const { tab, setModal } = useWorkspace();
  return (
    <header className="topbar">
      <div className="crumb">
        Workspace <span>/</span> <b>{tab}</b>
      </div>
      <div className="top-actions">
        <span className="demo-pill">
          <i /> Demo mode
        </span>
        <button className="auth-signout" onClick={() => setModal("logout")}>
          Log out
        </button>
      </div>
    </header>
  );
}
