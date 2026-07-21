'use client';
import styles from './AboutDoctor.module.css';

const badges = [
  'MBBS',
  'MS – ENT',
  'FACS (USA)',
  '20+ Yrs Exp',
  'Fellow in Rhinology & Endoscopy',
];

export default function AboutDoctor() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left image column */}
          <div className={`${styles.imageCol} reveal-left`}>
            <div className={styles.accentShape} />
            <div className={styles.imageFrame}>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80&fm=webp"
                alt="Dr. Chetan Dagur - ENT Specialist"
                className={styles.doctorImg}
              />
              <div className={styles.experienceTag}>
                <span className={styles.expNum}>20+</span>
                <span className={styles.expText}>Years of Clinical Excellence</span>
              </div>
            </div>
          </div>

          {/* Right text column */}
          <div className={`${styles.textCol} reveal-right`}>
            <span className={styles.subLabel}>ABOUT THE DOCTOR</span>
            <h2 className={styles.heading}>Meet Dr. Chetan Dagur</h2>
            <p className={styles.leadText}>
              Dr. Chetan Dagur is a renowned ENT Surgeon and Specialist in Bharatpur with over two decades of dedicated patient care and surgical precision.
            </p>
            <p className={styles.desc}>
              With extensive qualifications including MBBS, MS (ENT), and Fellowship training in Advanced Rhinology and Micro-Ear Surgeries, Dr. Dagur has treated over 15,000 patients and successfully performed more than 8,500 complex procedures.
            </p>
            <p className={styles.desc}>
              His patient-first philosophy focuses on accurate diagnosis, minimally invasive interventions, and gentle compassionate care for both pediatric and adult patients.
            </p>

            {/* Badges */}
            <div className={styles.badges}>
              {badges.map((badge, i) => (
                <span key={i} className={styles.badge}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            {/* Action */}
            <div className={styles.action}>
              <a href="#contact" className={styles.btnOutline}>
                Know More About Dr. Dagur
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
