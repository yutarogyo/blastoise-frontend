import { useWorkspace } from "../state/WorkspaceContext.jsx";
import Modal from "./Modal.jsx";
export default function LogoutDialog() {
  const { modal, setModal, onLogout } = useWorkspace();
  return (
    modal === "logout" && (
      <Modal title="Log out of your workspace?" onClose={() => setModal("")}>
        <div className="modal-form">
          <p>You will return to the login screen. Demo records created during this session will reset.</p>
          <div className="modal-actions">
            <button className="button-outline" onClick={() => setModal("")}>
              Cancel
            </button>
            <button className="button-primary" onClick={onLogout}>
              Log out
            </button>
          </div>
        </div>
      </Modal>
    )
  );
}
