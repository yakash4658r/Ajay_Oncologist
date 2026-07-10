import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  setCurrentPage: (page: string) => void;
}

const blogPosts = [
  {
    id: 1,
    title: 'Early Signs of Breast Cancer You Should Not Ignore',
    excerpt: 'Breast cancer is the most common cancer among women. Early detection significantly improves survival rates. Learn the warning signs that should prompt you to see a doctor immediately.',
    category: 'Cancer Awareness',
    categoryColor: '#e91e8c',
    date: 'December 10, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Breast Cancer', 'Early Detection', 'Women\'s Health'],
  },
  {
    id: 2,
    title: 'What is Laparoscopic Cancer Surgery? Benefits & Recovery',
    excerpt: 'Minimally invasive surgery has revolutionized cancer treatment. Discover how laparoscopic techniques offer faster recovery, less pain, and equivalent cancer cure rates compared to open surgery.',
    category: 'Surgery Tips',
    categoryColor: '#10b981',
    date: 'November 25, 2024',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/18112241/pexels-photo-18112241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Laparoscopic', 'Minimally Invasive', 'Surgery'],
  },
  {
    id: 3,
    title: 'Thyroid Cancer — Symptoms, Diagnosis & Surgical Treatment',
    excerpt: 'Thyroid cancer is one of the most treatable cancers when detected early. This comprehensive guide explains the types, symptoms, and modern surgical approaches to thyroid cancer.',
    category: 'Cancer Awareness',
    categoryColor: '#e91e8c',
    date: 'November 8, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/33216715/pexels-photo-33216715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Thyroid Cancer', 'Thyroidectomy', 'Neck Surgery'],
  },
  {
    id: 4,
    title: 'My Cancer Surgery Experience — A Patient\'s Journey',
    excerpt: 'Read the inspiring story of Mrs. Priya, a breast cancer survivor, who underwent successful oncoplastic surgery and is now living a full, healthy life after treatment.',
    category: 'Patient Stories',
    categoryColor: '#8b5cf6',
    date: 'October 20, 2024',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Patient Story', 'Breast Cancer', 'Inspiration'],
  },
  {
    id: 5,
    title: 'Anti-Cancer Diet: Foods That Help Fight Cancer',
    excerpt: 'Nutrition plays a vital role in cancer prevention and recovery. Learn which foods have anti-cancer properties and how a balanced diet can support your cancer treatment journey.',
    category: 'Health & Nutrition',
    categoryColor: '#f59e0b',
    date: 'October 5, 2024',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Nutrition', 'Cancer Prevention', 'Diet'],
  },
  {
    id: 6,
    title: 'Understanding Colorectal Cancer Screening in India',
    excerpt: 'Colon and rectal cancers are rising in India. Early screening through colonoscopy can detect pre-cancerous polyps before they become malignant. Know when and how to get screened.',
    category: 'Cancer Awareness',
    categoryColor: '#e91e8c',
    date: 'September 18, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Colon Cancer', 'Screening', 'Prevention'],
  },
  {
    id: 7,
    title: 'Post-Surgery Recovery: Tips for Cancer Surgery Patients',
    excerpt: 'The recovery period after cancer surgery is crucial for healing. Follow these expert tips from Dr. Ajay Kumar on nutrition, activity, wound care, and mental wellbeing after surgery.',
    category: 'Surgery Tips',
    categoryColor: '#10b981',
    date: 'September 2, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Recovery', 'Post-Surgery', 'Patient Care'],
  },
  {
    id: 8,
    title: 'Ovarian Cancer — Silent Symptoms You Must Know',
    excerpt: 'Ovarian cancer is often called the "silent killer" because its early symptoms are vague and easily missed. Know the warning signs that could save your life.',
    category: 'Cancer Awareness',
    categoryColor: '#e91e8c',
    date: 'August 15, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Ovarian Cancer', 'Gynecological Cancer', 'Women\'s Health'],
  },
  {
    id: 9,
    title: 'Hernia Surgery: Open vs. Laparoscopic — Which is Better?',
    excerpt: 'Choosing between open and laparoscopic hernia repair? This article compares both approaches in terms of recovery time, recurrence rates, and patient outcomes.',
    category: 'Surgery Tips',
    categoryColor: '#10b981',
    date: 'August 1, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=500',
    tags: ['Hernia', 'Laparoscopic', 'Comparison'],
  },
];

const categories = ['All', 'Cancer Awareness', 'Surgery Tips', 'Patient Stories', 'Health & Nutrition'];

