'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#548AB7] dark:text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-[#D6D3CD] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#548AB7] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#548AB7] focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#548AB7] dark:text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-[#D6D3CD] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#548AB7] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#548AB7] focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#548AB7] dark:text-white mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-[#D6D3CD] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#548AB7] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#548AB7] focus:border-transparent"
            placeholder="What's this about?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#548AB7] dark:text-white mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-[#D6D3CD] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#548AB7] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#548AB7] focus:border-transparent resize-vertical"
            placeholder="Tell me about your ideas, offers or just say hello!"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
            <p className="text-green-800 dark:text-green-200">
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
            <p className="text-red-800 dark:text-red-200">
              ❌ Sorry! Something went wrong. Please try to reach me via LinkedIn!
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#548AB7] hover:bg-[#6FA2CD] disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
