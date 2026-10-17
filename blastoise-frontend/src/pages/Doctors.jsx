import { useWorkspace } from "../state/WorkspaceContext.jsx";
import { Search, HeartPulse, ShieldCheck, Stethoscope, Check, Clock3 } from "lucide-react";
import { specialties } from "../data/demoData.js";
import { peso } from "../utils/format.js";
export default function Doctors() {
  const {
    doctorQuery,
    setDoctorQuery,
    selectedSpecialty,
    setSelectedSpecialty,
    setAppointmentSent,
    appointmentSent,
    visibleDoctors,
    setSelectedDoctor,
    setModal,
  } = useWorkspace();
  return (
    <>
      <>
        <section id="directory" className="directory-hero">
          <div className="directory-copy">
            <span className="eyebrow">ICCT CLINIC · PROVIDER DIRECTORY</span>
            <h2>
              Care that starts with
              <br />
              <em>the right doctor.</em>
            </h2>
            <p>
              Browse 12 specialties in one place. Fictional providers and stock portraits for demonstration
              only.
            </p>
            <label className="directory-search">
              <Search size={19} />
              <input
                aria-label="Search doctor or specialty"
                value={doctorQuery}
                onChange={(e) => setDoctorQuery(e.target.value)}
                placeholder="Search doctor or specialty"
              />
              <span>⌕</span>
            </label>
          </div>
          <div className="directory-art" aria-hidden="true">
            <span className="art-circle art-circle-one" />
            <span className="art-circle art-circle-two" />
            <span className="art-cross">+</span>
            <span className="art-heart">
              <HeartPulse size={52} />
            </span>
            <span className="art-caption">
              Care, made
              <br />
              more connected.
            </span>
          </div>
        </section>
        <section className="specialty-section">
          <div className="section-title">
            <div>
              <span className="eyebrow">FIND CARE BY SPECIALTY</span>
              <h2>What can we help with?</h2>
            </div>
            <span className="demo-notice">
              <ShieldCheck size={15} /> Stock-photo demo profiles
            </span>
          </div>
          <div className="specialty-list">
            {specialties.map((specialty, index) => (
              <button
                key={specialty}
                className={`specialty-chip ${selectedSpecialty === specialty ? "selected" : ""}`}
                onClick={() => {
                  setSelectedSpecialty(specialty);
                  setAppointmentSent(false);
                }}>
                <span className={`specialty-icon specialty-icon-${index % 6}`}>
                  <Stethoscope size={17} />
                </span>
                {specialty}
              </button>
            ))}
          </div>
        </section>
        <section className="directory-results">
          {appointmentSent && (
            <div className="directory-feedback" role="status">
              <Check size={17} /> Demo appointment request recorded on this screen. It has not been sent to a
              clinic.
            </div>
          )}
          <div className="section-title">
            <div>
              <span className="eyebrow">SAMPLE PROVIDERS</span>
              <h2>
                {selectedSpecialty === "All specialties" ? "Doctors you can explore" : selectedSpecialty}
              </h2>
            </div>
            <span className="result-count">
              {visibleDoctors.length} sample {visibleDoctors.length === 1 ? "doctor" : "doctors"}
            </span>
          </div>
          <div className="doctor-grid">
            {visibleDoctors.map((doctor) => (
              <article className="panel doctor-card directory-card" key={doctor.name}>
                <div className="doctor-top">
                  <span className="doctor-avatar">
                    {doctor.image ? (
                      <img
                        className="doctor-photo"
                        src={doctor.image}
                        alt={`${doctor.name}, sample doctor profile`}
                      />
                    ) : (
                      <span className="doctor-initials">
                        {doctor.name
                          .replace("Dr. ", "")
                          .split(" ")
                          .map((x) => x[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                  </span>
                  <span className="available-tag">
                    <i /> Online now
                  </span>
                </div>
                <h2>{doctor.name}</h2>
                <span className="specialty">{doctor.specialty}</span>
                <p className="doctor-detail">
                  <Stethoscope size={15} />
                  {doctor.clinic}
                </p>
                <p className="doctor-detail">
                  <Clock3 size={15} />
                  {doctor.schedule}
                </p>
                <div className="doctor-bottom">
                  <span>
                    <small>Consultation fee</small>
                    <b>{peso(doctor.fee)}</b>
                  </span>
                  <button
                    className="button-outline"
                    onClick={() => {
                      setSelectedDoctor(doctor);
                      setAppointmentSent(false);
                      setModal("appointment");
                    }}>
                    Book appointment
                  </button>
                </div>
              </article>
            ))}
          </div>
          {visibleDoctors.length === 0 && (
            <div className="panel empty-state">
              No sample doctors match that search. Try another specialty or name.
            </div>
          )}
        </section>
      </>
    </>
  );
}
