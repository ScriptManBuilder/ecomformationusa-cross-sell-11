import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: 'Smart Automation',
      description: 'AI-driven recovery workflows capture lost transactions and rescue abandoned purchases—boosting your revenue while saving valuable time.'
    },
    {
      title: 'Actionable Analytics',
      description: 'Comprehensive reporting reveals decline patterns and customer trends, empowering you to optimize payment flow and reduce future failures.'
    },
    {
      title: 'Effortless Setup',
      description: 'Rapid integration with your e-commerce stack requires zero coding. Simply connect and start recovering revenue immediately.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Ready to reclaim what's yours?</ContactTitle>
        <ContactDescription>
          Connect with us to discover how our platform rescues failed transactions and drives revenue growth.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Get In Touch</h3>
            {showSuccess && (
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#10b981', 
                color: 'white', 
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Thanks! Your message was delivered. We'll respond shortly.
              </div>
            )}
            <p>Complete the form to connect with our revenue recovery team.</p>
            
            {/* Hidden field with your Web3Forms access key */}
            <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_KEY} />
            
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                placeholder="Your name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="your.email@company.com" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Share details about your business and revenue recovery goals..." 
                rows={5}
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoTitle style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact Information</InfoTitle>
              <InfoDescription>
                <strong>Email Support:</strong>
                <br />
                <span style={{ 
                  color: '#0066cc',
                  userSelect: 'text'
                }}>
                  {process.env.REACT_APP_EMAIL_SUPPORT}
                </span>
              </InfoDescription>
              <InfoDescription style={{ marginTop: '1rem' }}>
                <strong>Customer Service:</strong>
                <br />
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;