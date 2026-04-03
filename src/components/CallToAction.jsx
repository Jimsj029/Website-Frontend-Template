import { Usereveal } from '/src/hooks/Usereveal'

function CallToAction({ cta }) {
  const ref = Usereveal()

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div ref={ref} className="cta-card reveal">
          <div className="cta-bg-accent" aria-hidden="true" />
          <div className="cta-content">
            <p className="section-eyebrow">Get in touch</p>
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
          </div>
          <div className="cta-action">
            <a className="btn btn-primary" href={cta.action.href}>
              {cta.action.label}
              <svg className="btn-arrow" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction