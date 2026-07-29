export function HeroCopy({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
  onShowVariants,
  addToCartButtonRef,
}) {
  return (
    <section className="hero-copy">
      <div className="eyebrow">
        <span>{product.label}</span>
        <span className="eyebrow-pill" aria-hidden="true" />
      </div>

      <h1 className="hero-title">
        {product.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>

      <p className="hero-price">{product.price}</p>
      <p className="hero-description">{product.description}</p>

      <div className="hero-actions">
        <div className="quantity-picker" aria-label="Quantity selector">
          <button
            type="button"
            onClick={onDecrease}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={onIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          ref={addToCartButtonRef}
          className="cart-button"
          type="button"
          onClick={onAddToCart}
        >
          Add to cart
        </button>

        <button
          className="variants-link"
          type="button"
          onClick={onShowVariants}
        >
          <span>See all variants</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </section>
  );
}
