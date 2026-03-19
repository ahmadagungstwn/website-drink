export function FloatingBadge({ badge }) {
  return (
    <div
      className={`floating-badge floating-badge-${badge.variant} floating-badge-${badge.position}`}
    >
      <strong>{badge.value}</strong>
      <span>{badge.label}</span>
    </div>
  );
}
