import { useWorkspace } from "../state/WorkspaceContext.jsx";
import Modal from "./Modal.jsx";
import { uniqueId, peso, today } from "../utils/format.js";
export default function AppointmentForm() {
  const { modal, setModal, setAppointments, selectedDoctor, setSelectedDoctor, setAppointmentSent } =
    useWorkspace();
  return (
    modal === "appointment" && (
      <Modal title="Request an appointment" onClose={() => setModal("")}>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            const values = new FormData(e.currentTarget);
            if (!values.get("patient").trim()) return;
            setAppointments((a) => [
              {
                id: uniqueId("APT"),
                patient: values.get("patient").trim(),
                date: values.get("date"),
                type: values.get("type"),
                doctor: selectedDoctor.name,
              },
              ...a,
            ]);
            setModal("");
            setSelectedDoctor(null);
            setAppointmentSent(true);
          }}>
          <div className="appointment-provider">
            <strong>{selectedDoctor?.name}</strong>
            <span>
              {selectedDoctor?.specialty} · {peso(selectedDoctor?.fee)} consultation
            </span>
          </div>
          <label>
            Patient name
            <input
              name="patient"
              required
              maxLength={120}
              pattern=".*[^\s].*"
              placeholder="Enter patient name"
            />
          </label>
          <label>
            Preferred date
            <input name="date" required type="date" min={today()} />
          </label>
          <label>
            Visit type
            <select name="type">
              <option>In-person</option>
              <option>Online consultation</option>
            </select>
          </label>
          <p className="modal-note">Demo only: this request is not sent or booked with a real provider.</p>
          <div className="modal-actions">
            <button className="button-outline" type="button" onClick={() => setModal("")}>
              Cancel
            </button>
            <button className="button-primary" type="submit">
              Send request
            </button>
          </div>
        </form>
      </Modal>
    )
  );
}
