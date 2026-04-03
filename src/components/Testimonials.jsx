import SectionHeader from './SectionHeader'

function Testimonials({ testimonials }) {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHeader title={testimonials.title} />
        <div className="testimonial-grid">
          {testimonials.items.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <img src={item.image} alt={item.imageAlt} className="testimonial-avatar" />
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
