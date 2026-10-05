import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n.config';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import appImage from '../../../public/bike-status.avif'
import SavingsCalculator from '@/components/SavingsCalculator';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="main-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">REVOLT</div>
        <div className="nav-links">
          <a href="#motorcycles">{dict.nav.motorcycles}</a>
          <a href="#about">{dict.nav.about}</a>
          <a href="#dealerships">{dict.nav.dealerships}</a>
          <a href="#media">{dict.nav.media}</a>
          <a href="#investors">{dict.nav.investors}</a>
          <LanguageSwitcher currentLang={resolvedParams.lang} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.subtitle}</p>
          <button className="cta-button">{dict.hero.cta_button}</button>
        </div>
      </section>

      {/* Products Section */}
      <section id="motorcycles" className="products-section">
        <h2 className="section-title">{dict.products.title}</h2>

        <div className="products-grid">
          {/* RV400 */}
          <div className="product-card">
            <div className="product-image-placeholder">
              <span className="placeholder-text">RV400 Image</span>
            </div>
            <div className="product-info">
              <h3>{dict.products.rv400.name}</h3>
              <p className="tagline">{dict.products.rv400.tagline}</p>
              <ul className="specs-list">
                <li>🔋 {dict.products.rv400.battery}</li>
                <li>⚡ {dict.products.rv400.speed}</li>
                <li>🛣️ {dict.products.rv400.range}</li>
              </ul>
              <button className="outline-button">{dict.hero.cta_button}</button>
            </div>
          </div>

          {/* RV400 BRZ */}
          <div className="product-card">
            <div className="product-image-placeholder">
              <span className="placeholder-text">RV400 BRZ Image</span>
            </div>
            <div className="product-info">
              <h3>{dict.products.rv400_brz.name}</h3>
              <p className="tagline">{dict.products.rv400_brz.tagline}</p>
              <ul className="specs-list">
                <li>🔋 {dict.products.rv400_brz.battery}</li>
                <li>⚡ {dict.products.rv400_brz.speed}</li>
                <li>🛣️ {dict.products.rv400_brz.range}</li>
              </ul>
              <button className="outline-button">{dict.hero.cta_button}</button>
            </div>
          </div>

          {/* RV1 */}
          <div className="product-card">
            <div className="product-image-placeholder">
              <span className="placeholder-text">RV1 Image</span>
            </div>
            <div className="product-info">
              <h3>{dict.products.rv1.name}</h3>
              <p className="tagline">{dict.products.rv1.tagline}</p>
              <ul className="specs-list">
                <li>🔋 {dict.products.rv1.battery}</li>
                <li>⚡ {dict.products.rv1.speed}</li>
                <li>🛣️ {dict.products.rv1.range}</li>
              </ul>
              <button className="outline-button">{dict.hero.cta_button}</button>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="app-section">
        <div className="app-content">
          <h2>{dict.app.title}</h2>
          <p>{dict.app.subtitle}</p>
          <ul className="app-features">
            {dict.app.features.map((feature: string, idx: number) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <button className="cta-button">{dict.app.download}</button>
        </div>
        <div className="app-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Image
            src={appImage}
            alt="MyRevolt App UI"
            width={150}
            height={300}
            style={{ width: '150px', height: 'auto', borderRadius: '24px', border: '1px solid #222' }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3 className="stat-number">10M+</h3>
          <p className="stat-label">{dict.stats.driven}</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">50k+</h3>
          <p className="stat-label">{dict.stats.customers}</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-number">100%</h3>
          <p className="stat-label">{dict.stats.electric}</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="section-title">{dict.benefits.title}</h2>
        <div className="benefits-grid">
          {dict.benefits.items.map((item: { title: string, desc: string }, idx: number) => (
            <div className="benefit-card" key={idx}>
              <div className="benefit-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Savings Calculator */}
      <SavingsCalculator dict={dict.calculator} />

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>{dict.newsletter.title}</h2>
          <p>{dict.newsletter.subtitle}</p>
          <div className="newsletter-form">
            <input type="email" placeholder={dict.newsletter.placeholder} required />
            <button type="button" className="cta-button">{dict.newsletter.button}</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">REVOLT</div>
            <p className="footer-tagline">{dict.footer.tagline}</p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>{dict.footer.cols.models.title}</h4>
              {dict.footer.cols.models.links.map((link: string, i: number) => <a key={i} href="#">{link}</a>)}
            </div>
            <div className="footer-col">
              <h4>{dict.footer.cols.company.title}</h4>
              {dict.footer.cols.company.links.map((link: string, i: number) => <a key={i} href="#">{link}</a>)}
            </div>
            <div className="footer-col">
              <h4>{dict.footer.cols.support.title}</h4>
              {dict.footer.cols.support.links.map((link: string, i: number) => <a key={i} href="#">{link}</a>)}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{dict.footer.copyright}</p>
          <div className="footer-legal">
            {dict.footer.legal.map((link: string, i: number) => <a key={i} href="#">{link}</a>)}
          </div>
        </div>
      </footer>
    </main>
  );
}
