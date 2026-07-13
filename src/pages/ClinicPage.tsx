import { useEffect } from 'react';
import { Heart, Activity, CheckCircle, Shield } from 'lucide-react';

interface ClinicPageProps {
  setCurrentPage: (page: string) => void;
}

export default function ClinicPage({ setCurrentPage }: ClinicPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition" style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ 
        position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(15,30,56,0.92) 0%, rgba(27,42,74,0.96) 100%), url('./images/page_banner.png') center/cover no-repeat`, 
        padding: '8rem 0', color: 'white' 
      }}>
        {/* Animated background elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(10,186,181,0.2) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float 10s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'float 12s ease-in-out infinite reverse' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <span className="section-label" data-aos="fade-up" style={{ color: '#0ABAB5', marginBottom: '1.5rem', display: 'inline-block', background: 'rgba(10,186,181,0.1)', padding: '0.4rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(10,186,181,0.3)' }}>AR Surgical & Cancer Clinic</span>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            A Steadier Place to <span style={{ background: 'linear-gradient(135deg, #0ABAB5, #7dd3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fight Cancer.</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8' }}>
            A dedicated surgical oncology practice built around the patient — precise, personal, and led by an experienced cancer surgeon who treats the disease without losing sight of the person.
          </p>
        </div>
      </section>

      {/* A New Chapter */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div data-aos="zoom-in" style={{ 
            textAlign: 'center', background: 'white', padding: '4rem 3rem', 
            borderRadius: '24px', boxShadow: '0 25px 50px rgba(27,42,74,0.05)',
            border: '1px solid rgba(0,0,0,0.03)', marginTop: '-8rem', position: 'relative', zIndex: 2
          }}>
            <h2 className="section-title" style={{ color: '#1B2A4A' }}>A New Chapter</h2>
            <div className="section-divider center" style={{ background: '#0ABAB5' }}></div>
            <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
              "It is not just about removing cancer. It is about early diagnosis, honest guidance, skilled surgery, and helping patients walk out with their body, their confidence, and their life intact."
            </p>
          </div>
        </div>
      </section>

      {/* Preserve With Hope */}
      <section style={{ padding: '8rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="section-label" style={{ color: '#0ABAB5' }}>Preserve With Hope</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', color: '#1B2A4A' }}>
                Treating Cancer Without Losing <span>What Makes You, You.</span>
              </h2>
              <div className="section-divider" style={{ background: '#0ABAB5' }}></div>
              <p style={{ color: '#475569', lineHeight: '1.9', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                More than a treatment plan, this is a promise: to fight cancer while preserving everything that can be preserved — organs, function, appearance, and dignity.
              </p>
              
              <div style={{ display: 'grid', gap: '1.25rem' }}>
                {[
                  'Preserve the organ, wherever it is safe to do so',
                  'Preserve function, so life after surgery still feels like your life',
                  'Preserve appearance, so recovery doesn\'t cost you your confidence',
                  'Preserve strength, through honest and steady guidance',
                  'Preserve hope, at every stage of treatment',
                  'Preserve dignity, from diagnosis to recovery'
                ].map((item, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} style={{ 
                    display: 'flex', gap: '1.25rem', alignItems: 'center',
                    background: 'white', padding: '1rem 1.5rem', borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)',
                    transition: 'transform 0.3s ease'
                  }} onMouseEnter={e => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                    <div style={{ color: 'white', background: '#0ABAB5', padding: '0.4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle size={18} />
                    </div>
                    <div style={{ color: '#1B2A4A', fontWeight: 600, fontFamily: 'Inter', fontSize: '1rem' }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-aos="fade-left" style={{ 
              background: 'linear-gradient(135deg, rgba(27,42,74,1) 0%, rgba(15,30,56,1) 100%)', 
              padding: '4rem 3rem', borderRadius: '24px', 
              boxShadow: '0 30px 60px rgba(27,42,74,0.2)', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(10,186,181,0.1) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 800, color: 'white', fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(10,186,181,0.2)', borderRadius: '12px', color: '#0ABAB5' }}>
                  <Shield size={28} />
                </div>
                Our Commitment
              </h3>
              <p style={{ color: '#0ABAB5', fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.15rem', fontWeight: 600, borderLeft: '4px solid #C9A84C', paddingLeft: '1rem' }}>
                "Precise Surgery, Compassionate Care, Personalized Recovery."
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', fontSize: '1.05rem' }}>
                Dedicated to delivering accessible, patient-centered cancer care — combining surgical precision with empathy, honesty, and integrity.
              </p>
              
              <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem' }}>
                  <Heart size={24} fill="#e91e8c" color="#e91e8c" /> My Promise
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.9', fontSize: '1rem' }}>
                  To give every patient the best possible outcome, and the best possible life after it - walking with you at every step, from diagnosis to recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(135deg, #0f1e38, #1B2A4A)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="section-label" style={{ color: '#C9A84C', marginBottom: '1rem', display: 'inline-block' }}>Purpose Driven</span>
            <h2 className="section-title" style={{ color: 'white' }}>Our Mission <span style={{ color: '#0ABAB5' }}>& Vision</span></h2>
            <div className="section-divider center" style={{ background: 'rgba(255,255,255,0.2)' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div data-aos="fade-up" data-aos-delay="100" style={{ 
              background: 'rgba(255,255,255,0.03)', padding: '3.5rem 3rem', borderRadius: '24px', 
              border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
              transition: 'all 0.4s ease', cursor: 'default'
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(10,186,181,0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, rgba(10,186,181,0.2), rgba(10,186,181,0.05))', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Activity size={32} color="#0ABAB5" />
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>My Mission</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.9', fontSize: '1.1rem' }}>
                To treat cancer with precision and preserve life with care, so every patient leaves not just cured, but whole.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" style={{ 
              background: 'rgba(255,255,255,0.03)', padding: '3.5rem 3rem', borderRadius: '24px', 
              border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
              transition: 'all 0.4s ease', cursor: 'default'
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>My Vision</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.9', fontSize: '1.1rem' }}>
                To make expert, organ-preserving cancer surgery accessible to all - delivered with honesty, empathy, and integrity - giving patients back the body, confidence, and time they deserve.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '5rem' }} data-aos="fade-up" data-aos-delay="300">
            <button onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-primary-custom" style={{ padding: '1rem 3rem', fontSize: '1.15rem' }}>
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
      {/* Clinic Images Showcase */}
      <section style={{ padding: '8rem 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="section-label" style={{ color: '#0ABAB5' }}>Our Facilities</span>
            <h2 className="section-title" style={{ color: '#1B2A4A' }}>State-of-the-Art <span style={{ color: '#0ABAB5' }}>Clinic</span></h2>
            <div className="section-divider center" style={{ background: '#0ABAB5' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div data-aos="fade-up" data-aos-delay="0" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', background: 'white' }}>
              <div style={{ overflow: 'hidden' }}>
                <img src="./Entrance.jpeg" alt="Clinic Entrance" style={{ width: '100%', height: '350px', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.25rem', color: '#1B2A4A' }}>Clinic Entrance</h3>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', background: 'white' }}>
              <div style={{ overflow: 'hidden' }}>
                <img src="./reception.jpeg" alt="Reception Hall" style={{ width: '100%', height: '350px', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.25rem', color: '#1B2A4A' }}>Reception Hall</h3>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', background: 'white' }}>
              <div style={{ overflow: 'hidden' }}>
                <img src="./doc_room.jpeg" alt="Consultation Room" style={{ width: '100%', height: '350px', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.25rem', color: '#1B2A4A' }}>Consultation Room</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
