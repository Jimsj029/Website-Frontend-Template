function Navbar({ brand, navLinks }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div className="brand-block">
          <a className="brand" href="#top">
            {brand.name}
          </a>
          <p>{brand.tagline}</p>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
