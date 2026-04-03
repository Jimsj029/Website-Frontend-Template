function Hero({ hero }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-copy">{hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero-card" aria-label="Business performance highlights">
          <img className="hero-image" src={hero.image} alt={hero.imageAlt} />
          <h3>Performance snapshot</h3>
          <ul>
            {hero.stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
