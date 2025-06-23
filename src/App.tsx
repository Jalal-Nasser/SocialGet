// ... (keep existing imports)
import Services from "./pages/Services";

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
                {/* ... (keep other routes) */}
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