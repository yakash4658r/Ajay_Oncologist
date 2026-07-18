import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ExpertiseTemplateProps {
  title: string;
  description: string;
  image?: string;
  setCurrentPage: (page: string) => void;
}

export default function ExpertiseTemplate({ title, description, image, setCurrentPage }: ExpertiseTemplateProps) {
  return (
    <div className="page-transition">
      {/* 1. PREMIUM HERO */}
      <div style={{
        position: 'relative',
        padding: '12rem 1.5rem 8rem',
        background: `linear-gradient(135deg, rgba(15,30,56,0.95) 0%, rgba(27,42,74,1) 100%)`,
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Animated background elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(10,186,181,0.15) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'float 10s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'float 12s ease-in-out infinite reverse' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }} data-aos="fade-up">
          <h1 style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-1px', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
            {title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto', textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontWeight: 500 }}>
            Advanced surgical care and specialized treatments for {title.toLowerCase()}.
          </p>
        </div>
      </div>

      {/* 2. OVERVIEW SECTION */}
      <section style={{ padding: '6rem 0', background: 'white', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          <div style={{ 
            background: 'white', padding: '4rem', borderRadius: '24px', 
            boxShadow: '0 20px 40px rgba(27,42,74,0.05)', border: '1px solid #f1f5f9',
            marginTop: '-10rem', position: 'relative', zIndex: 2
          }} data-aos="fade-up">
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 500px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '4px', height: '30px', background: 'linear-gradient(to bottom, #0ABAB5, #C9A84C)', borderRadius: '4px' }}></div>
                  <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2rem', color: '#1B2A4A', margin: 0 }}>
                    Overview
                  </h2>
                </div>
                
                <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: 1.9 }}>
                  {description}
                </p>
              </div>

              {image && (
                <div style={{ flex: '1 1 400px' }}>
                  <div style={{ 
                    width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', 
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                  }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              )}
            </div>

            <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
              
              {/* Why Choose Dr. Ajay Kumar? */}
              <div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.5rem', color: '#1B2A4A', marginBottom: '1.5rem' }}>
                  Why Choose Dr. Ajay Kumar?
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.25rem' }}>
                  {[
                    'Organ Preservation Philosophy ensuring functional recovery',
                    'Minimally Invasive / Advanced Laparoscopic Techniques',
                    'Personalized surgical oncology care tailored to your exact diagnosis',
                    'Compassionate guidance from diagnosis to post-surgery life'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(10,186,181,0.1)', color: '#0ABAB5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Comprehensive Support */}
              <div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.5rem', color: '#1B2A4A', marginBottom: '1rem' }}>
                  How I Support You
                </h3>
                <p style={{ color: '#0ABAB5', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem' }}>AT EVERY STAGE OF YOUR JOURNEY</p>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {[
                    { title: 'Newly Diagnosed', desc: 'I help confirm what\'s really happening, explain it in plain language, and plan the next steps with clarity, not panic.' },
                    { title: 'Exploring Surgery', desc: 'I help you understand every option — including organ-preserving approaches, so you choose the safest path.' },
                    { title: 'Life After Surgery', desc: 'Continued follow-up focused on helping you live fully, function normally, and feel like yourself again.' }
                  ].map((support, i) => (
                    <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #C9A84C' }}>
                      <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{support.title}</h4>
                      <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{support.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA SECTION (Removed as we now use global CTASection) */}
    </div>
  );
}