export default function BlogPage({ setCurrentPage }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filtered = activeCategory === 'All' ? blogPosts : blogPosts.filter(p => p.category === activeCategory);

  if (selectedPost) {
    return (
      <div className="page-transition">
        <div className="page-hero" style={{ padding: '8rem 0 4rem', background: `linear-gradient(135deg, rgba(27,42,74,0.95), rgba(15,30,56,0.9)), url('./images/page_banner.png') center/cover no-repeat` }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', padding: '0.3rem 0.75rem', borderRadius: '50px', background: `${selectedPost.categoryColor}22`, color: selectedPost.categoryColor, fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 700, marginBottom: '1rem', border: `1px solid ${selectedPost.categoryColor}44` }}>
              {selectedPost.category}
            </div>
            <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'white', lineHeight: '1.3', marginBottom: '1.5rem' }}>
              {selectedPost.title}
            </h1>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} /> {selectedPost.date}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={14} /> {selectedPost.readTime}
              </span>
            </div>
          </div>
        </div>
        <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
            <button onClick={() => setSelectedPost(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0ABAB5', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontWeight: 600, marginBottom: '2rem' }}>
              ← Back to Blog
            </button>
            <img src={selectedPost.image} alt={selectedPost.title}
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', marginBottom: '2rem' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem', fontStyle: 'italic', borderLeft: '4px solid #0ABAB5', paddingLeft: '1.25rem' }}>
                {selectedPost.excerpt}
              </p>
              {[
                'This is a comprehensive article about the topic discussed. Cancer awareness and education are crucial for early detection and better outcomes. Dr. Ajay Kumar is committed to educating his patients and the general public about cancer prevention, detection, and treatment.',
                'Regular health check-ups and screenings are essential for early detection. When cancer is caught in its early stages, the chances of successful treatment and cure are significantly higher. Do not ignore warning signs and always consult a specialist promptly.',
                'Modern surgical techniques have revolutionized cancer treatment. Minimally invasive approaches, when applicable, provide patients with faster recovery, less pain, and equivalent cancer outcomes compared to traditional open surgery.',
                'Dr. Ajay Kumar is available for consultations at his clinic in Chennai. If you have concerns about any symptoms or wish to discuss cancer prevention, please do not hesitate to reach out. Early consultation can make a significant difference in outcomes.',
              ].map((para, i) => (
                <p key={i} style={{ color: '#475569', lineHeight: '1.9', marginBottom: '1.25rem', fontSize: '0.95rem' }}>{para}</p>
              ))}
              <div style={{ background: 'linear-gradient(135deg, #1B2A4A, #243561)', borderRadius: '12px', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1rem', fontFamily: 'Inter', fontWeight: 600 }}>
                  Have questions? Consult Dr. Ajay Kumar today.
                </p>
                <button onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="btn-primary-custom" style={{ margin: '0 auto' }}>
                  Book Appointment →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero" style={{ background: `linear-gradient(135deg, rgba(27,42,74,0.95), rgba(15,30,56,0.9)), url('./images/page_banner.png') center/cover no-repeat` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0ABAB5' }}>Knowledge Center</span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Blog & Health Tips
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Expert health articles, cancer awareness guides, and patient education content by Dr. A. Ajay Kumar.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.875rem' }}>Home</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#0ABAB5', fontSize: '0.875rem', fontWeight: 600 }}>Blog</span>
          </div>
        </div>
      </div>

      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem', borderRadius: '50px',
                  fontFamily: 'Inter', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
                  border: '2px solid',
                  borderColor: activeCategory === cat ? '#0ABAB5' : '#e2e8f0',
                  background: activeCategory === cat ? '#0ABAB5' : 'white',
                  color: activeCategory === cat ? 'white' : '#475569',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filtered.map((post, i) => (
              <article
                key={post.id}
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay={`${(i % 3) * 100}`}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    loading="lazy"
                    onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const div = document.createElement('div');
                        div.style.cssText = 'height:220px;background:linear-gradient(135deg,#1B2A4A,#243561);display:flex;align-items:center;justify-content:center;font-size:3rem;';
                        div.innerHTML = '';
                        parent.insertBefore(div, parent.firstChild);
                      }
                    }}
                  />
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: post.categoryColor, color: 'white',
                    padding: '0.25rem 0.75rem', borderRadius: '50px',
                    fontSize: '0.72rem', fontFamily: 'Inter', fontWeight: 700
                  }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#94a3b8', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span style={{ color: '#94a3b8', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', fontSize: '1.05rem', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                    {post.excerpt.slice(0, 120)}...
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {post.tags.map(tag => (
                      <span key={tag} style={{ background: '#f1f5f9', color: '#64748b', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.72rem', fontFamily: 'Inter', fontWeight: 600 }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedPost(post)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      color: '#0ABAB5', fontFamily: 'Inter', fontWeight: 700,
                      fontSize: '0.875rem', background: 'none', border: 'none',
                      cursor: 'pointer', padding: 0
                    }}
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
