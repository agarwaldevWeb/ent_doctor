'use client';
import styles from './ServicesGrid.module.css';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 12a6 6 0 0 1 6-6 6 6 0 0 1 6 6v3a3 3 0 0 1-3 3h-1" />
        <path d="M12 18v3" />
        <path d="M9 21h6" />
      </svg>
    ),
    title: 'Ear Care',
    desc: 'Comprehensive diagnosis for hearing loss, ear infections, tinnitus management, wax removal, and eardrum repairs.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 3v18" />
        <path d="M5 8c0 3 3 5 7 5s7-2 7-5" />
      </svg>
    ),
    title: 'Nose & Sinus Care',
    desc: 'Advanced treatment for chronic sinusitis, nasal polyps, allergies, deviated septum (DNS), and nasal blockage.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      </svg>
    ),
    title: 'Throat & Voice Care',
    desc: 'Expert evaluation of tonsillitis, vocal cord nodules, hoarseness, swallowing difficulties, and throat infections.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: 'Head & Neck Surgery',
    desc: 'Surgical management of thyroid disorders, neck masses, salivary gland tumors, and head-neck lesions.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: 'Pediatric ENT Care',
    desc: 'Gentle, child-friendly treatment for recurrent ear infections, enlarged adenoids, tonsils, and congenital ENT problems.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: 'Hearing Aid Fitting',
    desc: 'Audiological evaluation, digital hearing aid selection, custom trial, and post-fitting rehabilitation support.',
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-up`}>
          <span className={styles.subLabel}>WHAT WE TREAT</span>
          <h2 className={styles.heading}>Comprehensive ENT Services</h2>
          <p className={styles.subText}>
            Delivering holistic ear, nose, and throat treatments using state-of-the-art diagnostic technology and patient-centric methods.
          </p>
        </div>

        <div className={`${styles.grid} reveal-stagger`}>
          {services.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <a href="#contact" className={styles.link}>
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
