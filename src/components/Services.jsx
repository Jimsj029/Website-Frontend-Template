import { useReveal } from '/src/hooks/Usereveal'

function ServiceRow({ service, delay }) {
  const ref = useReveal()
  return (
    <article ref={ref} className={`service-item reveal d${delay}`}>
      <span className="service-number">{service.number}</span>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.description}</p>
      <div className="service-tags">
        {service.tags.map((tag) => (
          <span className="service-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <svg className="service-arrow" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </article>
  )
}

function Services({ services }) {
  const headLeft = useReveal()
  const headRight = useReveal()

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div ref={headLeft} className="reveal-left">
            <p className="section-eyebrow">{services.title}</p>
            <h2>{services.subtitle}</h2>
          </div>
          <p ref={headRight} className="reveal-right d2">{services.subtitle}</p>
        </div>
        <div className="services-list">
          {services.items.map((service, i) => (
            <ServiceRow key={service.number} service={service} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services