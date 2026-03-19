export function BottomStrip({ items }) {
  return (
    <div className="bottom-strip" aria-hidden="true">
      <div className="bottom-strip-track">
        {items.map((item) => (
          <div key={item.id} className="strip-item">
            <span>{item.label}</span>
            <span className="strip-divider">&rsaquo;</span>
          </div>
        ))}
      </div>
    </div>
  )
}
