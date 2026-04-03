import SectionHeader from './SectionHeader'

function About({ about }) {
  return (
    <section className="section section-alt" id="about">
      <div className="container about-grid">
        <div>
          <SectionHeader title={about.title} />
          <p>{about.body}</p>
          <img className="about-image" src={about.image} alt={about.imageAlt} />
        </div>
        <div className="about-list-card">
          <h3>Template highlights</h3>
          <ul>
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
