import { FloatingBadge } from './FloatingBadge'

export function HeroVisual({ product, onPrev, onNext }) {
  return (
    <section className="hero-visual" aria-label={`${product.label} product preview`}>
      <div className="hero-glow" aria-hidden="true" />

      <div className="bottle-stage">
        <img
          className="bottle-image"
          src={product.image}
          alt={`${product.label} yogurt drink bottle`}
        />
      </div>

      {product.badges.map((badge) => (
        <FloatingBadge key={badge.label} badge={badge} />
      ))}

      <div className="stage-controls">
        <button type="button" onClick={onPrev} aria-label="Previous flavor">
          &larr;
        </button>
        <button type="button" onClick={onNext} aria-label="Next flavor">
          &rarr;
        </button>
      </div>
    </section>
  )
}
