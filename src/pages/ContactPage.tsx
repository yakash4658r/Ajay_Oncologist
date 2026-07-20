import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

export default function ContactPage({ setCurrentPage }: ContactPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero" style={{ background: `linear-gradient(135deg, rgba(27,42,74,0.95), rgba(15,30,56,0.9)), url('./images/page_banner.png') center/cover no-repeat` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0ABAB5' }}>Reach Us</span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Get in touch with Dr. A. Ajay Kumar's team. We're here to help you with appointments, queries, and medical guidance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.875rem' }}>Home</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#0ABAB5', fontSize: '0.875rem', fontWeight: 600 }}>Contact</span>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <section style={{ background: '#1B2A4A', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Phone size={24} />, label: 'Call Us', value: '+91 95662 43099', sub: 'Mon–Sat, 9AM–6PM', href: 'tel:+919566243099', color: '#0ABAB5' },
              { icon: <span style={{ fontSize: '1.5rem' }}></span>, label: 'WhatsApp', value: '+91 95662 43099', sub: 'Quick Response', href: 'https://wa.me/919566243099', color: '#25D366' },
              { icon: <Mail size={24} />, label: 'Email Us', value: 'drajayoncology@gmail.com', sub: 'Within 24 hours', href: 'mailto:drajayoncology@gmail.com', color: '#f59e0b' },
              { icon: <MapPin size={24} />, label: 'Visit Us', value: 'Thirumullaivoyal, Chennai', sub: 'Click for directions', href: 'https://maps.google.com/?q=No-+69,+Sri+Annai+complex,+Madras+Thiruvallur+High+Rd,+Venugopal+Nagar,+Thirumullaivoyal,+Chennai,+Avadi,+Tamil+Nadu+600062', color: '#ef4444' },
            ].map((c, i) => (
              <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px', padding: '1.25rem',
                  textDecoration: 'none', transition: 'all 0.3s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(10,186,181,0.1)'; e.currentTarget.style.borderColor = '#0ABAB5'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${c.color}20`, border: `1px solid ${c.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontFamily: 'Inter', fontWeight: 600 }}>{c.label}</div>
                  <div style={{ color: 'white', fontWeight: 600, fontFamily: 'Inter', fontSize: '0.875rem' }}>{c.value}</div>
                  <div style={{ color: c.color, fontSize: '0.72rem', fontWeight: 600 }}>{c.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* Contact Form */}
            <div data-aos="fade-right">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Send Us a <span>Message</span></h2>
              <div className="section-divider"></div>
              <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                Fill out the form below and our team will get back to you within 24 hours. For urgent queries, please call us directly.
              </p>

              {submitted ? (
                <div style={{ background: 'linear-gradient(135deg, rgba(10,186,181,0.1), rgba(27,42,74,0.05))', border: '1px solid #0ABAB5', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '0.75rem' }}>Message Sent Successfully!</h3>
                  <p style={{ color: '#475569' }}>Our team will contact you within 24 hours. Thank you for reaching out to Dr. Ajay Kumar's clinic.</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {['Name received', 'We will call back', 'Within 24 hours'].map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0ABAB5', fontSize: '0.82rem', fontWeight: 600 }}>
                        <CheckCircle size={14} /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { field: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your Full Name', required: true },
                    { field: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: false },
                    { field: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 95662 43099', required: true },
                    { field: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', required: false },
                  ].map(f => (
                    <div key={f.field}>
                      <label style={{ display: 'block', marginBottom: '0.4rem', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem', color: '#1B2A4A' }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        value={formData[f.field as keyof typeof formData]}
                        onChange={e => setFormData(p => ({ ...p, [f.field]: e.target.value }))}
                        style={{
                          width: '100%', padding: '0.85rem 1rem',
                          border: '1.5px solid #e2e8f0', borderRadius: '10px',
                          fontFamily: 'Inter', fontSize: '0.9rem', outline: 'none',
                          transition: 'border-color 0.3s ease',
                          background: 'white', color: '#1B2A4A'
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(10,186,181,0.15)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem', color: '#1B2A4A' }}>Message</label>
                    <textarea
                      placeholder="Describe your symptoms, concerns, or any questions you have..."
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      style={{
                        width: '100%', padding: '0.85rem 1rem',
                        border: '1.5px solid #e2e8f0', borderRadius: '10px',
                        fontFamily: 'Inter', fontSize: '0.9rem', outline: 'none',
                        transition: 'border-color 0.3s ease', resize: 'vertical',
                        background: 'white', color: '#1B2A4A'
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(10,186,181,0.15)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <button type="submit" className="btn-primary-custom" style={{ justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
                     Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div data-aos="fade-left">
              {/* Working Hours */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '1.5rem', border: '1px solid #e8f4f8' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={18} style={{ color: '#0ABAB5' }} /> Working Hours
                </h3>
                <table className="working-hours-table">
                  <thead>
                    <tr><th>Day</th><th>Hours</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {[
                      { day: 'Monday', time: '9:00 AM – 6:00 PM', open: true },
                      { day: 'Tuesday', time: '9:00 AM – 6:00 PM', open: true },
                      { day: 'Wednesday', time: '9:00 AM – 6:00 PM', open: true },
                      { day: 'Thursday', time: '9:00 AM – 6:00 PM', open: true },
                      { day: 'Friday', time: '9:00 AM – 6:00 PM', open: true },
                      { day: 'Saturday', time: '9:00 AM – 4:00 PM', open: true },
                      { day: 'Sunday', time: 'By Appointment', open: false },
                    ].map(h => (
                      <tr key={h.day}>
                        <td style={{ fontWeight: 600, color: '#1B2A4A', fontFamily: 'Inter', fontSize: '0.85rem' }}>{h.day}</td>
                        <td style={{ fontSize: '0.85rem' }}>{h.time}</td>
                        <td>
                          <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '50px', fontSize: '0.72rem', fontFamily: 'Inter', fontWeight: 700, background: h.open ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', color: h.open ? '#10b981' : '#ef4444' }}>
                            {h.open ? 'Open' : 'Closed'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Map */}
              <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '1.5rem', border: '1px solid #e8f4f8' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #e8f4f8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} style={{ color: '#0ABAB5' }} />
                  <span style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', fontSize: '0.95rem' }}>Find Us on Map</span>
                </div>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.99074079485!2d79.72892945!3d13.04738065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1643000000000!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Ajay Kumar Clinic Location"
                  />
                </div>
              </div>

              {/* Address Card */}
              <div style={{ background: 'linear-gradient(135deg, #1B2A4A, #243561)', borderRadius: '16px', padding: '1.75rem', color: 'white' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}> Clinic Address</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Dr. A. Ajay Kumar Surgical Oncology Clinic<br />
                  No- 69, Sri Annai complex, Madras Thiruvallur High Rd<br />
                  Venugopal Nagar, Thirumullaivoyal<br />
                  Chennai, Avadi, Tamil Nadu 600062
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://maps.google.com/?q=No-+69,+Sri+Annai+complex,+Madras+Thiruvallur+High+Rd,+Venugopal+Nagar,+Thirumullaivoyal,+Chennai,+Avadi,+Tamil+Nadu+600062" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0ABAB5', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
                     Get Directions
                  </a>
                  <a href="tel:+919566243099"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#C9A84C', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
                     Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
