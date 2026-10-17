export default function Stat({ icon: Icon, title, value, note }) {
  return (
    <article className="panel stat-card">
      <div className="stat-head">
        <span>{title}</span>
        <i>
          <Icon size={17} />
        </i>
      </div>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}
