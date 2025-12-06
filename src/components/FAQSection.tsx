import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What benefits do members receive?',
      answer: 'Members enjoy exclusive access to thousands of premium discounts across shopping, travel, dining, entertainment, wellness, and lifestyle services. Save up to 70% at top brands with VIP pricing, priority reservations, and special member-only offers.'
    },
    {
      question: 'How quickly can I start using my perks?',
      answer: 'Instantly! Once you become a member, you get immediate access to all exclusive benefits, discounts, and VIP perks through our easy-to-use member portal and mobile app. Start saving right away.'
    },
    {
      question: 'How much can I save with membership?',
      answer: 'Members typically save $3,200+ annually through exclusive discounts and perks. Actual savings vary based on usage, but with thousands of partners offering up to 70% off, your membership pays for itself many times over.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Absolutely. We use bank-level encryption and security protocols to protect all member data. Your privacy is our priority, and we never share your information with third parties without your consent.'
    },
    {
      question: 'What categories of perks are included?',
      answer: 'Our membership covers all lifestyle areas: retail shopping, travel (hotels, flights, car rentals), dining and restaurants, entertainment (movies, concerts, events), wellness (fitness, spa), and everyday services. New partners and deals added regularly.'
    },
    {
      question: 'How does membership pricing work?',
      answer: 'We offer flexible membership plans with simple, transparent pricing. No hidden fees or surprise charges. Many members recoup their membership cost with just one or two uses of their exclusive perks and discounts.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Common Questions Answered</FAQTitle>
        <FAQDescription>
          Everything you need to know about your VIP membership benefits and exclusive perks
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
