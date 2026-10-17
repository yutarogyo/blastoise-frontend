import { peso } from "../utils/format.js";
export default function InvoiceDetails({ invoice, patient, onPaid }) {
  return (
    <div className="modal-form">
      <div className="invoice-document">
        <div className="invoice-banner">
          <div>
            <span className="eyebrow">BLASTOISE · SAMPLE INVOICE</span>
            <h2>{invoice.id}</h2>
          </div>
          <span className={`status ${invoice.status.toLowerCase()}`}>{invoice.status}</span>
        </div>
        <div className="invoice-address">
          <div>
            <small>BILL TO</small>
            <h3>{invoice.patient}</h3>
            <p>
              {patient?.id}
              <br />
              {patient?.phone}
              <br />
              {patient?.address || "Address not provided"}
            </p>
          </div>
          <div>
            <p>
              Issued: {invoice.issued}
              <br />
              Due: {invoice.due}
            </p>
          </div>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{peso(item.rate)}</td>
                  <td>{peso(item.quantity * item.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="invoice-total">
          <span>Total (PHP)</span>
          <strong>{peso(invoice.amount)}</strong>
        </div>
        <p className="modal-note">
          Demo invoice only · Not an official tax invoice or proof of payment. No taxes or discounts applied.
        </p>
      </div>
      <div className="modal-actions no-print">
        {invoice.status !== "Paid" && (
          <button className="button-outline" onClick={onPaid}>
            Mark paid (demo)
          </button>
        )}
        <button className="button-primary" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>
    </div>
  );
}
