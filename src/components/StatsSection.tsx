import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Maximum Savings',
      description: 'Members save up to 70% on premium brands, travel, dining, and entertainment with exclusive VIP pricing and special member-only offers',
      value: '70%',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    },
    {
      title: 'Brand Partners',
      description: 'Access thousands of exclusive deals across retail, travel, dining, wellness, and entertainment from trusted premium brand partners',
      value: '5,000+',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Annual Value',
      description: 'Average member savings per year through exclusive discounts, perks, and VIP benefits across all lifestyle categories',
      value: '$3,200',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Members love their VIP benefits and exclusive perks, consistently rating their experience as excellent with ongoing engagement',
      value: '96%',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Member Savings & Benefits</StatsSectionTitle>
        <StatsSectionDescription>
          Discover how our members save thousands annually with exclusive perks, discounts, and VIP access to premium lifestyle experiences.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
