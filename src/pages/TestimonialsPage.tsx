interface TestimonialsPageProps {
  setCurrentPage: (page: string) => void;
}

const allTestimonials = [
  { name: 'Priya R.', location: 'Chennai', stars: 5, condition: 'Breast Cancer Surgery', text: 'Dr. Ajay Kumar is an exceptional surgeon. His expertise in breast cancer surgery gave me and my family hope during the most difficult time of our lives. His compassionate approach, clear communication, and surgical precision made all the difference in my recovery.', date: 'March 2024' },
  { name: 'Mohan S.', location: 'Coimbatore', stars: 5, condition: 'Thyroid Cancer Surgery', text: 'I had thyroid cancer surgery done by Dr. Ajay Kumar. The procedure was minimally invasive and my recovery was remarkably quick. He explained every step of the process clearly, and I felt completely confident in his hands. Truly a world-class surgeon in Chennai.', date: 'January 2024' },
  { name: 'Kavitha M.', location: 'Chennai', stars: 5, condition: 'GI Cancer Surgery', text: 'After being diagnosed with GI cancer, I was devastated. Dr. Ajay Kumar not only performed a successful laparoscopic surgery but also provided tremendous emotional support throughout my treatment journey. His team is equally wonderful and caring.', date: 'November 2023' },
  { name: 'Rajan P.', location: 'Madurai', stars: 5, condition: 'Laparoscopic Surgery', text: 'His laparoscopic technique was excellent. Minimal scars, fast recovery, and he explained everything so clearly before the procedure. I was back home in 2 days and resumed work in a week. Highly recommend Dr. Ajay Kumar to everyone.', date: 'October 2023' },
  { name: 'Anitha K.', location: 'Chennai', stars: 5, condition: 'Cancer Surgery', text: 'Dr. Ajay Kumar performed my mother\'s cancer surgery with utmost precision and care. We are forever grateful for his expertise and the genuine concern he showed for our entire family. He is truly a doctor with a golden heart.', date: 'September 2023' },
  { name: 'Suresh V.', location: 'Pondicherry', stars: 5, condition: 'Colon Cancer', text: 'After my colon cancer diagnosis, I was referred to Dr. Ajay Kumar. He performed a successful laparoscopic colectomy. The recovery was smooth, and I\'m now cancer-free. His expertise and the care at the clinic are outstanding.', date: 'August 2023' },
  { name: 'Meena L.', location: 'Chennai', stars: 5, condition: 'Soft Tissue Sarcoma', text: 'Dr. Ajay Kumar performed limb-sparing surgery for my soft tissue sarcoma. I was initially told amputation might be necessary, but Dr. Kumar\'s expertise preserved my limb completely. I cannot thank him enough.', date: 'July 2023' },
  { name: 'Arun T.', location: 'Salem', stars: 5, condition: 'Hernia Surgery', text: 'Had laparoscopic hernia repair done by Dr. Ajay Kumar. Absolutely zero complications. No visible scar, minimal pain, and I was walking the same day. Very professional team and excellent post-operative care.', date: 'June 2023' },
  { name: 'Deepa N.', location: 'Chennai', stars: 5, condition: 'Ovarian Cancer', text: 'Dr. Ajay Kumar\'s team handled my ovarian cancer surgery beautifully. He was honest, caring, and genuinely invested in my recovery. The surgery was successful and I am now in remission. Forever grateful.', date: 'May 2023' },
  { name: 'Krishnan R.', location: 'Trichy', stars: 5, condition: 'Head & Neck Cancer', text: 'Exceptional surgeon! Dr. Kumar removed my neck cancer with clear margins and the reconstruction was excellent. His attention to detail and commitment to patient welfare is remarkable. I travel from Trichy specifically to see him.', date: 'April 2023' },
];

const videoTestimonials = [
  { name: 'Patient Story — Breast Cancer Survivor', thumb: 'https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=350', duration: '3:45' },
  { name: 'Recovery Journey — GI Cancer Surgery', thumb: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=350', duration: '4:12' },
  { name: 'Thyroid Cancer — Patient Experience', thumb: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=350', duration: '2:58' },
];

export default function TestimonialsPage({ setCurrentPage }: TestimonialsPageProps) {
  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0ABAB5' }}>Patient Stories</span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Patient Testimonials
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Hear from our patients about their journey and recovery experience with Dr. A. Ajay Kumar.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.875rem' }}>Home</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#0ABAB5', fontSize: '0.875rem', fontWeight: 600 }}>Testimonials</span>
          </div>
        </div>
      </div>

      {/* Rating Summary */}
      <section style={{ background: '#1B2A4A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '4rem', color: '#0ABAB5', lineHeight: 1 }}>4.9</div>
              <div style={{ color: '#f59e0b', fontSize: '1.5rem', letterSpacing: '3px' }}>★★★★★</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Average Rating</div>
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {[
                { stars: '5 Stars', pct: 94, count: 188 },
                { stars: '4 Stars', pct: 5, count: 10 },
                { stars: '3 Stars', pct: 1, count: 2 },
              ].map(r => (
                <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', width: '50px' }}>{r.stars}</span>
                  <div style={{ height: '8px', width: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${r.pct}%`, background: '#f59e0b', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{r.count}</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '3rem', color: '#0ABAB5', lineHeight: 1 }}>200+</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Total Reviews</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.25rem' }}>Verified Patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
            <h2 className="section-title">What Patients <span>Say About Us</span></h2>
            <div className="section-divider center"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {allTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card" data-aos="fade-up" data-aos-delay={`${(i % 3) * 80}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      background: `linear-gradient(135deg, hsl(${i * 36}, 70%, 50%), #1B2A4A)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', fontSize: '0.95rem' }}>{t.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}> {t.location}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#f59e0b', fontSize: '0.85rem' }}>{'★'.repeat(t.stars)}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{t.date}</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(10,186,181,0.08)', borderRadius: '10px', padding: '0.6rem 0.9rem', marginBottom: '0.9rem', display: 'inline-block' }}>
                  <span style={{ fontSize: '0.75rem', color: '#0ABAB5', fontFamily: 'Inter', fontWeight: 700 }}> {t.condition}</span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0ABAB5', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'Inter' }}>
                   Verified Patient Review
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
            <span className="section-label">Video Stories</span>
            <h2 className="section-title">Video <span>Testimonials</span></h2>
            <div className="section-divider center"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {videoTestimonials.map((v, i) => (
              <div key={i} className="gallery-item" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <img src={v.thumb} alt={v.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} loading="lazy" />
                <div className="gallery-overlay" style={{ opacity: 1 }}>
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(10,186,181,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '4px' }}><polygon points="5,3 19,12 5,21"/></svg>
                    </div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem' }}>{v.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#0ABAB5', marginTop: '0.25rem' }}>{v.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #1B2A4A, #0f1e38)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></div>
          <h3 style={{ fontFamily: 'Inter', fontWeight: 800, color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Had a positive experience?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: '1.8' }}>
            Share your story and help other patients make informed decisions about their cancer treatment.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
               Write a Google Review
            </a>
            <button onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-outline-custom">
               Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
