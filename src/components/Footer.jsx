function Footer({ footer }) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Contact</h3>
          <p>{footer.contactEmail}</p>
          <p>{footer.contactPhone}</p>
          <p>{footer.address}</p>
        </div>
        <p>
          {year} {footer.copyrightName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
