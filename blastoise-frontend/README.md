# Blastoise frontend — organized files

Bawat sidebar page ay may sariling JSX at CSS. Simulan sa `src/pages/` kung may babaguhin ka sa isang screen.

| Screen / babaguhin | JSX file | CSS file |
| --- | --- | --- |
| Dashboard / Overview | `src/pages/Dashboard.jsx` | `src/pages/Dashboard.css` |
| Find a doctor | `src/pages/Doctors.jsx` | `src/pages/Doctors.css` |
| Patients | `src/pages/Patients.jsx` | `src/pages/Patients.css` |
| Billing & invoices | `src/pages/Billing.jsx` | `src/pages/Billing.css` |
| AI triage | `src/pages/Triage.jsx` | `src/pages/Triage.css` |
| Login | `src/Login.jsx` | `src/Login.css` |
| Sidebar / menu icons | `src/components/Sidebar.jsx` | `src/components/Layout.css` |
| Topbar / logout button | `src/components/Topbar.jsx` | `src/components/Layout.css` |

## Run

Extract the ZIP, open the `blastoise-frontend` folder that contains `package.json`, then open a terminal there:

```bash
npm install
npm run dev
```

If your terminal is in the extracted outer folder, enter the project first:

```bash
cd blastoise-frontend
npm install
npm run dev
```

Use Node.js 22.12 or newer. Open the Local URL printed by Vite. It can be 5173, 5174, or another available port.
Demo credentials: `demo@example.com` and `demo123`. Authentication is still a frontend demo.

## Saan hahanapin ang ibang code?

- `src/App.jsx` — 51 lines: page selection and layout assembly.
- `src/styles.css` — 12 lines: imports only. The actual styles are in the matching CSS files above.
- `src/components/PatientForm.jsx` — Add patient form.
- `src/components/AppointmentForm.jsx` — Appointment request form.
- `src/components/InvoiceForm.jsx` — Create invoice form.
- `src/components/InvoiceDetails.jsx` — Invoice details and print button.
- `src/components/InvoiceDialog.jsx` — Opens selected invoice and marks it paid in the demo.
- `src/components/LogoutDialog.jsx` — Logout confirmation.
- `src/components/Modal.jsx` — Shared popup with Escape key and focus handling.
- `src/components/Shared.css` — Shared forms, buttons, panels, and dialogs.
- `src/data/demoData.js` — Sample patients, invoices, doctors, photo imports, specialties, warning signs.
- `src/state/useClinicState.js` — State, search filters, totals, addPatient, addInvoice, checkSymptoms.
- `src/state/WorkspaceContext.jsx` — Shares state between pages so navigation does not lose session records.
- `src/utils/format.js` — Currency, dates, and demo IDs.
- `src/styles/base.css` — Global defaults and tables.
- `src/styles/motion.css` — Animations and reduced-motion preferences.
- `src/styles/print.css` — Invoice print layout.
- `src/assets/` — Existing logo and locally imported photos.

Edit the existing rule inside the relevant CSS file. Avoid adding another copy of the same selector to the bottom of `styles.css`.

Frontend only. Changes are held in memory and reset on refresh/logout. Appointments, payments, and triage are demonstrations. For backend integration, replace the local actions in `useClinicState.js` and login/logout callbacks in `main.jsx` with your team's API calls.

## Verification

Production build passed. Automated React DOM interaction checks passed after the module split: login, sidebar navigation, doctor search, appointment creation/list, patient creation including age zero, invoice creation/details/payment status, triage warnings/reset, logout Cancel/confirm. No uncaught runtime errors in those checks.

A computed-style comparison at 390, 768, and 1440px found nine differences in the doctor hero after CSS consolidation. The affected base rules were moved before the responsive rules to restore the intended overrides. That final responsive adjustment was checked by source inspection and production build, not a repeated rendered browser check.

Actual browser visual/print verification remains pending because the earlier browser launch was blocked by execution-environment permissions.
