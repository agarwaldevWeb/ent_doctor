'use client';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Advanced Technology',
    desc: 'Cutting-edge HD video endoscopy, micro-debriders, and digital audiometry for pinpoint diagnostic accuracy.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Personalized Care',
    desc: 'Tailored medical and surgical treatment plans created around your unique symptoms and lifestyle needs.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 15l-2 5l9-9l-9-9l2 5l-7 4l7 4z" />
      </svg>
    ),
    title: '20+ Years Experience',
    desc: 'Trusted surgical expertise across 8,500+ successful ENT procedures with high patient safety records.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: '24/7 Emergency Support',
    desc: 'Prompt emergency consultation for acute ear pain, foreign body removal, and sudden hearing loss.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal-up`}>
          <span className={styles.subLabel}>THE DEDICATION DIFFERENCE</span>
          <h2 className={styles.heading}>Why Choose Dr. Chetan Dagur?</h2>
        </div>

        <div className={`${styles.grid} reveal-stagger`}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
