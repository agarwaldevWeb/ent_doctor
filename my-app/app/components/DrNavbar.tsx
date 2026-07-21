'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './DrNavbar.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Contact Us', href: '#contact' },
];

export default function DrNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* ── Logo ── */}
          <a href="#home" className={styles.logo}>
            <div className={styles.logoIcon}>
              {/* Ear/head silhouette SVG */}
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="17" fill="#4CAF50" />
                <path
                  d="M17 6C12.03 6 8 10.03 8 15c0 3.1 1.58 5.84 4 7.5V25a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.5c2.42-1.66 4-4.4 4-7.5 0-4.97-4.03-9-9-9z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="17" cy="14" r="3" fill="#4CAF50" />
                <path d="M14 19 Q17 22 20 19" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Dr. Chetan Dagur</span>
              <span className={styles.logoTagline}>ENT Specialist &amp; Surgeon</span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div className={styles.right}>
            <a href="#contact" className={styles.cta}>
              Book Appointment
            </a>
            <button
              className={`${styles.hamburger} ${drawerOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={drawerOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {drawerOpen && (
        <div className={styles.overlay} onClick={() => setDrawerOpen(false)} />
      )}
      <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`} aria-hidden={!drawerOpen}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Dr. Chetan Dagur</span>
          <button
            className={styles.drawerClose}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className={styles.drawerNav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.drawerLink}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className={styles.drawerCta} onClick={() => setDrawerOpen(false)}>
            Book Appointment
          </a>
        </nav>
      </aside>
    </>
  );
}
