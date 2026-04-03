import SectionHeader from './SectionHeader'

function Services({ services }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader title={services.title} subtitle={services.subtitle} />
        <div className="services-grid">
          {services.items.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.imageAlt} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
