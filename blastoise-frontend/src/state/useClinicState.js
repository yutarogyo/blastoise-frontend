import { useState, useEffect, useMemo } from "react";
import { initialPatients, initialInvoices, doctors } from "../data/demoData.js";
import { today, uniqueId } from "../utils/format.js";
export default function useClinicState() {
  const [tab, setTab] = useState("Overview");
  const [patients, setPatients] = useState(initialPatients);
  const [invoices, setInvoices] = useState(
    initialInvoices.map((i, index) => ({
      ...i,
      patientId: initialPatients[index].id,
      due: "2026-10-16",
      items: [
        {
          description: "Consultation and clinic services",
          quantity: 1,
          rate: i.amount,
        },
      ],
    })),
  );
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [invoiceDescription, setInvoiceDescription] = useState("Consultation");
  const [invoiceQuantity, setInvoiceQuantity] = useState("1");
  const [invoiceDue, setInvoiceDue] = useState(today());
  const [formError, setFormError] = useState("");
  const [query, setQuery] = useState("");
  const [doctorQuery, setDoctorQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All specialties");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentSent, setAppointmentSent] = useState(false);
  const [modal, setModal] = useState("");
  const [patientForm, setPatientForm] = useState({
    name: "",
    age: "",
    sex: "",
    phone: "",
    email: "",
    address: "",
    emergencyName: "",
    emergencyPhone: "",
    bloodType: "",
    allergies: "",
    notes: "",
  });
  const [invoicePatient, setInvoicePatient] = useState(initialPatients[0].id);
  const [invoiceAmount, setInvoiceAmount] = useState("750");
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("Today");
  const [flags, setFlags] = useState([]);
  const [triage, setTriage] = useState(null);
  const [triagePatient, setTriagePatient] = useState("");
  useEffect(() => setFormError(""), [modal, tab]);
  const visiblePatients = useMemo(
    () => patients.filter((p) => `${p.name} ${p.id} ${p.phone}`.toLowerCase().includes(query.toLowerCase())),
    [patients, query],
  );
  const visibleInvoices = useMemo(
    () => invoices.filter((i) => `${i.id} ${i.patient}`.toLowerCase().includes(query.toLowerCase())),
    [invoices, query],
  );
  const visibleDoctors = useMemo(
    () =>
      doctors.filter(
        (d) =>
          (selectedSpecialty === "All specialties" || d.specialty === selectedSpecialty) &&
          `${d.name} ${d.specialty} ${d.clinic}`.toLowerCase().includes(doctorQuery.toLowerCase()),
      ),
    [doctorQuery, selectedSpecialty],
  );
  const totalBilled = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const collected = invoices
    .filter((i) => i.status === "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const outstanding = totalBilled - collected;
  function addPatient(e) {
    e.preventDefault();
    const name = patientForm.name.trim();
    if (!name || patientForm.age === "" || !/[0-9]{7,}/.test(patientForm.phone.replace(/\D/g, ""))) {
      setFormError("Enter a name, age, and a phone number with at least 7 digits.");
      return;
    }
    setFormError("");
    setPatients([
      {
        id: uniqueId("PT"),
        ...patientForm,
        name,
        age: Number(patientForm.age),
        phone: patientForm.phone.trim(),
        visit: "Today",
        status: "Active",
      },
      ...patients,
    ]);
    setPatientForm({
      name: "",
      age: "",
      sex: "",
      phone: "",
      email: "",
      address: "",
      emergencyName: "",
      emergencyPhone: "",
      bloodType: "",
      allergies: "",
      notes: "",
    });
    setModal("");
  }
  function addInvoice(e) {
    e.preventDefault();
    const amount = Math.round(Number(invoiceAmount) * Number(invoiceQuantity) * 100) / 100;
    const patient = patients.find((p) => p.id === invoicePatient);
    if (!patient || !invoiceDescription.trim() || !Number.isFinite(amount) || amount <= 0) {
      setFormError("Choose a patient and enter a service and valid amount.");
      return;
    }
    const invoice = {
      id: uniqueId("INV"),
      patientId: patient.id,
      patient: patient.name,
      issued: today(),
      due: invoiceDue,
      amount,
      status: "Pending",
      items: [
        {
          description: invoiceDescription.trim(),
          quantity: Number(invoiceQuantity),
          rate: Number(invoiceAmount),
        },
      ],
    };
    setInvoices((current) => [invoice, ...current]);
    setFormError("");
    setModal("");
    setActiveInvoice(invoice.id);
  }
  function checkSymptoms(e) {
    e.preventDefault();
    if (!symptoms.trim()) {
      setFormError("Please describe your symptoms.");
      return;
    }
    setFormError("");
    setTriage({
      level: flags.length ? "Emergency warning sign selected" : "Clinical assessment needed",
      urgent: flags.length > 0,
      note: flags.length
        ? "Seek emergency medical help now. Do not wait for this tool or an online appointment."
        : "This demo cannot determine urgency from your description. Contact a healthcare professional for assessment; seek urgent help if symptoms are severe, worsening, or worrying.",
    });
  }
  const updatePatient = (key, value) =>
    setPatientForm((current) => ({
      ...current,
      [key]: value,
    }));
  return {
    tab,
    setTab,
    patients,
    setPatients,
    invoices,
    setInvoices,
    activeInvoice,
    setActiveInvoice,
    appointments,
    setAppointments,
    invoiceDescription,
    setInvoiceDescription,
    invoiceQuantity,
    setInvoiceQuantity,
    invoiceDue,
    setInvoiceDue,
    formError,
    setFormError,
    query,
    setQuery,
    doctorQuery,
    setDoctorQuery,
    selectedSpecialty,
    setSelectedSpecialty,
    selectedDoctor,
    setSelectedDoctor,
    appointmentSent,
    setAppointmentSent,
    modal,
    setModal,
    patientForm,
    setPatientForm,
    invoicePatient,
    setInvoicePatient,
    invoiceAmount,
    setInvoiceAmount,
    symptoms,
    setSymptoms,
    duration,
    setDuration,
    flags,
    setFlags,
    triage,
    setTriage,
    triagePatient,
    setTriagePatient,
    visiblePatients,
    visibleInvoices,
    visibleDoctors,
    totalBilled,
    collected,
    outstanding,
    addPatient,
    addInvoice,
    checkSymptoms,
    updatePatient,
  };
}
