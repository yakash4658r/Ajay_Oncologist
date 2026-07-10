import { useEffect, useRef, useState } from 'react';
import { Phone, Calendar, ChevronRight, CheckCircle, ArrowRight, MapPin, Mail, Activity } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { RibbonIcon, ThyroidIcon, StomachIcon, ColonIcon, UterusIcon, BoneIcon, ScalpelIcon } from '../components/MedicalIcons';

const specializations = [
  { id: 'expertise_breast_cancer', icon: <RibbonIcon size={36} color="#e91e8c" />, title: 'Breast Cancer', desc: 'Breast conservation surgery, oncoplasty, and mastectomy — treating the disease while preserving form and confidence.', color: '#e91e8c' },
  { id: 'expertise_thyroid_cancer', icon: <ThyroidIcon size={36} color="#0ABAB5" />, title: 'Thyroid Cancer & Disorders', desc: 'Surgical management of both cancerous and benign thyroid conditions.', color: '#0ABAB5' },
  { id: 'expertise_gi_cancer', icon: <StomachIcon size={36} color="#f59e0b" />, title: 'Stomach (Gastric) Cancer', desc: 'Comprehensive surgical treatment for stomach cancer, from diagnosis to definitive surgery.', color: '#f59e0b' },
  { id: 'expertise_colorectal_cancer', icon: <ColonIcon size={36} color="#8b5cf6" />, title: 'Colo-Rectal Cancer', desc: 'Laparoscopic and open surgical management of colon and rectal cancers.', color: '#8b5cf6' },
  { id: 'expertise_gynecological_cancer', icon: <UterusIcon size={36} color="#ef4444" />, title: 'Uterine, Endometrial & Ovarian Cancer', desc: 'Surgical oncology care for gynecological cancers.', color: '#ef4444' },
  { id: 'expertise_soft_tissue_sarcoma', icon: <BoneIcon size={36} color="#06b6d4" />, title: 'Sarcomas', desc: 'Specialized limb-preservation surgery for soft tissue and bone sarcomas.', color: '#06b6d4' },
  { id: 'expertise_general_surgery', icon: <ScalpelIcon size={36} color="#1B2A4A" />, title: 'General Surgery', desc: 'Hernia, gallstones, benign thyroid & breast disease, and fibroid uterus.', color: '#1B2A4A' },
];

const testimonials = [
  { name: 'Priya R.', stars: 5, text: 'Dr. Ajay Kumar is an exceptional surgeon. His expertise in breast cancer surgery gave me and my family hope during the most difficult time of our lives. His compassionate approach made all the difference.', location: 'Chennai' },
  { name: 'Mohan S.', stars: 5, text: 'I had thyroid cancer surgery done by Dr. Ajay Kumar. The procedure was minimally invasive and my recovery was remarkably quick. Truly a world-class surgeon in Chennai.', location: 'Coimbatore' },
  { name: 'Kavitha M.', stars: 5, text: 'After being diagnosed with GI cancer, I was devastated. Dr. Ajay Kumar not only performed a successful surgery but also provided tremendous emotional support throughout my treatment journey.', location: 'Chennai' },
  { name: 'Rajan P.', stars: 5, text: 'His laparoscopic technique was excellent. Minimal scars, fast recovery, and he explained everything so clearly before the procedure. Highly recommend Dr. Ajay Kumar to everyone.', location: 'Madurai' },
  { name: 'Anitha K.', stars: 5, text: 'Dr. Ajay Kumar performed my mother\'s cancer surgery with utmost precision and care. We are forever grateful for his expertise and the genuine concern he showed for our family.', location: 'Chennai' },
];

