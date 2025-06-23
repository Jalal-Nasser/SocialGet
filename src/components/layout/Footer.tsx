import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import GithubOngoingProject from '@/assets/github-on-going-project.png'; // Import the new image
import FooterLogo from '@/assets/footer-logo.png'; // Import the new footer logo
import { useTheme } from 'next-themes'; // Import useTheme

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Define the fill color for the SVG based on the theme
  // For dark mode, use the exact background color #111826 (URL-encoded)
  const svgFillColor = isDarkMode ? '%23111826' : '%23ffffff'; 

  return (
    <footer className="relative bg-brand-primary-500 text-white pb-8 overflow-hidden">
      {/* Wavy top section using SVG */}
      <div className="absolute top-0 left-0 w-full h-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='${svgFillColor}' fill-opacity='1' d='M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About Us Demo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img src={FooterLogo} alt="SocialGet Logo" className="h-10 mb-4" />
            </Link>
            
            {/* About Us Demo Section */}
            <div className="mb-6 max-w-xs">
              <p className="text-sm text-brand-primary-100">
                SocialGet helps individuals and businesses boost their social media presence with reliable, high-quality services.
              </p>
            </div>

            {/* We Accept Section */}
            <div className="bg-white rounded-lg p-3 shadow-md flex items-center space-x-3">
              <span className="text-gray-700 text-sm font-medium">We accept</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            </div>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase text-brand-primary-100">Products</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline text-brand-primary-100">Buy Likes</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Buy Views</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Buy Followers</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Buy Automatic Likes</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Buy Automatic Views</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase text-brand-primary-100">Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-brand-primary-100">Home</Link></li>
              <li><Link to="/login" className="hover:underline text-brand-primary-100">Log in</Link></li>
              <li><Link to="/about-us" className="hover:underline text-brand-primary-100">About Us</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Free Likes</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Rewards</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">SocialGet Reviews</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase text-brand-primary-100">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:underline text-brand-primary-100">Blog</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Press</Link></li>
              <li><Link to="/contact" className="hover:underline text-brand-primary-100">Support</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline text-brand-primary-100">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline text-brand-primary-100">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Embed Instagram Feed</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-brand-primary-600 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-brand-primary-100">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>InstalliFy Software LTD, EEDA3244 AL-Khobar 34626, Saudi Arabia</p>
            <p>Copyright © 2025 · SocialGet</p>
            <p className="flex items-center justify-center md:justify-start">
              Designed & Programmed by:{" "}
              <a href="https://github.com/Jalal-Nasser" target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-primary-100 flex items-center ml-1">
                Jalal Nasser <Github className="h-4 w-4 ml-1" />
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a 
              href="https://github.com/Jalal-Nasser/SocialGet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transition-all duration-300 rounded-lg overflow-hidden group hover:scale-105"
            >
              <img 
                src={GithubOngoingProject} 
                alt="GitHub On Going Project" 
                className="w-[300px] group-hover:drop-shadow-blue-glow transition-all duration-300" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;