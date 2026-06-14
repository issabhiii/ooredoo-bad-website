import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDashboardMetrics } from '../config/api';
import './HomePage.css';

export default function HomePage() {
  const [metrics, setMetrics] = useState<{ activeUsers: number; eventsToday: number } | null>(null);

  useEffect(() => {
    fetchDashboardMetrics().then(setMetrics);
  }, []);

  return (
    <>
      <section className="hero section section-dark">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">Analytics platform</span>
            <h1>Turn product signals into revenue decisions</h1>
            <p className="hero-lead">
              NexusFlow unifies event streams, funnel analytics, and cohort reporting so
              growth teams can ship with confidence.
            </p>
            <div className="hero-actions">
              <Link to="/pricing" className="btn btn-primary">
                View pricing
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Explore products
              </Link>
            </div>
            {metrics && (
              <div className="hero-stats">
                <div>
                  <strong>{metrics.activeUsers.toLocaleString()}</strong>
                  <span>active users tracked</span>
                </div>
                <div>
                  <strong>{(metrics.eventsToday / 1000).toFixed(0)}k</strong>
                  <span>events processed today</span>
                </div>
              </div>
            )}
          </div>
          <div className="hero-visual">
            <img src="/assets/dashboard-preview.svg" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="features" className="section section-light">
        <div className="container">
          <h2 className="section-title">Built for modern growth teams</h2>
          <p className="section-lead">
            From first touch to expansion revenue, NexusFlow keeps every stakeholder aligned
            on the same live metrics.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Real-time pipelines</h3>
              <p>Stream events from web, mobile, and backend services into unified dashboards.</p>
            </article>
            <article className="card">
              <h3>Flexible funnels</h3>
              <p>Model conversion paths without SQL and share snapshots with leadership.</p>
            </article>
            <article className="card">
              <h3>Revenue attribution</h3>
              <p>Connect product usage to billing data for accurate expansion forecasting.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark testimonial-section">
        <div className="container testimonial-wrap">
          <blockquote className="testimonial-quote">
            “NexusFlow replaced three legacy tools and gave our product org a single source of
            truth for activation, retention, and expansion metrics across every region we operate in.”
          </blockquote>
          <p className="testimonial-author">— Priya N., VP Product at Meridian Labs</p>
        </div>
      </section>
    </>
  );
}
