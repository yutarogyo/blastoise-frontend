import { peso } from "../utils/format.js";
export default function InvoiceTable({ invoices, onSelect }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Patient</th>
            <th>Issued</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((i) => (
            <tr key={i.id} className="clickable-row" onClick={() => onSelect(i)}>
              <td className="invoice-id">
                <button
                  className="invoice-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(i);
                  }}>
                  {i.id}
                </button>
              </td>
              <td>{i.patient}</td>
              <td className="muted">{i.issued}</td>
              <td>
                <b>{peso(i.amount)}</b>
              </td>
              <td>
                <span className={`status ${i.status.toLowerCase()}`}>{i.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!invoices.length && <div className="empty-state">No invoices found.</div>}
    </div>
  );
}
