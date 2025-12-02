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
      question: 'What makes your recovery system effective?',
      answer: 'We detect failed transactions instantly and trigger automated retry workflows with intelligent timing, optimal gateway routing, and smart customer messaging. The entire process runs on autopilot without manual intervention.'
    },
    {
      question: 'How quickly can we get started?',
      answer: 'Most clients are operational in 24 hours or less. Our streamlined setup integrates seamlessly with major processors including Stripe, Square, PayPal, and Authorize.net—minimal technical resources required.'
    },
    {
      question: 'What recovery rates should we expect?',
      answer: 'Clients typically recover 15-30% of failed transactions. Results depend on industry vertical, average order value, and decline types. Our real-time dashboards let you track performance continuously.'
    },
    {
      question: 'How do you protect sensitive information?',
      answer: 'Absolutely. We hold PCI DSS Level 1 and SOC 2 Type II certifications. All data flows through bank-level encryption, and we never store complete card numbers. Customer security is our top priority.'
    },
    {
      question: 'Which decline types can be recovered?',
      answer: 'Our system handles insufficient funds, expired cards, incorrect details, temporary bank issues, and more. Smart algorithms identify recoverable failures and apply the most effective recovery strategy.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We operate on performance-based pricing—you only pay when we successfully recover a failed payment. No setup fees, no monthly charges. We succeed when you succeed, ensuring complete alignment.'
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
          Key information about our revenue recovery solution and how it works
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
