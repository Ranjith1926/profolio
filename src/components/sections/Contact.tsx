'use client';

import React, { useState, FormEvent } from 'react';
import { Section, SectionHeader, Input, Textarea, Button } from '@/components/ui';
import { useScrollAnimation } from '@/hooks';
import { FormData } from '@/types';

export const Contact: React.FC = () => {
  const { isVisible, ref } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:s.ranjithkumaroffl@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="contact" background="gray">
      <SectionHeader
        label="Let's Connect"
        title="Get In Touch"
        description="Have a project in mind? Let's talk!"
      />

      <div ref={ref} className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Textarea
            label="Message"
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
};
