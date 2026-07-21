import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);


export default function Footer({ setCurrentPage }: FooterProps) {
  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Dr. Ajay Kumar' },
    { id: 'services', label: 'Services & Treatments' },
    { id: 'conditions', label: 'Conditions Treated' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog & Health Tips' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const services = [
    { id: 'expertise_breast_cancer', label: 'Breast Cancer Surgery' },
    { id: 'expertise_thyroid_cancer', label: 'Thyroid Cancer Surgery' },
    { id: 'expertise_gi_cancer', label: 'GI Cancer Surgery' },
    { id: 'expertise_gynecological_cancer', label: 'Gynecological Cancer Surgery' },
    { id: 'expertise_soft_tissue_sarcoma', label: 'Soft Tissue Sarcoma' },
    { id: 'expertise_head_neck_cancer', label: 'Head & Neck Cancer' },
    { id: 'expertise_laparoscopic_surgery', label: 'Laparoscopic Surgery' },
    { id: 'expertise_general_surgery', label: 'General Surgery' }
  ];

  return (
    <footer className="footer">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '3rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                height: '50px', width: '180px',
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
              }}>
                <img src="./Logo_transparent.png" alt="Dr. A. Ajay Kumar Logo" style={{ height: '100%', width: '100%', objectFit: 'contain', transform: 'scale(1.8)', transformOrigin: 'left center' }} />
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              MBBS, M.S (General Surgery), MCh (Surgical Oncology)<br />
              Consultant Laparoscopic General & Cancer Surgeon practicing in Chennai, Tamil Nadu.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {[
                { icon: <FacebookIcon />, href: 'https://www.facebook.com/share/1BZBNL71kQ/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: <InstagramIcon />, href: 'https://www.instagram.com/ar.surgical.and.cancer.clinic', label: 'Instagram' },
                { icon: <YoutubeIcon />, href: '#', label: 'YouTube' },
              ].map(s => (
                <a key={s.label} href={s.href} className="social-icon" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #0ABAB5', display: 'inline-block' }}>
              Quick Links
            </h4>
            <nav>
              {quickLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontFamily: 'Inter' }}
                >
                  › {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #0ABAB5', display: 'inline-block' }}>
              Specializations
            </h4>
            <nav>
              {services.map(s => (
                <button
                  key={s.id}
                  onClick={() => navigate(s.id)}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontFamily: 'Inter', display: 'block', marginBottom: '0.4rem' }}
                >
                  › {s.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #0ABAB5', display: 'inline-block' }}>
              Contact Info
            </h4>
            <div>
              {[
                {
                  icon: <MapPin size={16} />,
                  text: 'Dr. A. Ajay Kumar Surgical Oncology Clinic, No- 69, Sri Annai complex, Madras Thiruvallur High Rd, Venugopal Nagar, Thirumullaivoyal, Chennai, Avadi, Tamil Nadu 600062'
                },
                {
                  icon: <Phone size={16} />,
                  text: '+91 95662 43099',
                  href: 'tel:+919566243099'
                },
                {
                  icon: <Mail size={16} />,
                  text: 'drajayoncology@gmail.com',
                  href: 'mailto:drajayoncology@gmail.com'
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ color: '#0ABAB5', flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseOver={e => (e.currentTarget.style.color = '#0ABAB5')}
                      onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{item.text}</span>
                  )}
                </div>
              ))}
              <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(10,186,181,0.1)', borderRadius: '10px', border: '1px solid rgba(10,186,181,0.2)' }}>
                <div style={{ fontSize: '0.8rem', color: '#0ABAB5', fontWeight: 600, fontFamily: 'Inter', marginBottom: '0.3rem' }}>Mon – Sat</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>9:00 AM – 6:00 PM</div>
                <div style={{ fontSize: '0.8rem', color: '#0ABAB5', fontWeight: 600, fontFamily: 'Inter', marginTop: '0.5rem', marginBottom: '0.3rem' }}>Sunday</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>By Appointment Only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <p>© {new Date().getFullYear()} Dr. A. Ajay Kumar. All Rights Reserved.</p>
          <p>Designed with  for patient care | Chennai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
