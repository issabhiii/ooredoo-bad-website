import ContactForm from '../components/ContactForm';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <section id="contact-details" className="section section-dark contact-intro">
        <div className="container contact-intro-grid">
          <div>
            <span className="badge">Contact</span>
            <h1 className="section-title">Let’s design your analytics rollout</h1>
            <p className="section-lead">
              Share your stack, event volume, and team structure. We will recommend a
              deployment path and connect you with a solutions engineer.
            </p>
          </div>
          <div className="contact-details-card">
            <h2>Sales &amp; partnerships</h2>
            <p>sales@nexusflow.io</p>
            <p>+1 (415) 555-0198</p>
            <p>Mon–Fri, 9am–6pm PT</p>
          </div>
        </div>
      </section>

      <section id="contact-details" className="section section-dark contact-form-section">
        <div className="container contact-form-layout">
          <ContactForm />
          <aside className="contact-aside">
            <h2>What happens next</h2>
            <ol>
              <li>We review your current analytics stack within one business day.</li>
              <li>A solutions engineer schedules a tailored workspace walkthrough.</li>
              <li>You receive a rollout plan with timelines and integration notes.</li>
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
