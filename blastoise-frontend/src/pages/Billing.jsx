import { useWorkspace } from "../state/WorkspaceContext.jsx";
import PageHeading from "../components/PageHeading.jsx";
import { peso } from "../utils/format.js";
import SearchBox from "../components/SearchBox.jsx";
import InvoiceTable from "../components/InvoiceTable.jsx";
export default function Billing() {
  const {
    totalBilled,
    collected,
    outstanding,
    invoices,
    query,
    setQuery,
    visibleInvoices,
    setActiveInvoice,
  } = useWorkspace();
  return (
    <>
      <PageHeading />
      <>
        <div className="billing-strip">
          <div>
            <small>Total billed</small>
            <strong>{peso(totalBilled)}</strong>
          </div>
          <div>
            <small>Collected</small>
            <strong>{peso(collected)}</strong>
          </div>
          <div>
            <small>Outstanding</small>
            <strong>{peso(outstanding)}</strong>
          </div>
        </div>
        <section className="panel table-panel">
          <div className="table-tools">
            <h2>
              Invoices <span className="count-pill">{invoices.length}</span>
            </h2>
            <SearchBox value={query} onChange={setQuery} placeholder="Search invoices" />
          </div>
          <InvoiceTable invoices={visibleInvoices} onSelect={(i) => setActiveInvoice(i.id)} />
        </section>
      </>
    </>
  );
}
