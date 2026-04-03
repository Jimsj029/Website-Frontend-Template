import { useReveal } from 'src/hooks/Usereveal'

function About({ about }) {
  const imgRef = useReveal()
  const eyebrowRef = useReveal()
  const h2Ref = useReveal()
  const p1Ref = useReveal()
  const p2Ref = useReveal()
  const metricsRef = useReveal()

  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <div ref={imgRef} className="reveal-left">
            <img className="about-image" src={about.image} alt={about.imageAlt} />
            <div className="about-image-badge">
              <span className="about-badge-value">12+</span>
              <span className="about-badge-label">Years of practice</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p ref={eyebrowRef} className="section-eyebrow reveal d1">{about.eyebrow}</p>
          <h2 ref={h2Ref} className="reveal d2">{about.title}</h2>
          <p ref={p1Ref} className="reveal d3">{about.body}</p>
          <p ref={p2Ref} className="reveal d4">{about.body2}</p>

          <div ref={metricsRef} className="about-metrics reveal d5">
            {about.highlights.map((h) => (
              <div className="about-metric" key={h.label}>
                <div className="about-metric-value">{h.metric}</div>
                <div className="about-metric-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About