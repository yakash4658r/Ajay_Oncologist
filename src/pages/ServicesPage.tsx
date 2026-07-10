import { useState } from 'react';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

const services = [
  {
    id: 'breast',
    icon: '',
    title: 'Breast Cancer Surgery',
    color: '#e91e8c',
    shortDesc: 'Expert surgical management including lumpectomy, mastectomy & oncoplastic reconstruction',
    symptoms: ['Breast lump or thickening', 'Change in breast shape/size', 'Nipple discharge or inversion', 'Skin dimpling or redness', 'Swollen lymph nodes in armpit'],
    treatments: ['Lumpectomy (Breast-conserving surgery)', 'Modified Radical Mastectomy', 'Sentinel Lymph Node Biopsy', 'Axillary Lymph Node Dissection', 'Oncoplastic Reconstruction', 'Risk-reducing (prophylactic) surgery'],
    desc: 'Dr. Ajay Kumar provides comprehensive breast cancer surgical care, from early-stage lumpectomy to mastectomy and complex reconstructive procedures. His oncoplastic approach prioritizes both cancer cure and aesthetic outcomes, ensuring patients maintain their quality of life after surgery.',
    approach: 'Dr. Ajay Kumar employs the latest oncoplastic techniques, combining cancer surgery with reconstruction to achieve the best cosmetic results. He works closely with a multidisciplinary team for complete cancer care.'
  },
  {
    id: 'thyroid',
    icon: '',
    title: 'Thyroid Cancer Surgery',
    color: '#0ABAB5',
    shortDesc: 'Precise thyroidectomy and neck dissection for all types of thyroid malignancies',
    symptoms: ['Neck lump or swelling', 'Difficulty swallowing', 'Voice changes or hoarseness', 'Pain in neck or throat', 'Enlarged lymph nodes'],
    treatments: ['Total Thyroidectomy', 'Hemithyroidectomy (Lobectomy)', 'Central Neck Dissection', 'Lateral Neck Dissection', 'Minimally Invasive Thyroidectomy', 'Completion Thyroidectomy'],
    desc: 'Thyroid cancer surgery requires precision and expertise to protect vital neck structures including the parathyroid glands and recurrent laryngeal nerves. Dr. Ajay Kumar\'s specialized training ensures optimal cancer clearance while minimizing complications.',
    approach: 'Using meticulous surgical technique and nerve monitoring, Dr. Ajay Kumar achieves complete cancer removal while preserving voice and calcium regulation — crucial aspects of quality of life after thyroid surgery.'
  },
  {
    id: 'gi',
    icon: '',
    title: 'Gastrointestinal (GI) Cancer Surgery',
    color: '#f59e0b',
    shortDesc: 'Comprehensive surgical care for stomach, colon, rectal, liver & pancreatic cancers',
    symptoms: ['Persistent abdominal pain', 'Unexplained weight loss', 'Blood in stool', 'Difficulty swallowing', 'Jaundice (yellowing of skin)', 'Persistent bloating or fullness'],
    treatments: ['Laparoscopic Colectomy', 'Low Anterior Resection (Rectal)', 'Gastrectomy (Stomach Cancer)', 'Whipple Procedure (Pancreatic)', 'Hepatectomy (Liver)', 'Esophagectomy', 'HIPEC for Peritoneal Metastasis'],
    desc: 'Gastrointestinal cancers require complex surgical interventions. Dr. Ajay Kumar specializes in minimally invasive approaches for colon, rectal, gastric, esophageal, liver, and pancreatic cancers, offering patients less invasive options with excellent oncological outcomes.',
    approach: 'Dr. Ajay Kumar uses advanced laparoscopic and robotic-assisted techniques for GI cancers, enabling faster recovery and reduced complications compared to traditional open surgery.'
  },
  {
    id: 'gynec',
    icon: '',
    title: 'Gynecological Cancer Surgery',
    color: '#8b5cf6',
    shortDesc: 'Surgical expertise in ovarian, uterine, and cervical cancers with organ-preserving approaches',
    symptoms: ['Abnormal vaginal bleeding', 'Pelvic pain or pressure', 'Bloating or abdominal swelling', 'Urinary symptoms', 'Unexplained weight loss', 'Changes in bowel habits'],
    treatments: ['Total Hysterectomy', 'Radical Hysterectomy', 'Oophorectomy (Ovarian removal)', 'Cytoreductive Surgery', 'Staging Laparoscopy', 'Fertility-sparing surgery', 'HIPEC for Ovarian Cancer'],
    desc: 'Gynecological cancers including ovarian, uterine, and cervical cancers require specialized surgical expertise. Dr. Ajay Kumar performs both conventional and minimally invasive gynecological cancer operations with a focus on fertility preservation when appropriate.',
    approach: 'Dr. Ajay Kumar employs laparoscopic and fertility-sparing approaches wherever possible, preserving reproductive function while ensuring complete cancer clearance for younger patients.'
  },
  {
    id: 'sarcoma',
    icon: '',
    title: 'Soft Tissue Sarcoma Surgery',
    color: '#ef4444',
    shortDesc: 'Wide local excision and limb-sparing surgery for soft tissue sarcomas & GISTs',
    symptoms: ['Painless lump or swelling', 'Rapidly growing mass', 'Pain in affected area', 'Restricted movement', 'Skin changes over lump'],
    treatments: ['Wide Local Excision', 'Limb-Sparing Surgery', 'Amputation (when required)', 'GIST Resection', 'Retroperitoneal Sarcoma Surgery', 'Reconstruction after resection'],
    desc: 'Soft tissue sarcomas are rare but complex tumors requiring expert surgical management. Dr. Ajay Kumar specializes in limb-sparing surgeries that remove the tumor completely while preserving function, significantly improving quality of life.',
    approach: 'Dr. Ajay Kumar collaborates with orthopedic surgeons, plastic surgeons, and radiation oncologists to ensure comprehensive sarcoma care. The goal is always limb preservation without compromising cancer outcomes.'
  },
  {
    id: 'headneck',
    icon: '',
    title: 'Head & Neck Cancer Surgery',
    color: '#06b6d4',
    shortDesc: 'Specialized surgery for oral, throat, salivary gland and other head & neck malignancies',
    symptoms: ['Non-healing mouth ulcer', 'Persistent sore throat', 'Difficulty swallowing', 'Hoarse voice', 'Neck lump', 'Ear pain or hearing problems'],
    treatments: ['Wide Local Excision of Oral Cancer', 'Neck Dissection', 'Total/Partial Laryngectomy', 'Parotidectomy', 'Submandibular Gland Surgery', 'Mandibulectomy with Reconstruction', 'Flap Reconstruction'],
    desc: 'Head and neck cancers require complex surgical procedures that must balance cancer removal with preservation of critical functions — speech, swallowing, and appearance. Dr. Ajay Kumar\'s expertise ensures comprehensive cancer control with optimal functional outcomes.',
    approach: 'Advanced reconstructive techniques including free flaps and local flaps are used to restore form and function after extensive head and neck cancer resections, helping patients return to a near-normal quality of life.'
  },
  {
    id: 'laparoscopic',
    icon: '',
    title: 'Laparoscopic / Minimally Invasive Surgery',
    color: '#10b981',
    shortDesc: 'Advanced minimally invasive cancer surgeries with faster recovery and less pain',
    symptoms: ['Applicable across multiple cancer types', 'Early to advanced stage cancers', 'Suitable for most GI cancers', 'Recommended for fit patients', 'Based on cancer stage assessment'],
    treatments: ['Laparoscopic Colectomy', 'Laparoscopic Gastrectomy', 'Laparoscopic Cholecystectomy', 'Laparoscopic Appendectomy', 'Laparoscopic Hernia Repair', 'Diagnostic Laparoscopy', 'Laparoscopic Lymph Node Dissection'],
    desc: 'Dr. Ajay Kumar is highly skilled in laparoscopic (keyhole) surgery, performing complex cancer operations through small incisions using a camera and specialized instruments. This minimally invasive approach offers patients equivalent cancer outcomes with significantly reduced trauma.',
    approach: 'Using state-of-the-art laparoscopic equipment and 3D visualization systems, Dr. Ajay Kumar achieves precise tumor removal with minimal blood loss, reduced postoperative pain, shorter hospital stays (2-3 days vs 7-10 days), and faster return to normal activities.'
  },
  {
    id: 'general',
    icon: '',
    title: 'General Surgery',
    color: '#1B2A4A',
    shortDesc: 'Expert care for hernia, gallbladder, appendix and other general surgical conditions',
    symptoms: ['Hernia (bulge or lump)', 'Gallbladder pain (right side)', 'Appendix pain (lower right)', 'Persistent indigestion', 'Gallstones or cholecystitis', 'Umbilical hernia'],
    treatments: ['Laparoscopic Hernia Repair (Inguinal, Umbilical, Incisional)', 'Laparoscopic Cholecystectomy', 'Appendectomy', 'Pilonidal Sinus Surgery', 'Hemorrhoidectomy', 'Fistula-in-ano Surgery', 'Varicose Vein Treatment'],
    desc: 'In addition to cancer surgery, Dr. Ajay Kumar provides expert general surgical care for common conditions like hernias, gallbladder disease, and appendicitis. These are performed laparoscopically wherever possible for faster recovery.',
    approach: 'All general surgical procedures are performed with the same precision and care applied to cancer surgery. Laparoscopic approaches are preferred, allowing patients to return to normal activities within days rather than weeks.'
  },
];

