import { APP_NAME } from '../config/api';
import './Footer.css';

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.75h4v12H3v-12zm7 0h3.8v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v6.35h-4v-5.63c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.73H10v-12z" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.11-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.91-.39c.99 0 1.98.13 2.91.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{APP_NAME}</p>
          <p className="footer-copy">
            Unified analytics for product, marketing, and revenue teams.
          </p>
        </div>
        <div className="footer-links">
          <a href="/products">Products</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com" className="social-link" target="_blank" rel="noreferrer">
            <IconLinkedIn />
          </a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noreferrer">
            <IconTwitter />
          </a>
          <a href="https://github.com" className="social-link" target="_blank" rel="noreferrer">
            <IconGithub />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {APP_NAME}. All rights reserved.</span>
      </div>
    </footer>
  );
}
