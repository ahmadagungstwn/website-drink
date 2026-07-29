import { useCallback, useEffect, useRef, useState } from 'react'
import { BottomStrip } from './components/BottomStrip'
import { HeroCopy } from './components/HeroCopy'
import { HeroVisual } from './components/HeroVisual'
import { TopBar } from './components/TopBar'
import { products, stripItems, topNav } from './data/products'
import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [cartBadgeKey, setCartBadgeKey] = useState(0)
  const [flyingItem, setFlyingItem] = useState(null)

  const cartButtonRef = useRef(null)
  const addToCartButtonRef = useRef(null)
  const flyingItemTimeoutRef = useRef(null)

  const activeProduct = products[activeIndex]

  const cycleProduct = useCallback((direction) => {
    setActiveIndex((prev) => (prev + direction + products.length) % products.length)
  }, [])

  const updateQuantity = useCallback((delta) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }, [])

  const handleAddToCart = useCallback(() => {
    setCartCount((prev) => prev + quantity)
    setCartBadgeKey((prev) => prev + 1)

    const sourceEl = addToCartButtonRef.current
    const targetEl = cartButtonRef.current
    if (!sourceEl || !targetEl) return

    const sourceRect = sourceEl.getBoundingClientRect()
    const targetRect = targetEl.getBoundingClientRect()

    const startX = sourceRect.left + sourceRect.width / 2
    const startY = sourceRect.top + sourceRect.height / 2

    setFlyingItem({
      id: Date.now(),
      quantity,
      startX,
      startY,
      deltaX: targetRect.left + targetRect.width / 2 - startX,
      deltaY: targetRect.top + targetRect.height / 2 - startY,
    })

    window.clearTimeout(flyingItemTimeoutRef.current)
    flyingItemTimeoutRef.current = window.setTimeout(() => setFlyingItem(null), 720)
  }, [quantity])

  useEffect(() => {
    return () => window.clearTimeout(flyingItemTimeoutRef.current)
  }, [])

  const themeVars = {
    '--page-bg': activeProduct.theme.page,
    '--page-bg-dark': activeProduct.theme.pageDark,
    '--accent': activeProduct.theme.accent,
    '--accent-text': activeProduct.theme.accentText,
    '--soft-text': activeProduct.theme.soft,
    '--badge-main': activeProduct.theme.badgeMain,
    '--badge-main-text': activeProduct.theme.badgeMainText,
    '--badge-second': activeProduct.theme.badgeSecond,
    '--badge-third': activeProduct.theme.badgeThird,
  }

  return (
    <div className="drink-app" style={themeVars}>
      <TopBar
        navItems={topNav}
        cartCount={cartCount}
        cartBadgeKey={cartBadgeKey}
        cartButtonRef={cartButtonRef}
      />

      <main className="page-content">
        <section className="hero-stage">
          <div className="hero-layout">
            <HeroCopy
              key={`copy-${activeProduct.id}`}
              product={activeProduct}
              quantity={quantity}
              onIncrease={() => updateQuantity(1)}
              onDecrease={() => updateQuantity(-1)}
              onAddToCart={handleAddToCart}
              onShowVariants={() => cycleProduct(1)}
              addToCartButtonRef={addToCartButtonRef}
            />

            <HeroVisual
              key={`visual-${activeProduct.id}`}
              product={activeProduct}
              onPrev={() => cycleProduct(-1)}
              onNext={() => cycleProduct(1)}
            />
          </div>

          <BottomStrip items={stripItems} />
        </section>
      </main>

      {flyingItem && (
        <div
          key={flyingItem.id}
          className="flying-cart-item"
          aria-hidden="true"
          style={{
            '--fly-start-x': `${flyingItem.startX}px`,
            '--fly-start-y': `${flyingItem.startY}px`,
            '--fly-dx': `${flyingItem.deltaX}px`,
            '--fly-dy': `${flyingItem.deltaY}px`,
          }}
        >
          +{flyingItem.quantity}
        </div>
      )}
    </div>
  )
}

export default App
