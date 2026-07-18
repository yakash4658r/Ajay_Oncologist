import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConditionsPage from './pages/ConditionsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ClinicPage from './pages/ClinicPage';
import { 
  BreastCancerSurgeryPage, ThyroidCancerSurgeryPage, GICancerSurgeryPage, 
  GynecologicalCancerSurgeryPage, SoftTissueSarcomaPage, HeadNeckCancerPage, 
  LaparoscopicSurgeryPage, GeneralSurgeryPage 
} from './pages/ExpertisePages';
// Initialize AOS manually
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const delay = parseInt(el.getAttribute('data-aos-delay') || '0');
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0)';
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    const htmlEl = el as HTMLElement;
    const animation = htmlEl.getAttribute('data-aos');
    htmlEl.style.opacity = '0';
    htmlEl.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    if (animation === 'fade-up') htmlEl.style.transform = 'translateY(30px)';
    else if (animation === 'fade-down') htmlEl.style.transform = 'translateY(-30px)';
    else if (animation === 'fade-right') htmlEl.style.transform = 'translateX(-40px)';
    else if (animation === 'fade-left') htmlEl.style.transform = 'translateX(40px)';
    observer.observe(htmlEl);
  });

  return observer;
}

export default function App() {
  const [currentPage, setCurrentPageState] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const setCurrentPage = useCallback((page: string) => {
    setCurrentPageState(page);
  }, []);



  // AOS init on page change
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      observer = initAOS();
    }, 100);
    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [currentPage]);

  // Back to top
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    const props = { setCurrentPage };
    switch (currentPage) {
      case 'home': return <HomePage {...props} />;
      case 'about': return <AboutPage {...props} />;
      case 'expertise_breast_cancer': return <BreastCancerSurgeryPage {...props} />;
      case 'expertise_thyroid_cancer': return <ThyroidCancerSurgeryPage {...props} />;
      case 'expertise_gi_cancer': return <GICancerSurgeryPage {...props} />;
      case 'expertise_gynecological_cancer': return <GynecologicalCancerSurgeryPage {...props} />;
      case 'expertise_soft_tissue_sarcoma': return <SoftTissueSarcomaPage {...props} />;
      case 'expertise_head_neck_cancer': return <HeadNeckCancerPage {...props} />;
      case 'expertise_laparoscopic_surgery': return <LaparoscopicSurgeryPage {...props} />;
      case 'expertise_general_surgery': return <GeneralSurgeryPage {...props} />;
      case 'clinic': return <ClinicPage {...props} />;
      case 'blog': return <BlogPage {...props} />;
      case 'contact': return <ContactPage {...props} />;
      // Keep others just in case they are navigated to directly
      case 'services': return <ServicesPage {...props} />;
      case 'conditions': return <ConditionsPage {...props} />;
      case 'gallery': return <GalleryPage {...props} />;
      case 'testimonials': return <TestimonialsPage {...props} />;
      default: return <HomePage {...props} />;
    }
  };

  return (
    <>
      {/* Main App */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main style={{ flex: 1 }}>
          {renderPage()}
        </main>

        <CTASection setCurrentPage={setCurrentPage} />
        <Footer setCurrentPage={setCurrentPage} />

        {/* Click to Call (mobile) */}
        <a
          href="tel:+919876543210"
          className="click-to-call"
          aria-label="Call Dr. Ajay Kumar"
          title="Call Now"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>

        {/* WhatsApp Float */}
        <a
          href="https://wa.me/919876543210?text=Hello%20Dr.%20Ajay%20Kumar%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Back to Top */}
        <button
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          title="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>

      {/* Global responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-right {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hero-stats {
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
}
