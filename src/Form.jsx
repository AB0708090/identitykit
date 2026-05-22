import React, { useState } from 'react';
import { supabase } from './supabase';
import './Form.css';

const NICHES = ['Fashion & Lifestyle','Tech & Gadgets','Food & Cooking','Finance & Investing','Gaming','Fitness & Health','Travel','Education & Coaching','Comedy & Entertainment','Beauty & Skincare','Business & Entrepreneurship','Other'];
const PLATFORMS = ['Instagram','YouTube','LinkedIn','Twitter / X','Podcast','Blog / Newsletter','Moj / Josh','Snapchat'];
const CONTENT_TYPES = ['Instagram Reel','YouTube Dedicated Video','Instagram Stories','YouTube Shorts','Twitter Thread','Blog Post','Podcast Mention','LinkedIn Post'];
const VIBES = ['Educational & Informative','Fun & Entertaining','Honest & Raw','Aspirational & Aesthetic','Relatable & Desi','Professional & Corporate'];

export default function Form({ onSubmit }) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    full_name:'', city:'', email:'', whatsapp:'', niche:'', languages:'',
    platforms:[], instagram_followers:'', youtube_subscribers:'', avg_views:'', engagement_rate:'',
    audience_gender:'', audience_age:'', top_cities:'',
    brands_worked:'', best_campaign:'',
    content_types:[], rate_reel:'', rate_youtube:'', rate_story:'', vibe:'', extra:''
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleArr = (k, v) => setForm(f => ({ ...f, [k]: f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v] }));

  const steps = [
    { title: 'Who are you?', emoji: '👋', subtitle: 'Basic info — goes on all 3 documents' },
    { title: 'Your platforms', emoji: '📱', subtitle: 'Your social presence and numbers' },
    { title: 'Your audience', emoji: '👥', subtitle: 'Who watches your content?' },
    { title: 'Your work', emoji: '🏆', subtitle: 'Experience and achievements' },
    { title: 'What you offer', emoji: '💰', subtitle: 'Content types and your rates' },
  ];

  const validate = () => {
    if (step === 0 && (!form.full_name || !form.city || !form.email || !form.whatsapp || !form.niche)) { setError('Please fill all required fields!'); return false; }
    if (step === 1 && form.platforms.length === 0) { setError('Please select at least one platform!'); return false; }
    if (step === 4 && form.vibe === '') { setError('Please select your content vibe!'); return false; }
    setError(''); return true;
  };

  const next = () => { if (validate()) setStep(s => s + 1); };
  const back = () => { setError(''); setStep(s => s - 1); };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const { error: err } = await supabase.from('creator_submissions').insert([{
        full_name: form.full_name,
        city: form.city,
        email: form.email,
        whatsapp: form.whatsapp,
        niche: form.niche,
        languages: form.languages,
        platforms: form.platforms.join(', '),
        instagram_followers: form.instagram_followers,
        youtube_subscribers: form.youtube_subscribers,
        avg_views: form.avg_views,
        engagement_rate: form.engagement_rate,
        audience_gender: form.audience_gender,
        audience_age: form.audience_age,
        top_cities: form.top_cities,
        brands_worked: form.brands_worked,
        best_campaign: form.best_campaign,
        content_types: form.content_types.join(', '),
        rate_reel: form.rate_reel,
        rate_youtube: form.rate_youtube,
        rate_story: form.rate_story,
        vibe: form.vibe,
        extra: form.extra,
        status: 'new'
      }]);
      if (err) throw err;
      onSubmit(form);
    } catch (e) {
      setError('Something went wrong. Please try again!');
    }
    setLoading(false);
  };

  const pct = Math.round(((step) / 5) * 100);

  return (
    <div className="form-page">
      <div className="form-wrap">
        <div className="form-header">
          <div className="form-logo">🪪 CreatorKit</div>
          <div className="form-step-label">Step {step + 1} of 5</div>
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: pct + '%' }}></div>
        </div>

        <div className="form-body">
          <div className="step-emoji">{steps[step].emoji}</div>
          <div className="step-title">{steps[step].title}</div>
          <div className="step-sub">{steps[step].subtitle}</div>

          {error && <div className="error-msg">⚠️ {error}</div>}

          {step === 0 && (
            <div className="fields">
              <div className="field"><label>Full name <span className="req">*</span></label><input value={form.full_name} onChange={e => set('full_name', e.target.value)} placeholder="e.g. Priya Sharma" /></div>
              <div className="row2">
                <div className="field"><label>City <span className="req">*</span></label><input value={form.city} onChange={e => set('city', e.target.value)} placeholder="e.g. Mumbai" /></div>
                <div className="field"><label>Languages <span className="req">*</span></label><input value={form.languages} onChange={e => set('languages', e.target.value)} placeholder="e.g. Hindi, English" /></div>
              </div>
              <div className="field"><label>Email <span className="req">*</span></label><input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="priya@gmail.com" /></div>
              <div className="field"><label>WhatsApp number <span className="req">*</span></label><input value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} placeholder="+91 98765 43210" /></div>
              <div className="field"><label>Your niche <span className="req">*</span></label>
                <select value={form.niche} onChange={e => set('niche', e.target.value)}>
                  <option value="">Select your niche</option>
                  {NICHES.map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="fields">
              <div className="field"><label>Platforms you create on <span className="req">*</span></label>
                <div className="chips">
                  {PLATFORMS.map(p => (
                    <div key={p} className={`chip ${form.platforms.includes(p) ? 'on' : ''}`} onClick={() => toggleArr('platforms', p)}>{p}</div>
                  ))}
                </div>
              </div>
              <div className="row2">
                <div className="field"><label>Instagram followers</label><input value={form.instagram_followers} onChange={e => set('instagram_followers', e.target.value)} placeholder="e.g. 50,000" /></div>
                <div className="field"><label>YouTube subscribers</label><input value={form.youtube_subscribers} onChange={e => set('youtube_subscribers', e.target.value)} placeholder="e.g. 10,000" /></div>
              </div>
              <div className="row2">
                <div className="field"><label>Average views per post</label><input value={form.avg_views} onChange={e => set('avg_views', e.target.value)} placeholder="e.g. 20,000" /></div>
                <div className="field"><label>Engagement rate</label><input value={form.engagement_rate} onChange={e => set('engagement_rate', e.target.value)} placeholder="e.g. 4.5% (optional)" /></div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fields">
              <div className="field"><label>Audience gender</label>
                <div className="chips">
                  {['Mostly Male','Mostly Female','Equal Mix'].map(g => (
                    <div key={g} className={`chip ${form.audience_gender === g ? 'on' : ''}`} onClick={() => set('audience_gender', g)}>{g}</div>
                  ))}
                </div>
              </div>
              <div className="field"><label>Audience age group</label>
                <div className="chips">
                  {['13-17','18-24','25-34','35+'].map(a => (
                    <div key={a} className={`chip ${form.audience_age === a ? 'on' : ''}`} onClick={() => set('audience_age', a)}>{a}</div>
                  ))}
                </div>
              </div>
              <div className="field"><label>Top 3 cities your audience is from</label><input value={form.top_cities} onChange={e => set('top_cities', e.target.value)} placeholder="e.g. Mumbai, Delhi, Bangalore" /></div>
            </div>
          )}

          {step === 3 && (
            <div className="fields">
              <div className="field"><label>Brands you have worked with</label><input value={form.brands_worked} onChange={e => set('brands_worked', e.target.value)} placeholder="e.g. Mamaearth, boAt, Nykaa (comma separated)" /></div>
              <div className="field"><label>Your best campaign or achievement</label><textarea value={form.best_campaign} onChange={e => set('best_campaign', e.target.value)} placeholder="e.g. My Reel for Nykaa got 2M views and drove 8,000 app installs in a week" /></div>
            </div>
          )}

          {step === 4 && (
            <div className="fields">
              <div className="field"><label>Content types you offer</label>
                <div className="chips">
                  {CONTENT_TYPES.map(c => (
                    <div key={c} className={`chip ${form.content_types.includes(c) ? 'on' : ''}`} onClick={() => toggleArr('content_types', c)}>{c}</div>
                  ))}
                </div>
              </div>
              <div className="row2">
                <div className="field"><label>Rate per Reel (₹)</label><input value={form.rate_reel} onChange={e => set('rate_reel', e.target.value)} placeholder="e.g. 25000" /></div>
                <div className="field"><label>Rate per YouTube video (₹)</label><input value={form.rate_youtube} onChange={e => set('rate_youtube', e.target.value)} placeholder="e.g. 45000" /></div>
              </div>
              <div className="field"><label>Rate per Story pack (₹)</label><input value={form.rate_story} onChange={e => set('rate_story', e.target.value)} placeholder="e.g. 8000" /></div>
              <div className="field"><label>Your content vibe <span className="req">*</span></label>
                <div className="chips">
                  {VIBES.map(v => (
                    <div key={v} className={`chip ${form.vibe === v ? 'on' : ''}`} onClick={() => set('vibe', v)}>{v}</div>
                  ))}
                </div>
              </div>
              <div className="field"><label>Anything else to highlight? (optional)</label><textarea value={form.extra} onChange={e => set('extra', e.target.value)} placeholder="e.g. I specialize in authentic storytelling for D2C brands..." /></div>
            </div>
          )}

        </div>

        <div className="form-nav">
          {step > 0 && <button className="btn-back" onClick={back}>← Back</button>}
          {step < 4
            ? <button className="btn-next" onClick={next}>Next →</button>
            : <button className="btn-submit" onClick={submit} disabled={loading}>{loading ? 'Submitting...' : '✨ Submit & Get My Kit'}</button>
          }
        </div>
      </div>
    </div>
  );
}
