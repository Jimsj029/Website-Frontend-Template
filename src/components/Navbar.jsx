import { useState, useEffect } from 'react'

function Navbar({ brand, navLinks }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-wrap">
        <a className="brand" href="#top">
          <div className="brand-mark">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2L14 12H2L8 2Z" fill="#0d0e12" />
            </svg>
          </div>
          <span className="brand-name">{brand.name}</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="nav-cta" href="#contact">Let's talk</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar