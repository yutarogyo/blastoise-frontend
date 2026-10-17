import { useWorkspace } from "../state/WorkspaceContext.jsx";
import PageHeading from "../components/PageHeading.jsx";
import SearchBox from "../components/SearchBox.jsx";
import PatientTable from "../components/PatientTable.jsx";
export default function Patients() {
  const { patients, query, setQuery, visiblePatients } = useWorkspace();
  return (
    <>
      <PageHeading />
      <section className="panel table-panel">
        <div className="table-tools">
          <h2>
            All patients <span className="count-pill">{patients.length}</span>
          </h2>
          <SearchBox value={query} onChange={setQuery} placeholder="Search patients" />
        </div>
        <PatientTable patients={visiblePatients} />
      </section>
    </>
  );
}
