import { NavLink } from 'react-router-dom';
import { APP_NAME } from '../config/api';
import './Header.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span>{APP_NAME}</span>
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/pricing" className="btn btn-primary header-cta">
          Start free trial
        </NavLink>
      </div>
    </header>
  );
}
