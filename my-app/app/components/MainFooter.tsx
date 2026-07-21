'use client';
import styles from './MainFooter.module.css';

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.grid} reveal-stagger`}>
          {/* Col 1: Logo & Info */}
          <div className={styles.col1}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="17" fill="#4CAF50" />
                  <path d="M17 6C12.03 6 8 10.03 8 15c0 3.1 1.58 5.84 4 7.5V25a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.5c2.42-1.66 4-4.4 4-7.5 0-4.97-4.03-9-9-9z" fill="white" />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Dr. Chetan Dagur</span>
                <span className={styles.logoTag}>ENT Specialist &amp; Surgeon</span>
              </div>
            </div>
            <p className={styles.aboutText}>
              Providing compassionate, world-class ear, nose, and throat treatments with advanced endoscopy and minimally invasive surgery in Bharatpur.
            </p>
            <div className={styles.socials}>
              {['Facebook', 'Instagram', 'WhatsApp'].map((s) => (
                <a key={s} href="#" className={styles.socialBtn} aria-label={s}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className={styles.col2}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.list}>
              <li><a href="#home" className={styles.link}>Home</a></li>
              <li><a href="#about" className={styles.link}>About Dr. Dagur</a></li>
              <li><a href="#services" className={styles.link}>Services &amp; Treatments</a></li>
              <li><a href="#faq" className={styles.link}>FAQs</a></li>
              <li><a href="#contact" className={styles.link}>Book Appointment</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className={styles.col3}>
            <h4 className={styles.colTitle}>Our Specialties</h4>
            <ul className={styles.list}>
              <li><a href="#services" className={styles.link}>Ear Care &amp; Hearing Aids</a></li>
              <li><a href="#services" className={styles.link}>Nose &amp; Sinusitis Care</a></li>
              <li><a href="#services" className={styles.link}>Throat &amp; Voice Disorders</a></li>
              <li><a href="#services" className={styles.link}>Thyroid &amp; Neck Surgery</a></li>
              <li><a href="#services" className={styles.link}>Pediatric ENT Care</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className={styles.col4}>
            <h4 className={styles.colTitle}>Newsletter &amp; Contact</h4>
            <p className={styles.newsletterSub}>Subscribe for health updates &amp; clinic announcements.</p>
            <form onSubmit={(e) => e.preventDefault()} className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" className={styles.emailInput} required />
              <button type="submit" className={styles.subBtn}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Dr. Chetan Dagur ENT Clinic. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
