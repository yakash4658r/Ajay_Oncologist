import { CheckCircle, Shield, Award, Activity, GraduationCap, Presentation, Stethoscope, BookOpen } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  return (
    <div className="page-transition">
      {/* 1. PREMIUM HERO */}
      <div style={{
        position: 'relative',
        padding: '10rem 1.5rem 6rem',
        background: `linear-gradient(135deg, rgba(15,30,56,0.9) 0%, rgba(27,42,74,0.95) 100%), url('./images/page_banner.png') center/cover no-repeat`,
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Animated background elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(10,186,181,0.2) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float 10s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'float 12s ease-in-out infinite reverse' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'rgba(10,186,181,0.15)', border: '1px solid rgba(10,186,181,0.4)', borderRadius: '50px', color: '#0ABAB5', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Meet The Expert
          </span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Dedicated to <span style={{ background: 'linear-gradient(135deg, #0ABAB5, #7dd3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Preserving Life</span> <br/>With Excellence
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Surgical Oncologist | Laparoscopic Surgeon | Compassionate Healer
          </p>
        </div>
      </div>

      {/* 2. PREMIUM BIO SECTION */}
      <section style={{ padding: '8rem 0', background: '#f8fafc', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
            
            {/* Image Column with Glassmorphism */}
            <div style={{ flex: '1 1 450px', position: 'relative' }} data-aos="fade-right">
              <div style={{ position: 'relative', borderRadius: '24px', padding: '1rem', background: 'white', boxShadow: '0 30px 60px rgba(27,42,74,0.08)' }}>
                <img
                  src="./Doctor.jpeg"
                  alt="Dr. A. Ajay Kumar"
                  style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '16px' }}
                  loading="lazy"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      const div = document.createElement('div');
                      div.style.cssText = 'width:100%;height:550px;background:linear-gradient(135deg,#1B2A4A,#243561);border-radius:16px;display:flex;align-items:center;justify-content:center;';
                      div.innerHTML = '<div style="text-align:center;color:white;"><div style="font-size:5rem;font-family:Inter;font-weight:800;color:#0ABAB5;">AK</div><div style="font-size:1.2rem;font-weight:700;margin-top:1rem;">Dr. A. Ajay Kumar</div></div>';
                      parent.appendChild(div);
                    }
                  }}
                />
                
                {/* Floating Glassmorphic Badge 1 */}
                <div style={{
                  position: 'absolute', bottom: '40px', left: '-30px',
                  background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
                  borderRadius: '16px', padding: '1.25rem',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.5)',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  zIndex: 2
                }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'linear-gradient(135deg, #0ABAB5, #089a96)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Award size={24} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.2rem', color: '#1B2A4A' }}>Rank 108</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>NEET-SS All India</div>
                  </div>
                </div>

                {/* Floating Glassmorphic Badge 2 */}
                <div style={{
                  position: 'absolute', top: '40px', right: '-30px',
                  background: 'rgba(27,42,74,0.9)', backdropFilter: 'blur(12px)',
                  borderRadius: '16px', padding: '1.25rem',
                  boxShadow: '0 15px 35px rgba(27,42,74,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  zIndex: 2
                }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C' }}>
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.2rem', color: 'white' }}>MCh</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Surgical Oncology</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div style={{ flex: '1 1 500px' }}>
              <span data-aos="fade-up" style={{ color: '#0ABAB5', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '30px', height: '2px', background: '#0ABAB5' }}></div>
                Biography
              </span>
              <h2 data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#1B2A4A', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Dr. A. Ajay Kumar
              </h2>
              
              <div data-aos="fade-up" data-aos-delay="200" style={{ padding: '1.5rem', background: 'white', borderRadius: '16px', borderLeft: '4px solid #C9A84C', marginBottom: '2rem', boxShadow: '0 15px 30px rgba(0,0,0,0.04)' }}>
                <p style={{ color: '#1B2A4A', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                  MBBS, M.S (General Surgery), MCh (Surgical Oncology)
                </p>
                <p style={{ color: '#64748b', fontSize: '0.95rem', fontStyle: 'italic', fontWeight: 500 }}>
                  Consultant Laparoscopic General & Cancer Surgeon
                </p>
              </div>

              <p data-aos="fade-up" data-aos-delay="300" style={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Dr. A. Ajay Kumar is a highly trained Surgical Oncologist and one of the well-regarded cancer surgeons practicing in Chennai. He has presented over 10 papers at national and international conferences and specializes in a wide range of cancer surgeries — from breast, thyroid, and gastrointestinal cancers to gynecological cancers and soft tissue sarcomas.
              </p>
              <p data-aos="fade-up" data-aos-delay="400" style={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '2.5rem' }}>
                His approach centers on organ preservation - combining oncological safety with function and appearance, so patients don't just survive cancer, they return to their lives with confidence.
              </p>

              {/* Premium Tags */}
              <div data-aos="fade-up" data-aos-delay="500" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {[
                  { text: 'MCh Surgical Oncology', icon: <Stethoscope size={16}/> },
                  { text: 'NEET-SS Rank 108', icon: <Award size={16}/> },
                  { text: 'NEET PG Rank 1281', icon: <Award size={16}/> },
                  { text: '10+ Papers Presented', icon: <BookOpen size={16}/> }
                ].map((tag, i) => (
                  <div key={i} style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'white', color: '#1B2A4A', padding: '0.6rem 1.25rem', 
                    borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, 
                    border: '1px solid #e2e8f0', boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                    transition: 'all 0.3s ease', cursor: 'default'
                  }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    <span style={{ color: '#0ABAB5', display: 'flex', alignItems: 'center' }}>{tag.icon}</span>
                    {tag.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM CLINIC SECTION */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div data-aos="fade-up" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(10,186,181,0.2), rgba(10,186,181,0.05))', color: '#0ABAB5', marginBottom: '1.5rem', transform: 'rotate(-5deg)' }}>
            <Activity size={32} style={{ transform: 'rotate(5deg)' }} />
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '3rem', color: '#1B2A4A', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            AR Surgical & <span style={{ color: '#0ABAB5' }}>Cancer Clinic</span>
          </h2>
          
          <p data-aos="fade-up" data-aos-delay="200" style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.9, marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Located in Thirumullaivoyal, Chennai, our clinic offers comprehensive cancer care and advanced surgical solutions. Run by experienced oncologist Dr. Ajay Kumar A, we provide personalized treatment plans for cancer patients, along with general surgery, surgical oncology, and diagnostic services.
          </p>

          <div data-aos="zoom-in" data-aos-delay="300" style={{ 
            position: 'relative', padding: '4rem 4rem', 
            background: 'white', 
            borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)',
            boxShadow: '0 25px 50px rgba(27,42,74,0.06)'
          }}>
            <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '0 1.5rem', color: '#C9A84C', fontSize: '4rem', lineHeight: 1, fontFamily: 'Georgia', borderRadius: '50px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>"</div>
            <p style={{ fontSize: '1.8rem', fontStyle: 'italic', color: '#1B2A4A', fontWeight: 600, lineHeight: 1.6, marginBottom: '2rem' }}>
              Cancer is Curable. Believe in life after cancer.
            </p>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0ABAB5, #C9A84C)', margin: '0 auto 1.5rem', borderRadius: '4px' }}></div>
            <span style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Dr. A. Ajay Kumar</span>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM STATS SECTION */}
      <section style={{ padding: '7rem 0', background: 'linear-gradient(135deg, #0f1e38, #1B2A4A)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          
          <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            Proven Excellence
          </span>
          <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2.5rem', color: 'white', marginBottom: '4rem' }}>
            Our Journey
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { num: '15+', label: 'Years of Practice' },
              { num: '2000+', label: 'Patients Treated' },
              { num: '1800+', label: 'Surgeries Performed' },
              { num: '10+', label: 'Papers Presented' },
              { num: '1', label: 'Dedicated Center' },
            ].map((stat, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} style={{ 
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
                borderRadius: '20px', padding: '2.5rem 1.5rem', transition: 'all 0.4s ease',
                cursor: 'default'
              }} 
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(10,186,181,0.3)'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #0ABAB5, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PREMIUM SUPPORT SECTION */}
      <section style={{ padding: '7rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
            <span style={{ color: '#0ABAB5', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              Compassionate Care
            </span>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2.5rem', color: '#1B2A4A', marginBottom: '1rem' }}>
              Support At Every Stage
            </h2>
            <p style={{ color: '#475569', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
              From diagnosis to recovery, I'm with you at every step, offering personalized surgical care tailored to your specific circumstances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {[
              { title: 'Newly Diagnosed', sub: 'Confirm & Understand', desc: 'If you\'ve just received a diagnosis or noticed something that worries you, I help you confirm what\'s really happening and plan the next steps with clarity, not panic.', icon: <Activity size={28} /> },
              { title: 'Exploring Surgery', sub: 'Second Opinions', desc: 'If surgery has been advised, I help you understand every option — including organ-preserving approaches — so you choose the safest, most effective path.', icon: <Shield size={28} /> },
              { title: 'Ongoing Care', sub: 'Life After Surgery', desc: 'If you\'ve completed treatment, I provide continued follow-up focused not just on keeping the cancer away, but on helping you live fully and function normally.', icon: <CheckCircle size={28} /> },
            ].map((support, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} style={{ 
                background: 'white', padding: '3rem 2rem', borderRadius: '24px', 
                border: '1px solid #e2e8f0', textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'all 0.4s ease'
              }} 
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(10,186,181,0.1)'; e.currentTarget.style.borderColor = 'rgba(10,186,181,0.3)'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)'; e.currentTarget.style.borderColor = '#e2e8f0'; }}>
                <div style={{ width: '70px', height: '70px', margin: '0 auto 1.5rem', background: 'linear-gradient(135deg, rgba(10,186,181,0.1), rgba(10,186,181,0.2))', color: '#0ABAB5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', transform: 'rotate(-5deg)' }}>
                  <div style={{ transform: 'rotate(5deg)' }}>{support.icon}</div>
                </div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.25rem', color: '#1B2A4A', marginBottom: '0.25rem' }}>{support.title}</h3>
                <div style={{ color: '#C9A84C', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.25rem' }}>{support.sub}</div>
                <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1rem' }}>{support.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PREMIUM EDUCATION TIMELINE */}
      <section style={{ padding: '8rem 0', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
            <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              Academic Journey
            </span>
            <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '2.5rem', color: '#1B2A4A' }}>
              Education & Qualifications
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Glowing Line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', background: 'linear-gradient(to bottom, #0ABAB5, #C9A84C)', opacity: 0.3 }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {[
                {
                  degree: 'MCh - Surgical Oncology',
                  desc: 'NEET-SS, All India Rank 108. Trained at Govt. Arignar Anna Memorial Cancer Hospital & Research Institute (Regional Cancer Centre), Kanchipuram.',
                  icon: <Award size={20} />,
                  color: '#0ABAB5'
                },
                {
                  degree: 'M.S - General Surgery',
                  desc: 'NEET PG, All India Rank 1281. Comprehensive surgical training covering all aspects of general and specialty surgery.',
                  icon: <Stethoscope size={20} />,
                  color: '#C9A84C'
                },
                {
                  degree: 'MBBS',
                  desc: 'Melvanvarkulam Aadipoorasakthi Institute of Medical Science & Research (MAPIMC), Stanley Medical College.',
                  icon: <GraduationCap size={20} />,
                  color: '#1B2A4A'
                },
                {
                  degree: 'Research & Conferences',
                  desc: 'Presented 10+ papers at national and international oncology conferences, contributing to the advancement of surgical oncology.',
                  icon: <Presentation size={20} />,
                  color: '#475569'
                }
              ].map((edu, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} style={{ position: 'relative', paddingLeft: '5rem' }}>
                  {/* Glowing Dot */}
                  <div style={{ position: 'absolute', left: '0', top: '0', width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: `2px solid ${edu.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: edu.color, boxShadow: `0 0 20px ${edu.color}40`, zIndex: 2 }}>
                    {edu.icon}
                  </div>
                  
                  <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', transition: 'all 0.4s ease' }} 
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = edu.color; e.currentTarget.style.boxShadow = `0 15px 40px ${edu.color}15`; e.currentTarget.style.transform = 'translateX(10px)'; }} 
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                    <h3 style={{ fontFamily: 'Inter', fontWeight: 800, color: '#1B2A4A', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{edu.degree}</h3>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
