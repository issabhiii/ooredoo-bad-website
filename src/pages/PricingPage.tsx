import { Link } from 'react-router-dom';
import './PricingPage.css';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    blurb: 'For early-stage teams validating product-market fit.',
    perks: ['1M events / month', '3 seats', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$149',
    blurb: 'For scaling teams running experiments across funnels.',
    perks: ['10M events / month', '15 seats', 'Slack support', 'Revenue Lens'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'For global orgs with advanced governance needs.',
    perks: ['Unlimited events', 'SSO & SCIM', 'Dedicated CSM', 'Custom SLAs'],
  },
];

export default function PricingPage() {
  return (
    <section className="section section-light pricing-page">
      <div className="container">
        <span className="badge">Pricing</span>
        <h1 className="section-title">Plans that scale with your data</h1>
        <p className="section-lead">
          Start with a 14-day trial. Upgrade when your event volume or team size grows.
        </p>
        <div className="pricing-toolbar">
          <button type="button" className="btn btn-secondary compare-btn">
            Compare plans
          </button>
          <a href="/checkout" className="btn btn-primary">
            Proceed to checkout
          </a>
        </div>
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={tier.featured ? 'pricing-card featured' : 'pricing-card'}
            >
              {tier.featured && <span className="pricing-tag">Most popular</span>}
              <h2>{tier.name}</h2>
              <p className="pricing-price">{tier.price}</p>
              <p className="pricing-blurb">{tier.blurb}</p>
              <ul>
                {tier.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Talk to sales
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
