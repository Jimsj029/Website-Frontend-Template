function SectionHeader({ title, subtitle }) {
  return (
    <header className="section-header">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  )
}

export default SectionHeader
