import './ProductsPage.css';

const modules = [
  {
    title: 'Event Explorer',
    description: 'Inspect live event payloads, validate schemas, and replay sessions.',
  },
  {
    title: 'Cohort Studio',
    description: 'Build retention views with drag-and-drop filters and saved segments.',
  },
  {
    title: 'Revenue Lens',
    description: 'Map product milestones to billing events for expansion forecasting.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="products-hero section section-dark">
        <div className="container">
          <span className="badge">Product suite</span>
          <h1 className="section-title">Everything you need to understand growth</h1>
          <p className="section-lead">
            NexusFlow modules share a unified data model so teams can move from insight to
            action without exporting spreadsheets.
          </p>
        </div>
        <div className="products-marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Live dashboards</span>
            <span>Session replay</span>
            <span>Experiment analysis</span>
            <span>Revenue cohorts</span>
            <span>Alerting</span>
          </div>
        </div>
      </section>

      <section id="features" className="section section-light">
        <div className="container products-grid">
          <div className="products-copy">
            <h2 className="section-title">Modular analytics workspace</h2>
            <p className="section-lead">
              Compose dashboards from reusable blocks and share curated views with stakeholders.
            </p>
            <div className="card-grid">
              {modules.map((module) => (
                <article key={module.title} className="card">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </article>
              ))}
            </div>
          </div>
          <figure className="products-figure">
            <img
              src="/assets/feature-analytics.jpg"
              alt="Analytics workspace preview"
              className="products-shot"
            />
            <figcaption>Workspace overview with live funnel and cohort panels.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
