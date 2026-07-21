'use client';
import styles from './DoctorMessage.module.css';

export default function DoctorMessage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Doctor Image with Play button */}
          <div className={`${styles.mediaCol} reveal-scale`}>
            <div className={styles.imgFrame}>
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80&fm=webp"
                alt="Dr. Chetan Dagur Message"
                className={styles.doctorImg}
              />
              <button className={styles.playBtn} aria-label="Play video message">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Quote Content */}
          <div className={`${styles.textCol} reveal-right`}>
            <span className={styles.subLabel}>A MESSAGE FROM THE SURGEON</span>
            <blockquote className={styles.quote}>
              &ldquo;My goal is to combine advanced medical expertise with genuine compassion — because every patient deserves to be heard, not just treated.&rdquo;
            </blockquote>
            <div className={styles.attribution}>
              <div className={styles.name}>Dr. Chetan Dagur</div>
              <div className={styles.title}>Senior ENT Specialist &amp; Surgeon, Bharatpur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
