import React, { useState } from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast'; // Import toast utilities

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      showError('Please fill in all fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      showSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      showError('Failed to send message. Please try again.');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send us a message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <Input type="text" id="name" placeholder="Your Name" className="w-full" value={formData.name} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <Input type="email" id="email" placeholder="your@example.com" className="w-full" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <Input type="text" id="subject" placeholder="Subject of your inquiry" className="w-full" value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="w-full" value={formData.message} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <Button type="submit" className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-brand-primary-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Email Us</h3>
                  <p className="text-gray-700 dark:text-gray-300">support@socialget.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-brand-primary-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Call Us</h3>
                  <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Our Office</h3>
                  <p className="text-gray-700 dark:text-gray-300">Netrynos LTD (HE 469713)</p>
                  <p className="text-gray-700 dark:text-gray-300">Arch. Makariou III 1-7 MITSI 3</p>
                  <p className="text-gray-700 dark:text-gray-300">1065 Nicosia, Cyprus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;