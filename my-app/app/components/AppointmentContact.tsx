'use client';
import { useState } from 'react';
import styles from './AppointmentContact.module.css';

export default function AppointmentContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Form Card */}
          <div className={`${styles.formCard} reveal-left`}>
            <h2 className={styles.formTitle}>Book Your Appointment</h2>
            <p className={styles.formSub}>Fill out the form below and our team will get in touch to confirm your visit slot.</p>

            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.checkCircle}>✓</div>
                <h3 className={styles.successTitle}>Appointment Requested!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.name}</strong>. We have received your request for {formData.date || 'the selected date'} and will contact you shortly on {formData.phone}.
                </p>
                <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className={styles.input}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.input}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Preferred Date</label>
                    <input
                      type="date"
                      className={styles.input}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Preferred Slot</label>
                    <select
                      className={styles.input}
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="">Select Time Slot</option>
                      <option value="Morning (10:00 AM - 02:00 PM)">Morning (10:00 AM - 02:00 PM)</option>
                      <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Reason for Visit / Symptoms</label>
                  <textarea
                    rows={3}
                    placeholder="Mention ear pain, sinus issue, hearing loss, throat pain, etc."
                    className={styles.textarea}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Confirm Booking Request
                </button>
              </form>
            )}
          </div>

          {/* Right: Clinic Info & Map Card */}
          <div className={`${styles.infoCard} reveal-right`}>
            <h3 className={styles.infoTitle}>Clinic Information</h3>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <div className={styles.infoLabel}>Clinic Address</div>
                  <div className={styles.infoValue}>Dr. Chetan Dagur ENT Surgeon, Bharatpur, Rajasthan 321001</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📞</div>
                <div>
                  <div className={styles.infoLabel}>Call Support</div>
                  <a href="tel:+917597175973" className={styles.infoLink}>+91 75971 75973</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>✉️</div>
                <div>
                  <div className={styles.infoLabel}>Email Us</div>
                  <a href="mailto:contact@drchetandagur.com" className={styles.infoLink}>contact@drchetandagur.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>⏰</div>
                <div>
                  <div className={styles.infoLabel}>OPD Hours</div>
                  <div className={styles.infoValue}>Mon to Sat: 10:00 AM – 2:00 PM &amp; 5:00 PM – 8:00 PM (Sunday Closed)</div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map iframe */}
            <div className={styles.mapFrame}>
              <iframe
                title="Dr Chetan Dagur ENT Surgeon Bharatpur Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.3958!2d77.496267!3d27.2044653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a326cb125455%3A0x48ebe9167c0664e9!2sDr%20Chetan%20Dagur%20ENT%20Surgeon%20Bharatpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
