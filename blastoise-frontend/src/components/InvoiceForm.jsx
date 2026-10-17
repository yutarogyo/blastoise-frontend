import { useWorkspace } from "../state/WorkspaceContext.jsx";
import Modal from "./Modal.jsx";
import { today, peso } from "../utils/format.js";
export default function InvoiceForm() {
  const {
    modal,
    setModal,
    addInvoice,
    formError,
    invoicePatient,
    setInvoicePatient,
    patients,
    invoiceDescription,
    setInvoiceDescription,
    invoiceQuantity,
    setInvoiceQuantity,
    invoiceAmount,
    setInvoiceAmount,
    invoiceDue,
    setInvoiceDue,
  } = useWorkspace();
  return (
    modal === "invoice" && (
      <Modal title="Create invoice" onClose={() => setModal("")}>
        <form className="modal-form" onSubmit={addInvoice}>
          {formError && <p role="alert">{formError}</p>}
          <label>
            Patient
            <select value={invoicePatient} onChange={(e) => setInvoicePatient(e.target.value)}>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} · {p.id}
                </option>
              ))}
            </select>
          </label>
          <label>
            Service description
            <input
              required
              maxLength={200}
              value={invoiceDescription}
              onChange={(e) => setInvoiceDescription(e.target.value)}
            />
          </label>
          <div className="form-row">
            <label>
              Quantity
              <input
                required
                type="number"
                min="1"
                max="999"
                step="1"
                value={invoiceQuantity}
                onChange={(e) => setInvoiceQuantity(e.target.value)}
              />
            </label>
            <label>
              Unit price (₱)
              <input
                required
                type="number"
                min="1"
                step="0.01"
                value={invoiceAmount}
                onChange={(e) => setInvoiceAmount(e.target.value)}
              />
            </label>
          </div>
          <label>
            Due date
            <input
              required
              type="date"
              min={today()}
              value={invoiceDue}
              onChange={(e) => setInvoiceDue(e.target.value)}
            />
          </label>
          <strong>Total: {peso(Number(invoiceAmount) * Number(invoiceQuantity))}</strong>
          <p className="modal-note">this invoice is not sent or saved to a server.</p>
          <div className="modal-actions">
            <button className="button-outline" type="button" onClick={() => setModal("")}>
              Cancel
            </button>
            <button className="button-primary" type="submit">
              Create invoice
            </button>
          </div>
        </form>
      </Modal>
    )
  );
}
