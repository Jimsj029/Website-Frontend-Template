function CallToAction({ cta }) {
  return (
    <section className="section cta-section" id="contact">
      <div className="container cta-card">
        <div>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <a className="button button-primary" href={cta.action.href}>
          {cta.action.label}
        </a>
      </div>
    </section>
  )
}

export default CallToAction
