import React from 'react';
import './Landing.css';

export default function Landing({ onStart }) {
  return (
    <div className="landing">
      <nav className="nav">
        <div className="nav-logo">🪪 CreatorKit</div>
        <button className="nav-btn" onClick={onStart}>Get My Kit</button>
      </nav>

      <section className="hero">
        <div className="hero-badge">🇮🇳 Made for Indian Creators</div>
        <h1 className="hero-title">Your Complete<br /><span className="hero-green">Creator Identity Kit</span></h1>
        <p className="hero-sub">Media Kit + Creator CV + Rate Card — all 3 professional documents ready in 30 minutes. Just fill a form, we do the rest!</p>
        <button className="hero-btn" onClick={onStart}>Get My Kit for ₹249 →</button>
        <div className="hero-note">✅ Delivered on WhatsApp · ✅ 1 free revision · ✅ Pay after delivery</div>
      </section>

      <section className="docs-section">
        <h2 className="sec-h">What you get</h2>
        <div className="docs-grid">
          <div className="doc-card">
            <div className="doc-icon">🎨</div>
            <div className="doc-name">Media Kit</div>
            <div className="doc-desc">Your visual one-pager with follower stats, audience details, brand collabs and packages. First thing brands ask for!</div>
          </div>
          <div className="doc-card featured">
            <div className="doc-badge">Most Valuable</div>
            <div className="doc-icon">📄</div>
            <div className="doc-name">Creator CV</div>
            <div className="doc-desc">Professional background document showing your experience, highlights and what you bring to brands. Stands out instantly!</div>
          </div>
          <div className="doc-card">
            <div className="doc-icon">💰</div>
            <div className="doc-name">Rate Card</div>
            <div className="doc-desc">Official pricing document showing exactly what you charge per content type. No more awkward pricing talks with brands!</div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <h2 className="sec-h">How it works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <div className="step-title">Fill the form</div>
            <div className="step-desc">Answer 20 simple questions about yourself. Takes only 5-7 minutes!</div>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <div className="step-title">We create your kit</div>
            <div className="step-desc">Our AI creates all 3 professional documents tailored for you. Ready in 30 minutes!</div>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <div className="step-title">Get on WhatsApp</div>
            <div className="step-desc">We send your complete Creator Identity Kit on WhatsApp as PDF!</div>
          </div>
          <div className="step-card">
            <div className="step-num">04</div>
            <div className="step-title">Pay ₹249</div>
            <div className="step-desc">Happy with your kit? Pay ₹249 via UPI. 1 free revision included!</div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-card">
          <div className="pricing-top">
            <div className="pricing-title">Creator Identity Kit 🪪</div>
            <div className="pricing-price">₹249</div>
            <div className="pricing-sub">Pay after delivery. No upfront payment!</div>
          </div>
          <div className="pricing-items">
            <div className="pricing-item">✅ Professional Media Kit</div>
            <div className="pricing-item">✅ Creator CV</div>
            <div className="pricing-item">✅ Rate Card</div>
            <div className="pricing-item">✅ WhatsApp delivery in 30 mins</div>
            <div className="pricing-item">✅ 1 free revision included</div>
            <div className="pricing-item">✅ PDF format ready to share</div>
          </div>
          <button className="pricing-btn" onClick={onStart}>Get My Kit Now →</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">🪪 CreatorKit</div>
        <div className="footer-note">Made with ❤️ for Indian Creators · WhatsApp: +917984266725</div>
      </footer>
    </div>
  );
}
