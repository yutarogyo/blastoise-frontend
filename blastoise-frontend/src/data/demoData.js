import photo0 from "../assets/photos/5998467.jpg";
import photo1 from "../assets/photos/6129500.jpg";
import photo2 from "../assets/photos/6749778.jpg";
import photo3 from "../assets/photos/5722163.jpg";
import photo4 from "../assets/photos/32428850.jpg";
import photo5 from "../assets/photos/19438560.jpg";
import photo6 from "../assets/photos/5452256.jpg";
import photo7 from "../assets/photos/10695742.jpg";
import photo8 from "../assets/photos/32115905.jpg";
import photo9 from "../assets/photos/5996692.jpg";
import photo10 from "../assets/photos/19596247.jpg";
import photo11 from "../assets/photos/6303550.jpg";
export const initialPatients = [
  {
    id: "PT-1024",
    name: "Sofia Reyes",
    age: 28,
    sex: "Female",
    phone: "0917 000 1024",
    visit: "Oct 8, 2026",
    status: "Active",
  },
  {
    id: "PT-1023",
    name: "Miguel Santos",
    age: 41,
    sex: "Male",
    phone: "0917 000 1023",
    visit: "Oct 7, 2026",
    status: "Active",
  },
  {
    id: "PT-1022",
    name: "Isabella Cruz",
    age: 35,
    sex: "Female",
    phone: "0917 000 1022",
    visit: "Oct 6, 2026",
    status: "Follow-up",
  },
];
export const initialInvoices = [
  {
    id: "INV-2026-041",
    patient: "Sofia Reyes",
    issued: "Oct 8, 2026",
    amount: 1250,
    status: "Paid",
  },
  {
    id: "INV-2026-040",
    patient: "Miguel Santos",
    issued: "Oct 7, 2026",
    amount: 750,
    status: "Pending",
  },
  {
    id: "INV-2026-039",
    patient: "Isabella Cruz",
    issued: "Oct 6, 2026",
    amount: 1850,
    status: "Overdue",
  },
];
export const doctors = [
  {
    name: "Dr. Andrea Santos",
    specialty: "Family Medicine",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Mon, Wed, Fri · 9:00 AM–4:00 PM",
    fee: 800,
    image: photo0,
  },
  {
    name: "Dr. Miguel Reyes",
    specialty: "Pediatrics",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Tue, Thu, Sat · 10:00 AM–5:00 PM",
    fee: 900,
    image: photo1,
  },
  {
    name: "Dr. Sofia Lim",
    specialty: "Dermatology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Mon–Thu · 1:00 PM–6:00 PM",
    fee: 1200,
    image: photo2,
  },
  {
    name: "Dr. Paolo Garcia",
    specialty: "Cardiology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Mon, Thu · 9:00 AM–3:00 PM",
    fee: 1500,
    image: photo3,
  },
  {
    name: "Dr. Camille Navarro",
    specialty: "OB-GYN",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Tue, Fri · 10:00 AM–5:00 PM",
    fee: 1100,
    image: photo4,
  },
  {
    name: "Dr. Luis Mendoza",
    specialty: "Internal Medicine",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Mon–Wed · 8:00 AM–2:00 PM",
    fee: 950,
    image: photo5,
  },
  {
    name: "Dr. Bea Castillo",
    specialty: "Ophthalmology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Wed, Sat · 9:00 AM–4:00 PM",
    fee: 1000,
    image: photo6,
  },
  {
    name: "Dr. Nathan Dela Cruz",
    specialty: "ENT",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Tue, Thu · 1:00 PM–6:00 PM",
    fee: 1000,
    image: photo7,
  },
  {
    name: "Dr. Mariel Flores",
    specialty: "Endocrinology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Mon, Fri · 9:00 AM–1:00 PM",
    fee: 1300,
    image: photo8,
  },
  {
    name: "Dr. Gabriel Ramos",
    specialty: "Gastroenterology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Wed, Sat · 10:00 AM–4:00 PM",
    fee: 1250,
    image: photo9,
  },
  {
    name: "Dr. Trisha Aquino",
    specialty: "Neurology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Tue, Fri · 9:00 AM–2:00 PM",
    fee: 1400,
    image: photo10,
  },
  {
    name: "Dr. Enzo Villanueva",
    specialty: "Pulmonology",
    clinic: "ICCT · Cainta, Rizal",
    schedule: "Mon, Thu · 10:00 AM–3:00 PM",
    fee: 1200,
    image: photo11,
  },
];
export const specialties = [
  "All specialties",
  "Family Medicine",
  "Internal Medicine",
  "Pediatrics",
  "OB-GYN",
  "Dermatology",
  "Cardiology",
  "Ophthalmology",
  "ENT",
  "Endocrinology",
  "Gastroenterology",
  "Neurology",
  "Pulmonology",
];
export const redFlags = [
  "Trouble breathing",
  "Chest pain",
  "Unconscious or hard to wake",
  "Possible stroke signs",
  "Severe bleeding",
  "Seizure",
  "Severe allergic reaction",
];
