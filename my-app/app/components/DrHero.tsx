import styles from './DrHero.module.css';

export default function DrHero() {
  return (
    <section className={styles.hero} id="home" aria-label="Hero section">
      {/* Background gradient overlay */}
      <div className={styles.overlay} />

      {/* Background image (CSS background) */}
      <div className={styles.bg} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Trusted ENT Care · 20+ Years Experience
        </div>

        <h1 className={`${styles.headline} anim-fade-slide-1`}>
          ENT Specialist<br />
          <span className={styles.headlineAccent}>in Bharatpur.</span>
        </h1>

        <p className={`${styles.sub} anim-fade-slide-2`}>
          Trusted by patients across Bharatpur for comprehensive Ear, Nose &amp; Throat
          care — delivered with precision and compassion by Dr. Chetan Dagur.
        </p>

        <div className={`${styles.ctas} anim-fade-slide-3`}>
          <a href="#contact" className={styles.ctaPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Appointment
          </a>
          <a href="#services" className={styles.ctaOutline}>
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className={`${styles.trust} anim-fade-slide-3`}>
          {[
            { icon: '⭐', text: '4.9/5 Rating' },
            { icon: '👥', text: '15,000+ Patients' },
            { icon: '🏥', text: 'ISO Certified Clinic' },
          ].map((item) => (
            <div className={styles.trustItem} key={item.text}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/917597175973?text=Hello%20Dr.%20Chetan%20Dagur%2C%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L0 24l6.335-1.51A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.004-1.369l-.36-.213-3.728.888.938-3.629-.234-.373A9.818 9.818 0 1 1 12 21.818z" />
        </svg>
        <span className={styles.whatsappPulse} />
      </a>
    </section>
  );
}
