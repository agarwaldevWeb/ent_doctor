'use client';
import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const reviews = [
  {
    name: 'Rajesh Sharma',
    location: 'Bharatpur',
    rating: 5,
    text: 'Dr. Chetan Dagur performed my endoscopic sinus surgery last month. The relief from chronic sinus blockage is incredible. Highly professional clinic and caring doctor!',
    avatar: 'RS',
  },
  {
    name: 'Sunita Verma',
    location: 'Mathura',
    rating: 5,
    text: 'Brought my 7-year-old daughter for frequent ear infections. Dr. Dagur was extremely patient, gentle, and explained the medication clearly. Very satisfied!',
    avatar: 'SV',
  },
  {
    name: 'Amit Agarwal',
    location: 'Alwar',
    rating: 5,
    text: 'Fitted my grandfather with digital hearing aids after proper audiometry testing. Excellent guidance, smooth rehabilitation support, and affordable consultation.',
    avatar: 'AA',
  },
  {
    name: 'Pooja Gupta',
    location: 'Bharatpur',
    rating: 5,
    text: 'My vocal cord issue was diagnosed quickly and treated effectively without unnecessary surgery. Truly one of the best ENT specialists in the region.',
    avatar: 'PG',
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-up`}>
          <span className={styles.subLabel}>PATIENT REVIEWS</span>
          <h2 className={styles.heading}>What Our Patients Say</h2>
        </div>

        <div className={`${styles.carousel} reveal-scale`}>
          <div className={styles.card}>
            <div className={styles.watermark}>“</div>

            <div className={styles.rating}>
              {[...Array(reviews[activeIdx].rating)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>

            <p className={styles.text}>&ldquo;{reviews[activeIdx].text}&rdquo;</p>

            <div className={styles.authorRow}>
              <div className={styles.avatar}>{reviews[activeIdx].avatar}</div>
              <div>
                <div className={styles.name}>{reviews[activeIdx].name}</div>
                <div className={styles.location}>{reviews[activeIdx].location}</div>
              </div>
            </div>
          </div>

          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                onClick={() => setActiveIdx(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
