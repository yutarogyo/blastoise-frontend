import { useWorkspace } from "../state/WorkspaceContext.jsx";
import PageHeading from "../components/PageHeading.jsx";
import Stat from "../components/Stat.jsx";
import { Users, FileText, CreditCard, Activity, HeartPulse, Plus, ArrowUpRight } from "lucide-react";
import { peso } from "../utils/format.js";
import PanelHead from "../components/PanelHead.jsx";
import InvoiceTable from "../components/InvoiceTable.jsx";
export default function Dashboard() {
  const {
    patients,
    invoices,
    collected,
    outstanding,
    totalBilled,
    setModal,
    setTab,
    setActiveInvoice,
    appointments,
  } = useWorkspace();
  return (
    <>
      <PageHeading />
      <>
        <section className="stats-grid">
          <Stat icon={Users} title="Total patients" value={patients.length} note="Registered demo records" />
          <Stat icon={FileText} title="Invoices issued" value={invoices.length} note="Across clinic visits" />
          <Stat
            icon={CreditCard}
            title="Payments collected"
            value={peso(collected)}
            note="Recorded in this demo"
          />
          <Stat
            icon={Activity}
            title="Outstanding balance"
            value={peso(outstanding)}
            note="Pending or overdue"
          />
        </section>
        <section className="overview-grid">
          <article className="panel billing-panel">
            <div className="panel-head">
              <div>
                <h2>Billing overview</h2>
                <p>Collected and outstanding amounts</p>
              </div>
              <span className="period-label">All time</span>
            </div>
            <div className="billing-content">
              <div>
                <span className="label-small">TOTAL BILLED</span>
                <strong className="billed-total">{peso(totalBilled)}</strong>
                <div className="legend">
                  <span>
                    <i className="legend-collected" /> Collected
                  </span>
                  <span>
                    <i className="legend-outstanding" /> Outstanding
                  </span>
                </div>
              </div>
              <div
                className="donut"
                style={{
                  "--fill": `${totalBilled ? Math.round((collected / totalBilled) * 100) : 0}%`,
                }}>
                <div>
                  <b>{totalBilled ? Math.round((collected / totalBilled) * 100) : 0}%</b>
                  <small>collected</small>
                </div>
              </div>
            </div>
            <div className="billing-foot">
              <span>
                Collected <b>{peso(collected)}</b>
              </span>
              <span>
                Outstanding <b>{peso(outstanding)}</b>
              </span>
            </div>
          </article>
          <article className="quick-panel">
            <span className="quick-icon">
              <HeartPulse size={23} />
            </span>
            <h2>More time for care.</h2>
            <p>Keep the administrative side of every visit moving smoothly.</p>
            <button onClick={() => setModal("invoice")}>
              <FileText size={17} />
              Create an invoice
              <Plus size={16} />
            </button>
            <button onClick={() => setModal("patient")}>
              <Users size={17} />
              Register a patient
              <Plus size={16} />
            </button>
          </article>
        </section>
        <section className="panel table-panel">
          <PanelHead
            title="Recent invoices"
            subtitle="Latest billing activity at your clinic"
            action="View all invoices"
            onAction={() => setTab("Billing & invoices")}
          />
          <InvoiceTable invoices={invoices.slice(0, 4)} onSelect={(i) => setActiveInvoice(i.id)} />
        </section>
      </>
      <section className="panel table-panel appointment-list">
        <div className="panel-head">
          <div>
            <h2>Appointment requests</h2>
            <p>Saved in this session · not confirmed by a clinic</p>
          </div>
          <button className="text-button" onClick={() => setTab("Find a doctor")}>
            Find a doctor <ArrowUpRight size={15} />
          </button>
        </div>
        {appointments.length ? (
          appointments.map((a) => (
            <div className="appointment-row" key={a.id}>
              <span>
                <b>{a.patient}</b>
                <small>
                  {a.doctor} · {a.type}
                </small>
              </span>
              <span>
                {a.date}
                <small>Requested · demo</small>
              </span>
            </div>
          ))
        ) : (
          <div className="empty-state">No requests yet. Explore the doctor directory to get started.</div>
        )}
      </section>
    </>
  );
}
