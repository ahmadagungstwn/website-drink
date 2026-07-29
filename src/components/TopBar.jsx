import { BagIcon, MenuIcon } from './icons'

export function TopBar({ navItems, cartCount, cartBadgeKey, cartButtonRef }) {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        <span>Drink</span>
        <span>ly</span>
      </a>

      <nav className="topnav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item} href="/" onClick={(event) => event.preventDefault()}>
            {item}
          </a>
        ))}
      </nav>

      <div className="topbar-actions">
        <button
          ref={cartButtonRef}
          className="icon-button icon-button-accent icon-button-cart"
          type="button"
          aria-label={`Open bag with ${cartCount} items`}
        >
          <BagIcon />
          {cartCount > 0 ? (
            <span key={`${cartBadgeKey}-${cartCount}`} className="cart-count-badge">
              {cartCount}
            </span>
          ) : null}
        </button>
        <button className="icon-button" type="button" aria-label="Open menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
