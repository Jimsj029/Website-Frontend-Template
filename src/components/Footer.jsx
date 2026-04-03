function Footer({ footer }) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-name">{footer.copyrightName}</span>
            <p>Strategy and advisory for businesses that are serious about growth.</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p className="footer-contact-item">{footer.contactEmail}</p>
            <p className="footer-contact-item">{footer.contactPhone}</p>
            <p className="footer-contact-item">{footer.address}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} {footer.copyrightName}. All rights reserved.</p>
          <p className="footer-copy">Built for ambitious businesses.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer