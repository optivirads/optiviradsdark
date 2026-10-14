'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ServiceFocus = 'google' | 'meta' | 'smm' | 'other-ads' | 'seo' | 'content' | 'web-dev' | 'email' | 'analytics';

export default function ServicesRoiCalculator() {
  const [serviceFocus, setServiceFocus] = useState<ServiceFocus>('google');
  const [adSpend, setAdSpend] = useState(50000);
  const [conversionRate, setConversionRate] = useState(2.5); // %
  const [leadValue, setLeadValue] = useState(2000); // ₹ average sale value

  const handleServiceFocusChange = (focus: ServiceFocus) => {
    setServiceFocus(focus);
    if (focus === 'google') {
      setAdSpend(50000);
      setConversionRate(2.5);
      setLeadValue(2000);
    } else if (focus === 'meta') {
      setAdSpend(60000);
      setConversionRate(2.0);
      setLeadValue(1800);
    } else if (focus === 'smm') {
      setAdSpend(30000);
      setConversionRate(1.8);
      setLeadValue(2500);
    } else if (focus === 'other-ads') {
      setAdSpend(40000);
      setConversionRate(2.2);
      setLeadValue(3000);
    } else if (focus === 'seo') {
      setAdSpend(40000);
      setConversionRate(3.0);
      setLeadValue(3500);
    } else if (focus === 'content') {
      setAdSpend(30000);
      setConversionRate(2.0);
      setLeadValue(2500);
    } else if (focus === 'web-dev') {
      setAdSpend(100000);
      setConversionRate(4.5);
      setLeadValue(3000);
    } else if (focus === 'email') {
      setAdSpend(25000);
      setConversionRate(3.5);
      setLeadValue(2000);
    } else if (focus === 'analytics') {
      setAdSpend(20000);
      setConversionRate(2.5);
      setLeadValue(3000);
    }
  };

  // Average CPC mapping based on focus
  let cpc = 15.0;
  if (serviceFocus === 'google') cpc = 15.0;
  else if (serviceFocus === 'meta') cpc = 12.0;
  else if (serviceFocus === 'smm') cpc = 8.0;
  else if (serviceFocus === 'other-ads') cpc = 20.0;
  else if (serviceFocus === 'seo') cpc = 5.0;
  else if (serviceFocus === 'content') cpc = 10.0;
  else if (serviceFocus === 'web-dev') cpc = 15.0;
  else if (serviceFocus === 'email') cpc = 5.0;
  else if (serviceFocus === 'analytics') cpc = 4.0;

  const estimatedClicks = adSpend / cpc;
  const estimatedLeads = Math.round(estimatedClicks * (conversionRate / 100));
  const estimatedRevenue = estimatedLeads * leadValue;
  const roas = estimatedRevenue > 0 ? (estimatedRevenue / adSpend).toFixed(1) : '0.0';

  return (
    <section className="services-calculator-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Calculate Your Growth Potential</h2>
          <p className="section-subtitle">
            Select a service vertical and adjust parameters to see standard projections of your sales pipeline growth (illustrative estimate).
          </p>
        </div>

        <div className="roi-calc-container glass-card">
          {/* Input Sliders */}
          <div className="roi-inputs">
            {/* Service Selection */}
            <div className="calc-slider-group">
              <label className="slider-title" htmlFor="service-focus-select">
                Campaign Strategy / Focus
              </label>
              <div className="select-container">
                <select 
                  id="service-focus-select"
                  value={serviceFocus}
                  onChange={(e) => handleServiceFocusChange(e.target.value as ServiceFocus)}
                  className="calc-select"
                >
                  <option value="google">Google Ads (Search & Display)</option>
                  <option value="meta">Meta Ads (Facebook & Instagram)</option>
                  <option value="smm">Social Media Management (SMM)</option>
                  <option value="other-ads">Niche Platforms (LinkedIn, Snap, Twitter)</option>
                  <option value="seo">Search Engine Optimization (SEO)</option>
                  <option value="content">Content Marketing & Copywriting</option>
                  <option value="web-dev">Web Development & CRO</option>
                  <option value="email">Email Marketing & Automation</option>
                  <option value="analytics">Analytics & Marketing Operations</option>
                </select>
              </div>
            </div>

            <div className="calc-slider-group">
              <div className="slider-label-row">
                <span className="slider-title">Monthly Budget Allocation</span>
                <span className="slider-value">₹{adSpend.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                aria-label="Monthly Budget Allocation"
                min="10000" 
                max="500000" 
                step="5000" 
                value={adSpend} 
                onChange={(e) => setAdSpend(parseInt(e.target.value))}
                className="calc-range-slider"
              />
              <div className="slider-limits">
                <span>₹10,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            <div className="calc-slider-group">
              <div className="slider-label-row">
                <span className="slider-title">Conversion Rate</span>
                <span className="slider-value">{conversionRate}%</span>
              </div>
              <input 
                type="range" 
                aria-label="Conversion Rate"
                min="0.5" 
                max="10" 
                step="0.1" 
                value={conversionRate} 
                onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                className="calc-range-slider"
              />
              <div className="slider-limits">
                <span>0.5%</span>
                <span>10.0%</span>
              </div>
            </div>

            <div className="calc-slider-group">
              <div className="slider-label-row">
                <span className="slider-title">Average Deal / Sale Value</span>
                <span className="slider-value">₹{leadValue.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                aria-label="Average Deal / Sale Value"
                min="500" 
                max="50000" 
                step="500" 
                value={leadValue} 
                onChange={(e) => setLeadValue(parseInt(e.target.value))}
                className="calc-range-slider"
              />
              <div className="slider-limits">
                <span>₹500</span>
                <span>₹50,000</span>
              </div>
            </div>
          </div>

          {/* Live Outputs */}
          <div className="roi-outputs-panel">
            <div className="output-box">
              <span className="output-label">Estimated Monthly Revenue (Illustrative Estimate)</span>
              <span className="output-number text-gradient-green">
                ₹{Math.round(estimatedRevenue).toLocaleString('en-IN')}
              </span>
            </div>
            
            <div className="output-grid-two">
              <div className="output-box sub">
                <span className="output-label">Estimated Leads / Sales</span>
                <span className="output-subnumber">{estimatedLeads}</span>
              </div>
              <div className="output-box sub">
                <span className="output-label">Projected Pipeline ROAS</span>
                <span className="output-subnumber">{roas}x</span>
              </div>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.25rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
              *Illustrative estimate based on average conversion benchmarks. Actual results depend on ad creative, sales funnel, and target audience.
            </p>

            <div className="calc-action-row">
              <Link href="/free-marketing-audit" className="btn-primary w-full justify-center">
                Get a Free Marketing Audit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
