import React from 'react';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTADescription,
  CTASectionButton,
  CTAFeaturesGrid,
  CTAFeatureItem,
  CTAIconWrapper,
  CTAFeatureContent,
  CTAFeatureTitle,
  CTAFeatureDescription
} from '../styles/CTASection.styles';

const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
        </svg>
      ),
      title: 'Instant Savings',
      description: 'Start saving immediately with instant access to thousands of exclusive discounts and premium member perks'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'VIP Treatment',
      description: 'Experience priority access, exclusive offers, and special member-only pricing across all partner brands'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Easy Access',
      description: 'Simple membership portal with mobile app access to all your benefits, deals, and exclusive perks anytime'
    }
  ];

  return (
    <CTAContainer id="how-it-works">
      <CTAContent>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <CTATitle>Start Enjoying Exclusive Member Perks</CTATitle>
          <CTADescription>
            Join thousands of members already saving big with VIP access to premium discounts, lifestyle benefits, and exclusive deals.
          </CTADescription>
        </div>
        
        <CTAFeaturesGrid>
          {features.map((feature, index) => (
            <CTAFeatureItem key={index}>
              <CTAIconWrapper>
                {feature.icon}
              </CTAIconWrapper>
              <CTAFeatureContent>
                <CTAFeatureTitle>{feature.title}</CTAFeatureTitle>
                <CTAFeatureDescription>{feature.description}</CTAFeatureDescription>
              </CTAFeatureContent>
            </CTAFeatureItem>
          ))}
        </CTAFeaturesGrid>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <CTASectionButton onClick={handleGetStarted}>Claim Your Benefits →</CTASectionButton>
        </div>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
