import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingHeader from "@/components/layout/LandingHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <LandingHeader />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Button asChild>
            <a href="/" className="text-white">
              Return to Home
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;