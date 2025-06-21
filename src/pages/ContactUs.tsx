import React from 'react';
import LandingHeader from '@/components/layout/LandingHeader';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to us through the form below or via our contact details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <Input type="text" id="name" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <Input type="email" id="email" placeholder="your@example.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <Input type="text" id="subject" placeholder="Subject of your inquiry" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
                Send Message
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