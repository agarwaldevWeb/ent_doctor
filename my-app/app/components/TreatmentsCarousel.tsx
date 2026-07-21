'use client';
import { useRef } from 'react';
import styles from './TreatmentsCarousel.module.css';

const treatments = [
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fm=webp',
    title: 'Septoplasty & Rhinoplasty',
    desc: 'Surgical correction of deviated nasal septum (DNS) to restore breathing and correct nasal alignment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&q=80&fm=webp',
    title: 'Tonsillectomy & Adenoidectomy',
    desc: 'Precision coblation removal of recurrently infected or enlarged tonsils and adenoids in adults & kids.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80&fm=webp',
    title: 'Endoscopic Sinus Surgery (FESS)',
    desc: 'Minimally invasive endoscopic removal of sinus blockages and polyps for chronic sinusitis relief.',
  },
  {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80&fm=webp',
    title: 'Hearing Aid Fitting & Rehabilitation',
    desc: 'Comprehensive digital audiogram analysis, selection, custom trial, and hearing therapy.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80&fm=webp',
    title: 'Snoring & Sleep Apnea Surgery',
    desc: 'Radiofrequency palatoplasty and airway evaluation for severe snoring and obstructive sleep apnea.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&q=80&fm=webp',
    title: 'Thyroid & Neck Tumor Surgery',
    desc: 'Expert nerve-monitoring micro-surgery for thyroid nodules, goiter, and salivary gland swellings.',
  },
];

export default function TreatmentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = direction === 'left' ? -360 : 360;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="treatments">
      <div className={styles.container}>
        <div className={`${styles.topRow} reveal-up`}>
          <div>
            <span className={styles.subLabel}>FEATURED PROCEDURES</span>
            <h2 className={styles.heading}>Popular Treatments &amp; Procedures</h2>
          </div>
          <div className={styles.navBtns}>
            <button className={styles.arrowBtn} onClick={() => scroll('left')} aria-label="Scroll left">
              ←
            </button>
            <button className={styles.arrowBtn} onClick={() => scroll('right')} aria-label="Scroll right">
              →
            </button>
          </div>
        </div>

        <div className={`${styles.carouselTrack} reveal-fade`} ref={trackRef}>
          {treatments.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={item.image} alt={item.title} className={styles.img} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <a href="#contact" className={styles.btnLink}>
                  Book Consultation →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
