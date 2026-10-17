import { useWorkspace } from "../state/WorkspaceContext.jsx";
import Modal from "./Modal.jsx";
export default function PatientForm() {
  const { modal, setModal, addPatient, formError, patientForm, updatePatient } = useWorkspace();
  return (
    modal === "patient" && (
      <Modal title="Register patient" onClose={() => setModal("")}>
        <form className="modal-form patient-form" onSubmit={addPatient}>
          <div className="form-section-label">Basic information</div>
          {formError && (
            <p role="alert" className="auth-message error">
              {formError}
            </p>
          )}
          <label>
            <span>
              Full name <b className="required-mark">*</b>
            </span>
            <input
              autoFocus
              required
              maxLength={120}
              value={patientForm.name}
              onChange={(e) => updatePatient("name", e.target.value)}
              placeholder="First and last name"
            />
          </label>
          <div className="form-row">
            <label>
              <span>
                Age <b className="required-mark">*</b>
              </span>
              <input
                required
                type="number"
                min="0"
                max="120"
                value={patientForm.age}
                onChange={(e) => updatePatient("age", e.target.value)}
                placeholder="Age in years"
              />
            </label>
            <label>
              <span>
                Sex <i className="optional-mark">optional</i>
              </span>
              <select value={patientForm.sex} onChange={(e) => updatePatient("sex", e.target.value)}>
                <option value="">Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
            </label>
          </div>
          <div className="form-section-label">Contact details</div>
          <label>
            <span>
              Cellphone number <b className="required-mark">*</b>
            </span>
            <input
              required
              type="tel"
              maxLength={20}
              pattern={"[+0-9\\s\\(\\)\\-]{7,20}"}
              value={patientForm.phone}
              onChange={(e) => updatePatient("phone", e.target.value)}
              placeholder="09XX XXX XXXX"
              title="Enter a valid phone number"
            />
          </label>
          <label>
            <span>
              Email <i className="optional-mark">optional</i>
            </span>
            <input
              type="email"
              maxLength={160}
              value={patientForm.email}
              onChange={(e) => updatePatient("email", e.target.value)}
              placeholder="patient@example.com"
            />
          </label>
          <label>
            <span>
              Address <i className="optional-mark">optional</i>
            </span>
            <input
              maxLength={200}
              value={patientForm.address}
              onChange={(e) => updatePatient("address", e.target.value)}
              placeholder="City or full address"
            />
          </label>
          <div className="form-section-label">
            Health information <i className="optional-mark">optional</i>
          </div>
          <div className="form-row">
            <label>
              Blood type
              <select
                value={patientForm.bloodType}
                onChange={(e) => updatePatient("bloodType", e.target.value)}>
                <option value="">Unknown / not provided</option>
                {["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Known allergies
              <input
                maxLength={300}
                value={patientForm.allergies}
                onChange={(e) => updatePatient("allergies", e.target.value)}
                placeholder="If any"
              />
            </label>
          </div>
          <label>
            Emergency contact name
            <input
              maxLength={120}
              value={patientForm.emergencyName}
              onChange={(e) => updatePatient("emergencyName", e.target.value)}
              placeholder="Contact person"
            />
          </label>
          <label>
            Emergency contact cellphone
            <input
              type="tel"
              maxLength={20}
              pattern={"[+0-9\\s\\(\\)\\-]{7,20}"}
              value={patientForm.emergencyPhone}
              onChange={(e) => updatePatient("emergencyPhone", e.target.value)}
              placeholder="09XX XXX XXXX"
            />
          </label>
          <label>
            Medical notes
            <textarea
              rows="3"
              maxLength={1000}
              value={patientForm.notes}
              onChange={(e) => updatePatient("notes", e.target.value)}
              placeholder="Relevant information for the clinic team"
            />
          </label>
          <p className="modal-note">
            Required: full name, age, and cellphone. Optional health details are demo data; collect only what
            your clinic needs.
          </p>
          <div className="modal-actions">
            <button className="button-outline" type="button" onClick={() => setModal("")}>
              Cancel
            </button>
            <button className="button-primary" type="submit">
              Save patient
            </button>
          </div>
        </form>
      </Modal>
    )
  );
}
