import { useWorkspace } from "../state/WorkspaceContext.jsx";
import { Brain, AlertTriangle, X, ClipboardList, Clock3 } from "lucide-react";
import { redFlags } from "../data/demoData.js";
export default function Triage() {
  const {
    checkSymptoms,
    formError,
    patients,
    symptoms,
    setSymptoms,
    setTriage,
    duration,
    setDuration,
    flags,
    setFlags,
    setFormError,
    triage,
  } = useWorkspace();
  return (
    <>
      <>
        <div className="page-heading triage-heading">
          <div>
            <span className="eyebrow">PATIENT SAFETY</span>
            <h1>AI symptom triage</h1>
            <p>Record symptoms and review warning signs that may need urgent attention.</p>
          </div>
          <span className="prototype-chip">
            <Brain size={15} /> Demo prototype
          </span>
        </div>
        <div className="triage-layout">
          <section className="panel triage-form">
            <div className="panel-head">
              <div>
                <h2>
                  <Brain size={19} /> Symptom check
                </h2>
                <p>This front-end demo uses simple warning-sign rules; it does not diagnose.</p>
              </div>
            </div>
            <form onSubmit={checkSymptoms}>
              {formError && (
                <p role="alert" className="auth-message error">
                  {formError}
                </p>
              )}
              <label>
                Link to patient record (optional)
                <select>
                  <option value="">No patient selected</option>
                  {patients.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} · {p.id}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                What symptoms are you experiencing?
                <textarea
                  required
                  maxLength={2000}
                  value={symptoms}
                  onChange={(e) => {
                    setSymptoms(e.target.value);
                    setTriage(null);
                  }}
                  placeholder="Describe symptoms and when they started…"
                />
              </label>
              <label>
                How long have they been happening?
                <select
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setTriage(null);
                  }}>
                  {["Today", "Less than 24 hours", "1–3 days", "More than 3 days", "Ongoing"].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <fieldset>
                <legend>Are any of these happening now?</legend>
                <div className="flag-grid">
                  {redFlags.map((flag) => (
                    <label className="flag-option" key={flag}>
                      <input
                        type="checkbox"
                        checked={flags.includes(flag)}
                        onChange={(e) => {
                          setFlags(e.target.checked ? [...flags, flag] : flags.filter((x) => x !== flag));
                          setTriage(null);
                        }}
                      />
                      <span>{flag}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="emergency-note">
                <AlertTriangle size={17} />
                <span>
                  If someone may be having a life-threatening emergency, seek emergency medical help now. Do
                  not wait for this tool.
                </span>
              </div>
              {flags.length > 0 && (
                <div className="triage-result urgent" role="alert">
                  Emergency warning sign selected. Seek emergency medical help now; do not wait to submit this
                  form.
                </div>
              )}
              <div className="modal-actions">
                <button
                  type="button"
                  className="button-outline"
                  onClick={() => {
                    setSymptoms("");
                    setDuration("Today");
                    setFlags([]);
                    setTriage(null);
                    setFormError("");
                  }}>
                  Reset
                </button>
                <button className="button-primary" type="submit">
                  Review warning signs
                </button>
              </div>
            </form>
            {triage && (
              <div className={`triage-result ${triage.urgent ? "urgent" : ""}`}>
                <button className="icon-button" onClick={() => setTriage(null)} aria-label="Close result">
                  <X size={17} />
                </button>
                <span className="eyebrow">TRIAGE RESULT</span>
                <h2>{triage.level}</h2>
                <p>{triage.note}</p>
              </div>
            )}
          </section>
          <aside className="panel triage-aside">
            <span className="aside-icon">
              <ClipboardList size={22} />
            </span>
            <h2>What this demo does</h2>
            <p>
              It checks the warning signs you select and shows whether you selected an emergency warning sign.
              Free text is recorded but not analyzed. It does not determine the cause of symptoms or recommend
              treatment.
            </p>
            <div className="aside-info">
              <Clock3 size={17} />
              <span>Seek professional advice if symptoms worsen or concern you.</span>
            </div>
            <div className="disclaimer">
              Demo guidance only. Not a substitute for a licensed healthcare professional.
            </div>
          </aside>
        </div>
      </>
    </>
  );
}
