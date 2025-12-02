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
      title: 'Success Rate',
      description: 'Our automated platform consistently recovers 30% of failed transactions through intelligent retry strategies and optimized timing',
      value: '30%',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    },
    {
      title: 'Customer Churn',
      description: 'Seven out of ten shoppers never return after experiencing a payment decline—making rapid recovery essential for retention',
      value: '71%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Decline Impact',
      description: 'Nearly one in five transactions fail at checkout—costing merchants billions in recoverable revenue each year worldwide',
      value: '18%',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Annual Loss',
      description: 'E-commerce businesses lose nearly half a trillion dollars to preventable payment failures that could be recovered with smart technology',
      value: '$460B',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>The Price of Inaction</StatsSectionTitle>
        <StatsSectionDescription>
          Every failed payment represents lost profit. Learn how our technology converts decline scenarios into revenue opportunities.
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
