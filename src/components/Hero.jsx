function Hero({ hero }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-bg-glow-2" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-eyebrow animate-fade-up">{hero.eyebrow}</p>

        <h1 className="hero-title animate-fade-up delay-1">
          We help ambitious businesses{' '}
          <em>scale with precision.</em>
        </h1>

        <p className="hero-description animate-fade-up delay-2">
          {hero.description}
        </p>

        <div className="hero-actions animate-fade-up delay-3">
          <a className="btn btn-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <svg className="btn-arrow" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a className="btn btn-ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <div className="hero-stats animate-fade-up delay-4">
          {hero.stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero