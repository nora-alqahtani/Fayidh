// Shared UI components will be added during team development.
export function EmptyState({ title = "Nothing here yet", message = "" }) {
  return <section className="page"><h2>{title}</h2><p>{message}</p></section>;
}
