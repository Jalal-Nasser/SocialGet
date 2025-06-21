import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-primary-500 text-white pb-8 overflow-hidden">
      {/* Wavy top section using SVG */}
      <div className="absolute top-0 left-0 w-full h-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        // Removed transform: 'translateY(-100%)'
      }}></div>

      <div className="container mx-auto px-4 relative z-10 pt-20"> {/* Added pt-20 here to push content down */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Payment */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="text-4xl font-bold text-white mb-4">Social<span className="text-brand-secondary-blue">Get</span></Link>
            <div className="bg-white rounded-lg p-3 shadow-md flex items-center space-x-3">
              <span className="text-gray-700 text-sm font-medium">We accept</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4" />
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
              <li><Link to="#" className="hover:underline text-brand-primary-100">About Us</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Free Likes</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Rewards</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">SocialGet Reviews</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 uppercase text-brand-primary-100">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline text-brand-primary-100">Blog</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Press</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Support</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Terms of Service</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:underline text-brand-primary-100">Embed Instagram Feed</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-brand-primary-600 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-brand-primary-100">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>Netrynos LTD (HE 469713), Arch. Makariou III 1-7 MITSI 3, 1065 Nicosia, Cyprus</p>
            <p>support@socialget.com</p>
            <p>Copyright © 2024 · SocialGet</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-md flex items-center space-x-2 text-gray-800">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-green-500 fill-green-500" />
              ))}
            </div>
            <span className="font-bold text-lg">4.9</span>
            <span className="text-sm">Rated <span className="font-bold">4.9 out of 5</span> based on <span className="font-bold">722+ reviews</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;