export default function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0ABAB5' }}>Expert Surgical Care</span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Services & Treatments
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Comprehensive surgical oncology services covering all major cancer types with advanced minimally invasive techniques.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.875rem' }}>Home</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#0ABAB5', fontSize: '0.875rem', fontWeight: 600 }}>Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      {!selectedService ? (
        <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
              <h2 className="section-title">Our <span>Specializations</span></h2>
              <div className="section-divider center"></div>
              <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
                Click on any service to learn more about the condition, symptoms, and surgical approach.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-delay={`${(i % 3) * 100}`}
                  onClick={() => setSelectedService(service)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="service-card-header" style={{ background: `linear-gradient(135deg, ${service.color}22, #1B2A4A)` }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', fontSize: '1.1rem' }}>{service.title}</h3>
                  </div>
                  <div className="service-card-body">
                    <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>{service.shortDesc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {service.treatments.slice(0, 3).map(t => (
                        <span key={t} style={{ background: `${service.color}15`, color: service.color, padding: '0.2rem 0.6rem', borderRadius: '50px', fontSize: '0.72rem', fontFamily: 'Inter', fontWeight: 600 }}>
                          {t.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: service.color, fontFamily: 'Inter', fontWeight: 600, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Service Detail View */
        <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
            <button
              onClick={() => setSelectedService(null)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0ABAB5', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter', fontWeight: 600, marginBottom: '2rem', fontSize: '0.9rem' }}
            >
              ← Back to All Services
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <div style={{
                  background: `linear-gradient(135deg, ${selectedService.color}22, #1B2A4A)`,
                  borderRadius: '20px', padding: '3rem', textAlign: 'center', marginBottom: '1.5rem',
                  border: `2px solid ${selectedService.color}33`
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{selectedService.icon}</div>
                  <h2 style={{ fontFamily: 'Inter', fontWeight: 800, color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {selectedService.title}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{selectedService.shortDesc}</p>
                </div>

                {/* Symptoms */}
                <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem', border: '1px solid #e8f4f8' }}>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                     Warning Signs & Symptoms
                  </h3>
                  <div>
                    {selectedService.symptoms.map(sym => (
                      <div key={sym} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: selectedService.color, flexShrink: 0 }}></div>
                        <span style={{ color: '#475569', fontSize: '0.9rem' }}>{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Main Description */}
                <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem', border: '1px solid #e8f4f8' }}>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '1rem', fontSize: '1.1rem' }}>
                     Overview
                  </h3>
                  <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '1.25rem' }}>{selectedService.desc}</p>
                  <div style={{ background: `${selectedService.color}10`, borderRadius: '12px', padding: '1.25rem', borderLeft: `4px solid ${selectedService.color}` }}>
                    <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                       Dr. Ajay Kumar's Approach
                    </h4>
                    <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.8' }}>{selectedService.approach}</p>
                  </div>
                </div>

                {/* Treatments */}
                <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '1.5rem', border: '1px solid #e8f4f8' }}>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                     Surgical Procedures Offered
                  </h3>
                  <div>
                    {selectedService.treatments.map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid #f1f5f9' }}>
                        <CheckCircle size={15} style={{ color: selectedService.color, flexShrink: 0 }} />
                        <span style={{ color: '#475569', fontSize: '0.9rem' }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ background: 'linear-gradient(135deg, #1B2A4A, #243561)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
                  <h4 style={{ fontFamily: 'Inter', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
                    Need a Consultation?
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    Book an appointment with Dr. Ajay Kumar for a comprehensive evaluation and personalized treatment plan.
                  </p>
                  <button
                    onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="btn-primary-custom"
                    style={{ margin: '0 auto' }}
                  >
                    Book Appointment <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
