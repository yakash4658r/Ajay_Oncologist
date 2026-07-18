import { Calendar } from 'lucide-react';

interface CTASectionProps {
  setCurrentPage: (page: string) => void;
}

export default function CTASection({ setCurrentPage }: CTASectionProps) {
  return (
    <section style={{ background: '#1B2A4A', padding: '0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
        
        {/* Text Content */}
        <div style={{ flex: '1 1 600px', padding: '5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Take the First Step Toward Advanced Cancer Care
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            We believe every cancer diagnosis deserves a personalized, compassionate treatment plan - not just a surgery, but a path back to a full life. Dr. A. Ajay Kumar and his team are here to guide you with precision and care every step of the way.
          </p>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'block', color: 'white', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Specializing in:</span>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Breast Cancer Care | Thyroid Surgery | GI Cancer Surgery | Gynecological Oncology | Sarcomas | Advanced Laparoscopic Procedures
            </p>
          </div>
          
          <div>
            <button 
              onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                background: 'white', color: '#1B2A4A',
                padding: '1rem 2rem', borderRadius: '8px',
                fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem',
                border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'; }}
            >
              <Calendar size={18} /> MAKE AN APPOINTMENT
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div style={{ flex: '1 1 400px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
          <div style={{ 
            width: '100%', maxWidth: '350px', aspectRatio: '4/5', 
            borderRadius: '24px', overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            <img 
              src="./Doctor.jpeg" 
              alt="Dr. A. Ajay Kumar" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'top'
              }} 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
