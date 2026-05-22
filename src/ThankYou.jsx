import React from 'react';
import './ThankYou.css';

export default function ThankYou({ data }) {
  const waLink = `https://wa.me/917984266725?text=Hi! I just submitted my Creator Identity Kit form. My name is ${encodeURIComponent(data?.full_name || '')} and I'm excited to get my kit! 🪪`;

  return (
    <div className="ty-page">
      <div className="ty-card">
        <div className="ty-icon">🎉</div>
        <h1 className="ty-title">You're all set, {data?.full_name?.split(' ')[0]}!</h1>
        <p className="ty-sub">We've received your details and are working on your Creator Identity Kit right now!</p>

        <div className="ty-steps">
          <div className="ty-step done">
            <div className="ty-step-icon">✅</div>
            <div className="ty-step-text">Form submitted successfully</div>
          </div>
          <div className="ty-step active">
            <div className="ty-step-icon">⚙️</div>
            <div className="ty-step-text">We're creating your kit <span className="ty-time">(~30 minutes)</span></div>
          </div>
          <div className="ty-step">
            <div className="ty-step-icon">📲</div>
            <div className="ty-step-text">Kit delivered on WhatsApp</div>
          </div>
          <div className="ty-step">
            <div className="ty-step-icon">💸</div>
            <div className="ty-step-text">Pay ₹249 via UPI after delivery</div>
          </div>
        </div>

        <div className="ty-payment">
          <div className="ty-payment-title">💰 Payment Details</div>
          <div className="ty-payment-note">Pay ONLY after receiving your kit on WhatsApp!</div>
          <div className="ty-upi">
            <span className="ty-upi-label">UPI ID</span>
            <span className="ty-upi-id">nisha7984@axl</span>
          </div>
          <div className="ty-amount">Amount: ₹249</div>
        </div>

        <a href={waLink} target="_blank" rel="noopener noreferrer" className="ty-wa-btn">
          💬 Message us on WhatsApp
        </a>

        <div className="ty-note">
          Questions? WhatsApp us at <strong>+91 79842 66725</strong><br />
          We usually reply within 5 minutes! 😊
        </div>
      </div>
    </div>
  );
}
