'use client';
import { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    q: 'Do I need a prior referral to consult Dr. Chetan Dagur?',
    a: 'No, you can book a direct consultation with Dr. Chetan Dagur without needing a prior referral letter from another physician.',
  },
  {
    q: 'What insurance plans and TPA options are accepted?',
    a: 'We support cashless facilities for major health insurance providers and TPAs for surgical procedures. Our front-desk team will assist you with full documentation.',
  },
  {
    q: 'How should I prepare for an ENT endoscopic evaluation?',
    a: 'Nasal or throat endoscopy requires minimal preparation. Avoid heavy meals right before throat endoscopy. Dr. Dagur will guide you if any local spray is applied during evaluation.',
  },
  {
    q: 'Does Dr. Dagur treat pediatric ENT conditions?',
    a: 'Yes, Dr. Dagur provides child-friendly diagnosis and treatment for pediatric ear infections, tonsillitis, adenoid enlargement, and nasal allergies.',
  },
  {
    q: 'What are the clinic OPD consultation hours?',
    a: 'Consultations run Monday through Saturday from 10:00 AM to 2:00 PM in the morning session, and 5:00 PM to 8:00 PM in the evening session.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={`${styles.leftCol} reveal-left`}>
            <span className={styles.subLabel}>GOT QUESTIONS?</span>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <p className={styles.desc}>
              Find quick answers to common queries regarding OPD timings, treatments, insurance coverage, and pre-surgery instructions.
            </p>
            <div className={styles.contactCard}>
              <div className={styles.contactTitle}>Still have questions?</div>
              <p className={styles.contactText}>Our supportive reception staff is here to guide you.</p>
              <a href="#contact" className={styles.btnPrimary}>
                Contact Us Today
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className={`${styles.rightCol} reveal-right`}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} ${openIdx === idx ? styles.activeItem : ''}`}>
                <button className={styles.questionBtn} onClick={() => toggle(idx)} aria-expanded={openIdx === idx}>
                  <span>{faq.q}</span>
                  <span className={`${styles.chevron} ${openIdx === idx ? styles.chevronOpen : ''}`}>▼</span>
                </button>
                {openIdx === idx && <div className={styles.answer}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
