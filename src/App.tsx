import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster as Sonner } from 'sonner';

// Import components
import ErrorBoundary from '@/components/ErrorBoundary';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import ContactUs from '@/pages/ContactUs';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import NotFound from '@/pages/NotFound';
import ServicePage from '@/pages/ServicePage';
import Services from '@/pages/Services';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary fallback={<div className="p-4 text-red-500">App Error - Please refresh</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <TooltipProvider>
            <Sonner />
            <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/services/:platform/:serviceName" element={<ServicePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;