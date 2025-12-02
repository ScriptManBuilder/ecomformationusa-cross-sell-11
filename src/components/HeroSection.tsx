import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.goldleafrevenuerecovery.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    // window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Powering Growth for Smart Merchants</Tagline>
        <HeroTitle>
          Transform Declines Into Wins.
          <Highlight>Reclaim What's Yours.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Stop losing money to payment failures. Our advanced recovery platform uses AI-driven retry logic, 
          smart timing algorithms, and customer behavior analysis to salvage up to 30% of unsuccessful 
          transactions—all while maintaining a seamless buyer experience.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Access Platform →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Book Consultation
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
