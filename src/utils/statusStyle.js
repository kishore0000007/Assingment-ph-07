export function getStatusStyle(status) {
  switch (status) {
    case "Overdue":     return "text-red-600 bg-red-100";
    case "Almost-Due":  return "text-yellow-600 bg-yellow-100";
    case "On-Track":    return "bg-green-100 text-green-700";
    default:            return "";
  }
}
