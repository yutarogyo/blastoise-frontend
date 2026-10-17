export default function PatientTable({ patients }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Phone</th>
            <th>Last visit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>
                <span className="table-person">
                  <i>
                    {p.name
                      .split(" ")
                      .map((x) => x[0])
                      .slice(0, 2)
                      .join("")}
                  </i>
                  <b>{p.name}</b>
                </span>
              </td>
              <td className="muted">{p.id}</td>
              <td>{p.age}</td>
              <td>{p.sex || "—"}</td>
              <td>{p.phone}</td>
              <td className="muted">{p.visit}</td>
              <td>
                <span className={`status ${p.status === "Active" ? "paid" : "pending"}`}>{p.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!patients.length && <div className="empty-state">No matching patients.</div>}
    </div>
  );
}
