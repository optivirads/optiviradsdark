import React from 'react';
import { HelpCircle, ArrowRight, MessageSquareX, DollarSign, Video } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProblemSolutions() {
  const problems = [
    {
      icon: MessageSquareX,
      color: 'crimson',
      quote: '"We post on social media, but nobody calls."',
      problem: 'Random aesthetic posts get a few likes from friends and family, but generate zero calls, walk-ins, or WhatsApp bookings.',
      fix: 'A focused monthly content calendar built around your actual offers, with a direct WhatsApp or Call action on every post.',
    },
    {
      icon: DollarSign,
      color: 'cyan',
      quote: '"Boosting posts wastes our advertising budget."',
      problem: 'The "Boost Post" button sprays ads to distant people who will never visit your store or clinic.',
      fix: 'Proper Meta and Google Ads targeted strictly to your city radius, optimized weekly with clear cost-per-enquiry tracking.',
    },
    {
      icon: Video,
      color: 'purple',
      quote: '"We have no time or equipment for Reels & videos."',
      problem: 'Planning scripts, shooting footage, recording audio, and editing every week is an overwhelming full-time job.',
      fix: 'We plan, script in Malayalam and English, and edit your Reels. You simply review and approve before anything goes live.',
    },
  ];

  return (
    <section className="problem-solutions-section" id="challenges">
      <div className="container">
        {/* Section Header with smooth fade in (no rotation) */}
        <ScrollReveal direction="none" rotate={false} repeat={true} delay={50} duration={600}>
          <div className="section-header text-center">
            <span className="eyebrow-pill">
              <HelpCircle size={14} className="eyebrow-icon" /> Sound familiar?
            </span>
            <h2 className="section-title">
              Marketing Takes Your Time, <span className="text-gradient-green">But Doesn’t Bring Customers.</span>
            </h2>
            <p className="section-subtitle">
              Most local business owners we talk to in Kerala and the GCC face the exact same three problems.
            </p>
          </div>
        </ScrollReveal>

        {/* Problems Grid - each card enters separately with 180-degree right-to-left rotation */}
        <div className="problems-grid">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            const cardDelay = 60 + idx * 110; // Staggered: 60ms, 170ms, 280ms
            return (
              <ScrollReveal 
                key={idx} 
                direction="left" 
                distance={45} 
                rotate={true} 
                repeat={true} 
                delay={cardDelay} 
                duration={580}
              >
                <div className={`problem-card ${item.color}`}>
                  <div className="problem-quote-wrap">
                    <span className="problem-icon-badge">
                      <Icon size={20} />
                    </span>
                    <h3 className="problem-quote">{item.quote}</h3>
                  </div>
                  <p className="problem-body">{item.problem}</p>
                  <div className="problem-fix-wrap">
                    <div className="fix-header">
                      <ArrowRight size={15} className="fix-arrow" />
                      <span className="fix-label">The OptiVir Fix:</span>
                    </div>
                    <p className="fix-text">{item.fix}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

