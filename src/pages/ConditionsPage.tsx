interface ConditionsPageProps {
  setCurrentPage: (page: string) => void;
}

const conditionCategories = [
  {
    title: 'Breast Conditions',
    color: '#e91e8c',
    icon: '',
    conditions: [
      { name: 'Breast Cancer', icon: '', desc: 'Most common cancer in women. Treatment includes lumpectomy or mastectomy with possible reconstruction.' },
      { name: 'Fibroadenoma', icon: '', desc: 'Benign breast tumor requiring surgical excision in symptomatic or growing cases.' },
      { name: 'Breast Abscess', icon: '', desc: 'Collection of pus in breast tissue requiring surgical drainage and antibiotic therapy.' },
      { name: 'Gynecomastia', icon: '', desc: 'Enlargement of male breast tissue requiring surgical correction.' },
    ]
  },
  {
    title: 'Thyroid & Neck Conditions',
    color: '#0ABAB5',
    icon: '',
    conditions: [
      { name: 'Thyroid Cancer', icon: '', desc: 'Papillary, follicular, medullary, and anaplastic thyroid cancers treated with specialized thyroidectomy.' },
      { name: 'Thyroid Goiter', icon: '', desc: 'Enlarged thyroid gland requiring partial or total thyroidectomy when symptomatic.' },
      { name: 'Thyroid Nodules', icon: '', desc: 'Suspicious thyroid nodules evaluated and surgically removed when indicated by FNAC or biopsy.' },
      { name: 'Parathyroid Adenoma', icon: '', desc: 'Overactive parathyroid gland causing hypercalcemia, treated with minimally invasive parathyroidectomy.' },
    ]
  },
  {
    title: 'Gastrointestinal Cancers',
    color: '#f59e0b',
    icon: '',
    conditions: [
      { name: 'Stomach (Gastric) Cancer', icon: '', desc: 'Treated with total or partial gastrectomy with D2 lymph node dissection.' },
      { name: 'Colon Cancer', icon: '', desc: 'Laparoscopic colectomy with complete mesocolic excision for optimal oncological outcomes.' },
      { name: 'Rectal Cancer', icon: '', desc: 'Low anterior resection or abdominoperineal resection with total mesorectal excision.' },
      { name: 'Esophageal Cancer', icon: '', desc: 'Esophagectomy using minimally invasive or open approaches for cancer of the food pipe.' },
      { name: 'Liver Cancer', icon: '', desc: 'Hepatectomy (partial liver removal) for primary and secondary liver tumors.' },
      { name: 'Pancreatic Cancer', icon: '', desc: 'Whipple procedure or distal pancreatectomy for pancreatic head and body tumors.' },
      { name: 'GIST (GI Stromal Tumor)', icon: '', desc: 'Wide local excision for gastrointestinal stromal tumors of the stomach and small bowel.' },
      { name: 'Periampullary Cancer', icon: '', desc: 'Tumors arising near the ampulla of Vater treated with Whipple procedure.' },
    ]
  },
  {
    title: 'Gynecological Cancers',
    color: '#8b5cf6',
    icon: '',
    conditions: [
      { name: 'Ovarian Cancer', icon: '', desc: 'Cytoreductive surgery and staging with HIPEC for advanced ovarian cancer.' },
      { name: 'Uterine (Endometrial) Cancer', icon: '', desc: 'Total hysterectomy with bilateral salpingo-oophorectomy and lymph node dissection.' },
      { name: 'Cervical Cancer', icon: '', desc: 'Radical hysterectomy with pelvic lymph node dissection for early cervical cancer.' },
      { name: 'Vulvar Cancer', icon: '', desc: 'Wide local excision with possible lymph node assessment for vulvar malignancies.' },
    ]
  },
  {
    title: 'Soft Tissue & Bone Tumors',
    color: '#ef4444',
    icon: '',
    conditions: [
      { name: 'Soft Tissue Sarcoma', icon: '', desc: 'Wide local excision with limb-sparing surgery; amputation only when unavoidable.' },
      { name: 'GIST', icon: '', desc: 'Surgical resection of gastrointestinal stromal tumors at all sites.' },
      { name: 'Lipoma', icon: '', desc: 'Excision of lipomas — benign fatty tumors when symptomatic or rapidly growing.' },
      { name: 'Retroperitoneal Sarcoma', icon: '', desc: 'Complex surgery for large retroperitoneal soft tissue sarcomas with multivisceral resection.' },
    ]
  },
  {
    title: 'Head & Neck Cancers',
    color: '#06b6d4',
    icon: '',
    conditions: [
      { name: 'Oral Cancer', icon: '', desc: 'Wide local excision of oral cavity tumors with neck dissection and reconstruction.' },
      { name: 'Throat Cancer (Laryngeal)', icon: '', desc: 'Laryngectomy (total or partial) for cancer of the voice box.' },
      { name: 'Salivary Gland Cancer', icon: '', desc: 'Parotidectomy or submandibular gland excision for salivary gland tumors.' },
      { name: 'Thyroglossal Cyst', icon: '', desc: 'Sistrunk procedure for removal of thyroglossal duct cysts and sinuses.' },
    ]
  },
  {
    title: 'General Surgery Conditions',
    color: '#1B2A4A',
    icon: '',
    conditions: [
      { name: 'Inguinal Hernia', icon: '', desc: 'Laparoscopic mesh repair (TEP/TAPP) for groin hernias with minimal recovery time.' },
      { name: 'Umbilical Hernia', icon: '', desc: 'Laparoscopic or open repair of umbilical hernias in adults and children.' },
      { name: 'Incisional Hernia', icon: '', desc: 'Mesh repair of hernias at previous surgical incision sites.' },
      { name: 'Gallbladder Stones', icon: '', desc: 'Laparoscopic cholecystectomy for gallstone disease and cholecystitis.' },
      { name: 'Appendicitis', icon: '', desc: 'Laparoscopic appendectomy for acute and chronic appendicitis.' },
      { name: 'Pilonidal Sinus', icon: '', desc: 'Excision and primary closure or flap repair for pilonidal disease.' },
      { name: 'Hemorrhoids', icon: '', desc: 'Surgical hemorrhoidectomy for symptomatic grade III and IV hemorrhoids.' },
      { name: 'Fistula-in-Ano', icon: '', desc: 'Fistulotomy, seton placement, or LIFT procedure for anal fistulas.' },
    ]
  },
];

