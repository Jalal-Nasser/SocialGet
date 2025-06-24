import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { SessionContextProvider } from '@/components/auth/SessionContextProvider';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ErrorBoundary from '@/components/ErrorBoundary';
import { MadeWithDyad } from '@/components/made-with-dyad';

// Pages
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Orders from '@/pages/Orders';
import Tickets from '@/pages/Tickets';
import AddFunds from '@/pages/AddFunds';
import Referrals from '@/pages/Referrals';
import AllServices from '@/pages/Services'; // Renamed to avoid conflict with 'services' data
import YoutubeDownloader from '@/pages/YoutubeDownloader';
import Invoices from '@/pages/Invoices';
import Commissions from '@/pages/Commissions';
import MultiAccountManagement from '@/pages/MultiAccountManagement';
import BuyProxies from '@/pages/BuyProxies';
import NewOrder from '@/pages/NewOrder';
import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import ContactUs from '@/pages/ContactUs';
import NotFound from '@/pages/NotFound';
import ServicePage from '@/pages/ServicePage';
import ServiceOrderPage from '@/pages/ServiceOrderPage';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BrowserRouter basename="/">
          <SessionContextProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services" element={<AllServices />} />
              <Route path="/services/:platform/:serviceName" element={<ServicePage />} />
              <Route path="/order/:platform/:serviceName" element={<ServiceOrderPage />} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
              <Route path="/add-funds" element={<ProtectedRoute><AddFunds /></ProtectedRoute>} />
              <Route path="/referrals" element={<ProtectedRoute><Referrals /></ProtectedRoute>} />
              <Route path="/all-services" element={<ProtectedRoute><AllServices /></ProtectedRoute>} />
              <Route path="/youtube-downloader" element={<ProtectedRoute><YoutubeDownloader /></ProtectedRoute>} />
              <Route path="/invoices" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
              <Route path="/commissions" element={<ProtectedRoute><Commissions /></ProtectedRoute>} />
              <Route path="/multi-account-management" element={<ProtectedRoute><MultiAccountManagement /></ProtectedRoute>} />
              <Route path="/buy-proxies" element={<ProtectedRoute><BuyProxies /></ProtectedRoute>} />
              <Route path="/new-order" element={<ProtectedRoute><NewOrder /></ProtectedRoute>} />

              {/* Catch-all for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SessionContextProvider>
        </BrowserRouter>
        <Toaster />
        <MadeWithDyad />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;