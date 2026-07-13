import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { 
    id: 'expertise', 
    label: 'Expertise',
    dropdown: [
      { id: 'expertise_breast_cancer', label: 'Breast Cancer Surgery' },
      { id: 'expertise_thyroid_cancer', label: 'Thyroid Cancer Surgery' },
      { id: 'expertise_gi_cancer', label: 'GI Cancer Surgery' },
      { id: 'expertise_gynecological_cancer', label: 'Gynecological Cancer Surgery' },
      { id: 'expertise_soft_tissue_sarcoma', label: 'Soft Tissue Sarcoma' },
      { id: 'expertise_head_neck_cancer', label: 'Head & Neck Cancer' },
      { id: 'expertise_laparoscopic_surgery', label: 'Laparoscopic Surgery' },
      { id: 'expertise_general_surgery', label: 'General Surgery' }
    ]
  },
  { id: 'clinic', label: 'The Clinic' },
  { id: 'blog', label: 'Blogs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    setMobileOpen(false);
    setExpandedDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDropdown(expandedDropdown === id ? null : id);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                height: '100px',
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                overflow: 'hidden'
              }}>
                <img src="./Logo_transparent.png" alt="Dr. A. Ajay Kumar Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {pages.map(page => (
              <div key={page.id} className={page.dropdown ? 'nav-dropdown-container' : ''} style={{ position: 'relative' }}>
                <button
                  onClick={() => !page.dropdown && navigate(page.id)}
                  className={`nav-link-custom ${currentPage === page.id ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  {page.label}
                  {page.dropdown && <ChevronDown size={14} />}
                </button>
                
                {/* Desktop Dropdown */}
                {page.dropdown && (
                  <div className="nav-dropdown-menu">
                    {page.dropdown.map(subItem => (
                      <button
                        key={subItem.id}
                        onClick={() => navigate(subItem.id)}
                        className={`dropdown-item ${currentPage === subItem.id ? 'active' : ''}`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+919876543210"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                background: 'linear-gradient(135deg, #0ABAB5, #089a96)',
                color: 'white', padding: '0.5rem 1.2rem',
                borderRadius: '50px', fontSize: '0.85rem',
                fontFamily: 'Inter', fontWeight: 600,
                marginLeft: '0.5rem', textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '0.25rem' }}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div style={{ height: '65px', display: 'flex', alignItems: 'center' }}>
            <img src="./Logo_transparent.png" alt="Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
          </div>
          <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        {pages.map(page => (
          <div key={page.id} style={{ marginBottom: '0.25rem' }}>
            <button
              onClick={(e) => page.dropdown ? toggleDropdown(page.id, e) : navigate(page.id)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left',
                background: currentPage === page.id ? 'rgba(10,186,181,0.15)' : 'none',
                border: 'none', borderLeft: currentPage === page.id ? '3px solid #0ABAB5' : '3px solid transparent',
                color: currentPage === page.id ? '#0ABAB5' : 'rgba(255,255,255,0.8)',
                padding: '0.85rem 1rem', fontFamily: 'Inter', fontWeight: 500,
                fontSize: '0.95rem', cursor: 'pointer',
                borderRadius: '0 8px 8px 0', transition: 'all 0.3s ease'
              }}
            >
              {page.label}
              {page.dropdown && (
                <ChevronDown size={18} style={{ transform: expandedDropdown === page.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
              )}
            </button>
            
            {/* Mobile Dropdown */}
            {page.dropdown && (
              <div style={{ 
                maxHeight: expandedDropdown === page.id ? '500px' : '0', 
                overflow: 'hidden', transition: 'max-height 0.3s ease',
                background: 'rgba(0,0,0,0.2)', marginLeft: '1rem', borderRadius: '0 0 0 8px'
              }}>
                {page.dropdown.map(subItem => (
                  <button
                    key={subItem.id}
                    onClick={() => navigate(subItem.id)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      background: 'none', border: 'none',
                      color: currentPage === subItem.id ? '#0ABAB5' : 'rgba(255,255,255,0.6)',
                      padding: '0.75rem 1rem 0.75rem 2rem', fontFamily: 'Inter', fontWeight: 500,
                      fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s ease'
                    }}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <a
            href="tel:+919876543210"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: 'linear-gradient(135deg, #0ABAB5, #089a96)',
              color: 'white', padding: '0.85rem 1.5rem',
              borderRadius: '50px', fontSize: '0.9rem',
              fontFamily: 'Inter', fontWeight: 600,
              textDecoration: 'none', marginBottom: '1rem'
            }}
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: '#25D366',
              color: 'white', padding: '0.85rem 1.5rem',
              borderRadius: '50px', fontSize: '0.9rem',
              fontFamily: 'Inter', fontWeight: 600,
              textDecoration: 'none'
            }}
          >
             WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 1025px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }

        /* Dropdown Styles */
        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 260px;
          border-radius: 12px;
          padding: 0.5rem;
          box-shadow: 0 15px 35px rgba(27,42,74,0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
          pointer-events: none;
        }

        .nav-dropdown-container:hover .nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Bridge the gap so hover doesn't break */
        .nav-dropdown-container::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 20px;
        }

        .dropdown-item {
          display: block;
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 0.75rem 1rem;
          color: #475569;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: #f8fafc;
          color: #0ABAB5;
          padding-left: 1.25rem;
        }
        
        .dropdown-item.active {
          color: #0ABAB5;
          background: rgba(10,186,181,0.05);
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
