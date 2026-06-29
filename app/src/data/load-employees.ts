// Loads concord_employees.csv into rows of raw strings —
// every field exactly as stored ("" for blanks).
// Deliberately bare-minimum: a quick scaffold loader, not a cleaning or normalisation layer.

const COLUMNS = [
  "employee_id",
  "full_name",
  "email",
  "company",
  "department",
  "job_title",
  "nationality",
  "work_location",
  "visa_type",
  "profile_status",
  "case_status",
  "profile_completion_pct",
  "filed_at",
  "granted_at",
  "expires_at",
  "passport_expiry",
  "assigned_advisor",
  "last_updated",
];

function splitLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"'; // escaped quote
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

const NEWLINE = /\r?\n/;

export async function loadEmployees() {
  const res = await fetch("/concord_employees.csv");
  const text = await res.text();

  const lines = text.split(NEWLINE).filter((line) => line.length > 0);
  const rows = lines.slice(1); // drop the header

  return rows.map((line) => {
    const fields = splitLine(line);
    const row: Record<string, string> = {};
    COLUMNS.forEach((key, i) => {
      row[key] = fields[i] ?? "";
    });
    return row;
  });
}
