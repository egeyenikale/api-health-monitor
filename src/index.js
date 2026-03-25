export const project = {
  slug: "api-health-monitor",
  title: "API Health Monitor",
  description: "Tool that checks API services on a schedule.",
  features: [
  "Endpoint registry",
  "Scheduled checks",
  "Latency tracking",
  "Status history",
  "Alert rules",
  "Report output"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
