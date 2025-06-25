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
import Login from '@/pages/Login';
import { SessionContextProvider } from '@/components/auth/SessionContextProvider';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ServiceOrderPage from '@/pages/ServiceOrderPage';

// Import client portal pages
import Orders from '@/pages/Orders';
import Tickets from '@/pages/Tickets';
import AddFunds from '@/pages/AddFunds';
import Referrals from '@/pages/Referrals';
import Invoices from '@/pages/Invoices';
import Commissions from '@/pages/Commissions';
import MultiAccountManagement from '@/pages/MultiAccountManagement';
import BuyProxies from '@/pages/BuyProxies';
import YoutubeDownloader from '@/pages/YoutubeDownloader';
import NewOrder from '@/pages/NewOrder';

// Import admin pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import ManageServices from '@/pages/admin/ManageServices';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary fallback={<div className="p-4 text-red-500">App Error - Please refresh</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <TooltipProvider>
            <Sonner />
            <BrowserRouter basename="/SocialGet/">
              <SessionContextProvider>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/login" element={<Login />} />
                  
                  {/* Service Pages */}
                  <Route path="/services/:platform/:serviceName" element={<ServicePage />} />
                  
                  {/* Service Order Pages */}
                  <Route path="/order/:platform/:serviceName" element={<ServiceOrderPage />} />
                  
                  {/* Protected Client Portal Routes */}
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/orders" 
                    element={
                      <ProtectedRoute>
                        <Orders />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/tickets" 
                    element={
                      <ProtectedRoute>
                        <Tickets />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/add-funds" 
                    element={
                      <ProtectedRoute>
                        <AddFunds />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/referrals" 
                    element={
                      <ProtectedRoute>
                        <Referrals />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/all-services" 
                    element={
                      <ProtectedRoute>
                        <Services />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/youtube-downloader" 
                    element={
                      <ProtectedRoute>
                        <YoutubeDownloader />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/invoices" 
                    element={
                      <ProtectedRoute>
                        <Invoices />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/commissions" 
                    element={
                      <ProtectedRoute>
                        <Commissions />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/multi-account-management" 
                    element={
                      <ProtectedRoute>
                        <MultiAccountManagement />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/buy-proxies" 
                    element={
                      <ProtectedRoute>
                        <BuyProxies />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/new-order" 
                    element={
                      <ProtectedRoute>
                        <NewOrder />
                      </ProtectedRoute>
                    } 
                  />

                  {/* Protected Admin Routes */}
                  <Route 
                    path="/admin/dashboard" 
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin/services" 
                    element={
                      <ProtectedRoute>
                        <ManageServices />
                      </ProtectedRoute>
                    } 
                  />
                  {/* Add more admin routes here */}

                  {/* Public Routes */}
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SessionContextProvider>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;