const faqs = [
  { q: 'What is Surgical Oncology?', a: 'Surgical Oncology is a specialized branch of surgery that focuses on the surgical management of cancer. A surgical oncologist performs biopsies, tumor removal, and complex cancer resections, often working alongside medical and radiation oncologists.' },
  { q: 'What cancers does Dr. Ajay Kumar treat?', a: 'Dr. Ajay Kumar treats a wide range of cancers including breast, thyroid, gastrointestinal (stomach, colon, rectal), gynecological (ovarian, uterine, cervical), soft tissue sarcomas, head & neck cancers, and more.' },
  { q: 'What is laparoscopic cancer surgery?', a: 'Laparoscopic (minimally invasive) cancer surgery uses small incisions and a camera to perform complex cancer operations. Benefits include less pain, shorter hospital stay, faster recovery, minimal blood loss, and better cosmetic results.' },
  { q: 'How do I book an appointment?', a: 'You can book an appointment by calling +91 98765 43210, sending a WhatsApp message, filling out the online form on our website, or visiting our clinic in Chennai during working hours (Mon–Sat, 9AM–6PM).' },
  { q: 'Does Dr. Ajay Kumar perform second opinion consultations?', a: 'Yes, Dr. Ajay Kumar provides second opinion consultations for cancer diagnoses and treatment plans. It is always advisable to seek expert opinion before proceeding with cancer treatment.' },
];

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const [counterStarted, setCounterStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', date: '', message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const papers = useCountUp(10, 2000, counterStarted);
  const surgeries = useCountUp(200, 2000, counterStarted);
  const years = useCountUp(15, 2000, counterStarted);
  const patients = useCountUp(1000, 2000, counterStarted);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounterStarted(true); },
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  };

  return (
    <div className="page-transition">
      {/* ===== HERO ===== */}
      <section className="hero-section" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', maxHeight: '900px', overflow: 'hidden' }}>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, renderBullet: function(index, className) { return '<span class="' + className + '" style="background: white; opacity: 0.8; width: 12px; height: 12px; border-radius: 50%; margin: 0 6px;"></span>'; } }}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div style={{ width: '100%', height: '100%', background: `linear-gradient(to right, rgba(15, 30, 56, 0.95) 0%, rgba(27, 42, 74, 0.4) 100%), url('/images/slider_1.png') center/cover no-repeat`, display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 1.5rem', paddingTop: '2rem' }}>
                <div className="hero-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  <span style={{ fontSize: '1rem' }}></span>
                  MCh Certified Surgical Oncologist
                </div>
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'white', lineHeight: '1.1' }}>
                  Comprehensive <br/><span>Cancer Care</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '600px' }}>
                  Advanced, organ-preserving cancer surgery with a personalized treatment plan for every patient.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => setCurrentPage('contact')} className="btn-primary-custom" style={{ padding: '0.8rem 2rem' }}>
                    <Calendar size={18} /> Book Appointment
                  </button>
                  <a href="tel:+919876543210" className="btn-outline-custom" style={{ padding: '0.8rem 2rem' }}>
                    <Phone size={18} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div style={{ width: '100%', height: '100%', background: `linear-gradient(to right, rgba(15, 30, 56, 0.95) 0%, rgba(27, 42, 74, 0.4) 100%), url('/images/slider_2.png') center/cover no-repeat`, display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 1.5rem', paddingTop: '2rem' }}>
                <div className="hero-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  <span style={{ fontSize: '1rem' }}></span>
                  Compassionate Patient Care
                </div>
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'white', lineHeight: '1.1' }}>
                  Treating Cancer,<br/><span>Preserving You</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '600px' }}>
                  From breast conservation to limb-sparing surgery - combining oncological safety with quality of life.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => setCurrentPage('contact')} className="btn-primary-custom" style={{ padding: '0.8rem 2rem' }}>
                    <Calendar size={18} /> Book Appointment
                  </button>
                  <a href="tel:+919876543210" className="btn-outline-custom" style={{ padding: '0.8rem 2rem' }}>
                    <Phone size={18} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div style={{ width: '100%', height: '100%', background: `linear-gradient(to right, rgba(15, 30, 56, 0.95) 0%, rgba(27, 42, 74, 0.4) 100%), url('/images/slider_3.png') center/cover no-repeat`, display: 'flex', alignItems: 'center' }}>
              <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 1.5rem', paddingTop: '2rem' }}>
                <div className="hero-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  <span style={{ fontSize: '1rem' }}></span>
                  Precision & Innovation
                </div>
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'white', lineHeight: '1.1' }}>
                  Expert-Led,<br/><span>Patient-Centered</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '600px' }}>
                  Cancer is Curable. Trusted surgical oncology and general surgery care at AR Surgical & Cancer Clinic.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => setCurrentPage('contact')} className="btn-primary-custom" style={{ padding: '0.8rem 2rem' }}>
                    <Calendar size={18} /> Book Appointment
                  </button>
                  <a href="tel:+919876543210" className="btn-outline-custom" style={{ padding: '0.8rem 2rem' }}>
                    <Phone size={18} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Stats overlay */}
        <div style={{ position: 'absolute', bottom: '4rem', left: 0, right: 0, zIndex: 10 }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="hero-stats" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              {[
                { num: `${years}+`, label: 'Years Experience' },
                { num: `${patients}+`, label: 'Patients' },
                { num: `${surgeries}+`, label: 'Operations' },
                { num: `1`, label: 'Center' },
              ].map((stat, i) => (
                <div key={i} className="hero-stat" ref={i === 0 ? counterRef : undefined} style={{ background: 'rgba(15, 30, 56, 0.6)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="hero-stat-number" style={{ display: 'block', fontSize: '2rem', color: '#0ABAB5', fontWeight: 800 }}>{stat.num}</span>
                  <span className="hero-stat-label" style={{ display: 'block', color: 'white', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 56C840 64 960 72 1080 68C1200 64 1320 48 1380 40L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section" style={{ padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
            {[
              { icon: '', text: 'MCh Surgical Oncology', sub: 'Post-doctoral Degree' },
              { icon: '', text: 'Chennai\'s Top Cancer Surgeon', sub: 'Highly Trusted' },
              { icon: '', text: 'Advanced Laparoscopic', sub: 'Minimally Invasive' },
              { icon: '', text: '10+ Research Papers', sub: 'Published Nationally' },
              { icon: '', text: '5000+ Happy Patients', sub: 'Trusted Care' },
            ].map((b, i) => (
              <div key={i} className="trust-badge">
                <span style={{ fontSize: '1.8rem' }}>{b.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.85rem', color: '#1B2A4A' }}>{b.text}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Image */}
            <div className="about-img-wrapper" data-aos="fade-right">
              <img
                src="/images/doctor-photo.jpg"
                alt="Dr. A. Ajay Kumar - Surgical Oncologist"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzFCMkE0QSIvPjx0ZXh0IHg9IjIwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iUG9wcGlucyIgZm9udC1zaXplPSI3MiIgZmlsbD0iIzBBQkFCNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+QUs8L3RleHQ+PC9zdmc+';
                }}
              />
              <div className="about-experience-badge" style={{ position: 'absolute', bottom: '30px', left: '-20px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Inter', color: '#0ABAB5' }}>15+</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter' }}>Years of Excellence</div>
              </div>
              <div className="about-achievement-badge" style={{ position: 'absolute', top: '30px', right: '-20px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Inter', color: '#C9A84C' }}>10+</div>
                <div style={{ fontSize: '0.7rem', color: '#475569', fontFamily: 'Inter' }}>Research Papers</div>
              </div>
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <span className="section-label">About The Doctor</span>
              <h2 className="section-title">
                Meet <span>Dr. A. Ajay Kumar</span><br />
                Surgical Oncologist
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: '#475569', lineHeight: '1.9', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                Dr. A. Ajay Kumar is a highly trained Surgical Oncologist and one of the well-regarded cancer surgeons practicing in Chennai. He holds the prestigious MCh in Surgical Oncology, and has dedicated his career to providing world-class cancer surgical care with precision and compassion.
              </p>
              <p style={{ color: '#475569', lineHeight: '1.9', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                He has presented over <strong style={{ color: '#1B2A4A' }}>10 papers at national and international conferences</strong> and specializes in a wide range of cancer surgeries — from breast, thyroid, and gastrointestinal cancers to gynecological cancers and soft tissue sarcomas. His expertise in laparoscopic (minimally invasive) cancer surgery ensures patients benefit from faster recovery and excellent outcomes.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'MCh Surgical Oncology',
                  'Advanced Laparoscopic Techniques',
                  '10+ Research Papers',
                  '1000+ Cancer Surgeries',
                  'Compassionate Patient Care',
                  'National Conference Speaker',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={16} style={{ color: '#0ABAB5', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: '#475569' }}>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-primary-custom">
                Read Full Profile <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIALIZATIONS ===== */}
      <section className="specializations-section" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
            <span className="section-label">Expert Care</span>
            <h2 className="section-title">Our <span>Specializations</span></h2>
            <div className="section-divider center"></div>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              Dr. Ajay Kumar offers comprehensive surgical oncology services, covering a wide spectrum of cancers with advanced techniques and personalized treatment plans.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {specializations.map((spec, i) => (
              <div
                key={spec.title}
                className="spec-card"
                data-aos="fade-up"
                data-aos-delay={`${(i % 4) * 100}`}
                onClick={() => { setCurrentPage(spec.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ borderTop: `4px solid ${spec.color}` }}
              >
                <div>
                  <div className="spec-icon" style={{ background: `${spec.color}15`, color: spec.color }}>
                    <span style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{spec.icon}</span>
                  </div>
                  <h3 className="spec-title">{spec.title}</h3>
                  <p className="spec-desc">{spec.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1.5rem', color: spec.color, fontSize: '0.85rem', fontWeight: 700, fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Learn More <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why-section" style={{ padding: '6rem 0' }} ref={counterRef}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
            <span className="section-label" style={{ color: '#0ABAB5' }}>Why Choose Us</span>
            <h2 className="section-title" style={{ color: 'white' }}>
              Why Choose <span style={{ color: '#0ABAB5' }}>Dr. Ajay Kumar?</span>
            </h2>
            <div className="section-divider center"></div>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              Combining surgical excellence with compassionate care, Dr. Ajay Kumar is committed to delivering the best cancer surgical outcomes in Chennai.
            </p>
          </div>

          {/* Counters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { num: `${papers}+`, label: 'Research Papers', icon: '', sub: 'National & International' },
              { num: `${surgeries}+`, label: 'Surgeries', icon: '', sub: 'Successful Outcomes' },
              { num: `${years}+`, label: 'Years Experience', icon: '', sub: 'Dedicated to Oncology' },
              { num: `${patients}+`, label: 'Patients Treated', icon: '', sub: 'Lives Transformed' },
            ].map((c, i) => (
              <div key={i} className="why-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{c.icon}</div>
                <span className="counter-number">{c.num}</span>
                <div style={{ color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{c.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* USP Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '', title: 'MCh in Surgical Oncology', desc: 'Highest degree in Surgical Oncology, ensuring expert cancer surgical care at every step.' },
              { icon: '', title: 'Advanced Laparoscopic Techniques', desc: 'Proficient in minimally invasive cancer surgeries with smaller incisions and faster recovery.' },
              { icon: '', title: '10+ Research Publications', desc: 'Presented research at national and international medical conferences — a true academic expert.' },
              { icon: '', title: 'Compassionate Patient Care', desc: 'Every patient is treated with dignity, empathy, and personalized attention throughout their journey.' },
            ].map((usp, i) => (
              <div key={i} className="why-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{usp.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>{usp.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: '1.7' }}>{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SURGICAL APPROACH ===== */}
      <section style={{ padding: '6rem 0', background: '#1B2A4A', color: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
            <span className="section-label" style={{ color: '#0ABAB5' }}>Our Approach</span>
            <h2 className="section-title" style={{ color: 'white' }}>What Makes Our Surgical Approach <span>Different</span></h2>
            <div className="section-divider center"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Organ Preservation Philosophy', desc: 'Every treatment plan is built around preserving organ function wherever oncologically safe to do so.', icon: '' },
              { title: 'Breast Conservation Surgery', desc: 'Treating breast cancer while conserving the breast, using oncoplasty techniques for the best cosmetic outcome.', icon: '' },
              { title: 'Limb Preservation Surgery', desc: 'Advanced techniques to treat sarcomas without resorting to amputation wherever possible.', icon: '' },
              { title: 'Partial Nephrectomy for Kidney Cancer', desc: 'Removing the tumor while preserving healthy kidney tissue and function.', icon: '' },
              { title: 'Reconstruction for Head & Neck', desc: 'Restorative surgical techniques to preserve appearance and function after head & neck cancer surgery.', icon: '' },
            ].map((approach, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{approach.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem', color: '#0ABAB5' }}>{approach.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.7' }}>{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
            <span className="section-label">Patient Stories</span>
            <h2 className="section-title">What Our <span>Patients Say</span></h2>
            <div className="section-divider center"></div>
          </div>

          {/* Featured Testimonial */}
          <div data-aos="fade-up" style={{ marginBottom: '2rem' }}>
            <div className="testimonial-card" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: '3rem' }}>
              <div className="testimonial-quote">"</div>
              <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {testimonials[activeTestimonial].text}
              </p>
              <div className="stars" style={{ marginBottom: '0.75rem' }}>
                {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <div style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A' }}>{testimonials[activeTestimonial].name}</div>
              <div style={{ fontSize: '0.8rem', color: '#0ABAB5', fontWeight: 600 }}>{testimonials[activeTestimonial].location}</div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                style={{
                  width: i === activeTestimonial ? '24px' : '8px', height: '8px',
                  borderRadius: '50px', border: 'none', cursor: 'pointer',
                  background: i === activeTestimonial ? '#0ABAB5' : '#cbd5e1',
                  transition: 'all 0.3s ease', padding: 0
                }}
              />
            ))}
          </div>

          {/* All testimonials grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                <div className="stars" style={{ marginBottom: '0.75rem' }}>
                  {[...Array(t.stars)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ABAB5, #1B2A4A)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', color: '#1B2A4A' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#0ABAB5', fontWeight: 600 }}> {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPOINTMENT SECTION ===== */}
      <section className="appointment-section" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
            <span className="section-label" style={{ color: '#0ABAB5' }}>Get In Touch</span>
            <h2 className="section-title" style={{ color: 'white' }}>
              Book Your <span style={{ color: '#0ABAB5' }}>Appointment Today</span>
            </h2>
            <div className="section-divider center"></div>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto' }}>
              Take the first step toward recovery. Schedule a consultation with Dr. Ajay Kumar.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Form */}
            <div data-aos="fade-right">
              {formSubmitted ? (
                <div style={{ background: 'rgba(10,186,181,0.15)', border: '1px solid #0ABAB5', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
                  <h3 style={{ color: 'white', fontFamily: 'Inter', fontWeight: 700, marginBottom: '0.75rem' }}>Appointment Request Sent!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>We'll contact you within 24 hours to confirm your appointment. Thank you for choosing Dr. Ajay Kumar.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Your Name *</label>
                      <input required type="text" placeholder="Full Name" value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="form-control-custom" />
                    </div>
                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Phone Number *</label>
                      <input required type="tel" placeholder="+91 98765 43210" value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="form-control-custom" />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Email Address</label>
                    <input type="email" placeholder="your@email.com" value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="form-control-custom" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Select Service *</label>
                      <select required value={formData.service}
                        onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                        className="form-control-custom">
                        <option value="">Choose Service</option>
                        {specializations.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Preferred Date</label>
                      <input type="date" value={formData.date}
                        onChange={e => setFormData(p => ({ ...p, date: e.target.value }))}
                        className="form-control-custom" />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Message</label>
                    <textarea placeholder="Describe your symptoms or concerns..." value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="form-control-custom" rows={3}
                      style={{ resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn-primary-custom" style={{ justifyContent: 'center', padding: '1rem 2rem', fontSize: '1rem' }}>
                    <Calendar size={18} />
                    Book Appointment Now
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left">
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                  Contact Information
                </h3>
                {[
                  { icon: <Phone size={18} />, label: 'Phone / Call', value: '+91 98765 43210', href: 'tel:+919876543210' },
                  { icon: <span style={{ fontSize: '1rem' }}></span>, label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'drajayoncology@gmail.com', href: 'mailto:drajayoncology@gmail.com' },
                  { icon: <MapPin size={18} />, label: 'Clinic Address', value: 'Dr. A. Ajay Kumar Surgical Oncology Clinic, Chennai, Tamil Nadu - 600001' },
                ].map((item, i) => (
                  <div key={i} className="contact-info-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontFamily: 'Inter', fontWeight: 600, marginBottom: '0.2rem' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, fontFamily: 'Inter' }}>{item.value}</a>
                      ) : (
                        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
                <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={18} style={{ color: '#0ABAB5' }} /> Working Hours
                </h4>
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
                  { day: 'Saturday', time: '9:00 AM – 4:00 PM', open: true },
                  { day: 'Sunday', time: 'By Appointment Only', open: false },
                ].map((h, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{h.day}</span>
                    <span style={{ color: h.open ? '#0ABAB5' : '#C9A84C', fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Inter' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
            <div className="section-divider center"></div>
          </div>
          <div data-aos="fade-up">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'open' : ''}`}>
                <div className="faq-header" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', color: '#0ABAB5', transition: 'transform 0.3s', transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </div>
                <div className={`faq-body ${activeFaq === i ? 'open' : ''}`}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