export default function ConditionsPage({ setCurrentPage }: ConditionsPageProps) {
  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#0ABAB5' }}>Medical Expertise</span>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Conditions Treated
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            Dr. Ajay Kumar treats a comprehensive range of cancers and surgical conditions with expert precision and compassionate care.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '0.875rem' }}>Home</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span style={{ color: '#0ABAB5', fontSize: '0.875rem', fontWeight: 600 }}>Conditions Treated</span>
          </div>
        </div>
      </div>

      <section style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {conditionCategories.map((category, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '4rem' }} data-aos="fade-up">
              {/* Category Header */}
              <div style={{
                background: `linear-gradient(135deg, ${category.color}15, transparent)`,
                borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '1.5rem',
                borderLeft: `5px solid ${category.color}`, display: 'flex', alignItems: 'center', gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                <div>
                  <h2 style={{ fontFamily: 'Inter', fontWeight: 800, color: '#1B2A4A', fontSize: '1.3rem', margin: 0 }}>
                    {category.title}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.85rem', margin: 0, marginTop: '0.25rem' }}>
                    {category.conditions.length} conditions treated
                  </p>
                </div>
              </div>

              {/* Conditions Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {category.conditions.map((condition, idx) => (
                  <div
                    key={idx}
                    className="condition-card"
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 60}`}
                  >
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: `${category.color}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 1rem', fontSize: '1.5rem'
                    }}>
                      {condition.icon}
                    </div>
                    <h4 style={{
                      fontFamily: 'Inter', fontWeight: 700, color: '#1B2A4A',
                      fontSize: '0.95rem', marginBottom: '0.5rem'
                    }}>
                      {condition.name}
                    </h4>
                    <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: '1.6' }}>
                      {condition.desc}
                    </p>
                    <button
                      onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        color: category.color, fontFamily: 'Inter', fontWeight: 600,
                        fontSize: '0.78rem', background: 'none', border: 'none',
                        cursor: 'pointer', marginTop: '0.75rem', padding: 0
                      }}
                    >
                      Book Consultation →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Banner */}
          <div data-aos="fade-up" style={{
            background: 'linear-gradient(135deg, #1B2A4A, #243561)',
            borderRadius: '20px', padding: '3rem', textAlign: 'center',
            border: '1px solid rgba(10,186,181,0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}></div>
            <h3 style={{ fontFamily: 'Inter', fontWeight: 800, color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Don't see your condition listed?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
              Dr. Ajay Kumar treats many other conditions. Contact us for a consultation and personalized evaluation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn-primary-custom"
              >
                 Book Appointment
              </button>
              <a href="tel:+919876543210" className="btn-outline-custom">
                 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
