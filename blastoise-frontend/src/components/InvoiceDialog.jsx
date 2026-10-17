import { useWorkspace } from "../state/WorkspaceContext.jsx";
import Modal from "./Modal.jsx";
import InvoiceDetails from "./InvoiceDetails.jsx";
export default function InvoiceDialog() {
  const { activeInvoice, setActiveInvoice, invoices, patients, setInvoices } = useWorkspace();
  return (
    activeInvoice && (
      <Modal title="Invoice details" onClose={() => setActiveInvoice(null)}>
        <InvoiceDetails
          invoice={invoices.find((i) => i.id === activeInvoice)}
          patient={patients.find((p) => p.id === invoices.find((i) => i.id === activeInvoice)?.patientId)}
          onPaid={() =>
            setInvoices((items) =>
              items.map((i) =>
                i.id === activeInvoice
                  ? {
                      ...i,
                      status: "Paid",
                    }
                  : i,
              ),
            )
          }
        />
      </Modal>
    )
  );
}
