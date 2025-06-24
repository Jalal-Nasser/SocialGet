// ... (other imports remain the same)
import ServiceOrderPage from '@/pages/ServiceOrderPage';

const App = () => {
  return (
    // ... (other providers remain the same)
    <BrowserRouter basename="/">
      <SessionContextProvider>
        <Routes>
          {/* ... (other routes remain the same) */}
          
          {/* Service Order Page - handles ALL services dynamically */}
          <Route path="/order/:platform/:serviceName" element={<ServiceOrderPage />} />
          
          {/* ... (other routes remain the same) */}
        </Routes>
      </SessionContextProvider>
    </BrowserRouter>
    // ... (other providers remain the same)
  );
};