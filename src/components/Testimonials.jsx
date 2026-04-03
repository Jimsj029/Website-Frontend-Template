function Testimonials({ testimonials }) {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div>
            <p className="section-eyebrow">{testimonials.title}</p>
            <h2>Trusted by leaders who demand results.</h2>
          </div>
          <span className="testimonials-meta">{testimonials.items.length} featured engagements</span>
        </div>

        <div className="testimonials-grid">
          {testimonials.items.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <div>
                <span className="testimonial-quote-mark" aria-hidden="true">"</span>
                <blockquote className="testimonial-quote">{item.quote}</blockquote>
              </div>
              <figcaption className="testimonial-author">
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-avatar"
                />
                <div>
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-role">{item.role}</span>
                  <span className="testimonial-company">{item.company}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials