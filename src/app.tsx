import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { loadEmployees } from "./data/load-employees";

// SCAFFOLD ONLY. A quick, thoughtless dashboard:
// a hand-rolled status badge, a few raw columns, and one design-system Card.
// It makes no real decisions about what an HR manager needs to see or how to order it —
// that's the exercise.
// The data layer reads every column; the UI shows a handful.
function App() {
  const [rows, setRows] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    loadEmployees().then(setRows);
  }, []);

  const sorted = [...rows].sort((a, b) =>
    a.expires_at < b.expires_at ? -1 : 1
  );

  return (
    <div className="page">
      <h1>Visa Tracking</h1>
      <p className="subtitle">Kowhai Robotics — HR dashboard (scaffold)</p>

      <Card label="Employees" value={rows.length} />

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Name</th>
            <th>Case status</th>
            <th>Expires</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={row.employee_id}>
              <td>
                <span
                  className="badge"
                  style={{
                    background: row.expires_at ? "#2e7d32" : "#9e9e9e",
                  }}
                >
                  {row.expires_at ? "Active" : "No expiry"}
                </span>
              </td>
              <td>{row.employee_id}</td>
              <td>{row.full_name}</td>
              <td>{row.case_status}</td>
              <td>{row.expires_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
