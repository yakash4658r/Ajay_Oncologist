import { useState } from 'react';
import { X, Play } from 'lucide-react';

interface GalleryPageProps {
  setCurrentPage: (page: string) => void;
}

const galleryImages = [
  { id: 1, src: 'https://images.pexels.com/photos/18112241/pexels-photo-18112241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Modern Operating Room', category: 'Operation Theatre', caption: 'State-of-the-art Operating Theatre' },
  { id: 2, src: 'https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Hospital Care', category: 'Patient Care', caption: 'Compassionate Patient Care' },
  { id: 3, src: 'https://images.pexels.com/photos/33216715/pexels-photo-33216715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Medical Imaging', category: 'Facilities', caption: 'Advanced Diagnostic Imaging' },
  { id: 4, src: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Medical Team', category: 'Team', caption: 'Expert Medical Team' },
  { id: 5, src: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Consultation Room', category: 'Clinic', caption: 'Modern Consultation Room' },
  { id: 6, src: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Medical Equipment', category: 'Equipment', caption: 'Advanced Surgical Equipment' },
  { id: 7, src: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Hospital Ward', category: 'Facilities', caption: 'Modern Patient Wards' },
  { id: 8, src: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Surgery', category: 'Operation Theatre', caption: 'Precision Surgical Care' },
  { id: 9, src: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', alt: 'Doctor with patient', category: 'Patient Care', caption: 'Personalized Patient Consultation' },
];

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Understanding Breast Cancer Surgery', desc: 'Dr. Ajay Kumar explains modern breast cancer surgical techniques and what patients can expect.' },
  { id: 'dQw4w9WgXcQ', title: 'Laparoscopic Cancer Surgery Benefits', desc: 'Learn about the advantages of minimally invasive cancer surgery for faster recovery.' },
  { id: 'dQw4w9WgXcQ', title: 'Thyroid Cancer — What You Need to Know', desc: 'A comprehensive guide to thyroid cancer diagnosis and surgical treatment options.' },
  { id: 'dQw4w9WgXcQ', title: 'GI Cancer Surgery — Patient Education', desc: 'Understanding gastrointestinal cancer surgery procedures and recovery process.' },
];

const categories = ['All', 'Operation Theatre', 'Patient Care', 'Facilities', 'Team', 'Clinic', 'Equipment'];

export default function GalleryPage({ setCurrentPage }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<typeof galleryImages[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0ABAB5' }}>Visual Tour</span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Gallery
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Explore our state-of-the-art facilities, operating theaters, and the dedicated team behind Dr. Ajay Kumar's practice.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.875rem' }}>Home</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#0ABAB5', fontSize: '0.875rem', fontWeight: 600 }}>Gallery</span>
          </div>
        </div>
      </div>

      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {(['photos', 'videos'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.7rem 2rem', borderRadius: '50px',
                  fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                  border: 'none', transition: 'all 0.3s ease',
                  background: activeTab === tab ? 'linear-gradient(135deg, #0ABAB5, #089a96)' : 'white',
                  color: activeTab === tab ? 'white' : '#475569',
                  boxShadow: activeTab === tab ? '0 8px 25px rgba(10,186,181,0.3)' : '0 2px 10px rgba(0,0,0,0.08)',
                  textTransform: 'capitalize'
                }}
              >
                {tab === 'photos' ? ' Photo Gallery' : ' Video Gallery'}
              </button>
            ))}
          </div>

          {activeTab === 'photos' ? (
            <>
              {/* Category Filter */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '0.4rem 1rem', borderRadius: '50px',
                      fontFamily: 'Inter', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer',
                      border: '2px solid', transition: 'all 0.3s ease',
                      borderColor: activeCategory === cat ? '#0ABAB5' : '#e2e8f0',
                      background: activeCategory === cat ? '#0ABAB5' : 'white',
                      color: activeCategory === cat ? 'white' : '#475569',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Image Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {filtered.map(img => (
                  <div
                    key={img.id}
                    className="gallery-item"
                    onClick={() => setLightboxImg(img)}
                    data-aos="fade-up"
                  >
                    <img src={img.src} alt={img.alt} loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const div = document.createElement('div');
                          div.style.cssText = 'width:100%;height:250px;background:linear-gradient(135deg,#1B2A4A,#243561);display:flex;align-items:center;justify-content:center;color:#0ABAB5;font-size:3rem;';
                          div.innerHTML = '';
                          parent.insertBefore(div, parent.firstChild);
                        }
                      }}
                    />
                    <div className="gallery-overlay">
                      <div style={{ textAlign: 'center', color: 'white' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></div>
                        <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem' }}>{img.caption}</div>
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      padding: '1.5rem 1rem 0.75rem',
                    }}>
                      <div style={{ color: 'white', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.8rem' }}>{img.caption}</div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem' }}>{img.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Video Gallery */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {videos.map((video, i) => (
                <div key={i} className="blog-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                  <div style={{ position: 'relative', background: '#1B2A4A', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', opacity: 0.7 }}
                      onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{
                          width: '60px', height: '60px', borderRadius: '50%',
                          background: 'rgba(255,0,0,0.9)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          transition: 'transform 0.3s ease', textDecoration: 'none'
                        }}
                        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                        onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                      >
                        <Play size={22} fill="white" color="white" style={{ marginLeft: '4px' }} />
                      </a>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', fontSize: '1rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                      {video.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: '1.7' }}>{video.desc}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        color: '#ef4444', fontFamily: 'Inter', fontWeight: 600,
                        fontSize: '0.82rem', textDecoration: 'none', marginTop: '0.75rem'
                      }}
                    >
                      <Play size={13} /> Watch on YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="lightbox active"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
              width: '44px', height: '44px', cursor: 'pointer', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1
            }}
          >
            <X size={20} />
          </button>
          <div onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.alt} />
            <p style={{ color: 'white', textAlign: 'center', marginTop: '1rem', fontFamily: 'Inter', fontWeight: 600 }}>
              {lightboxImg.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
