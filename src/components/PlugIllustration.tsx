import React from 'react';

const PlugIllustration: React.FC = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
      {/* Placeholder for the plug illustration */}
      <img
        src="https://via.placeholder.com/200x200?text=Illustration"
        alt="Abstract illustration"
        className="w-full h-full object-contain"
      />
      {/* Placeholder for stars */}
      <div className="absolute top-8 right-8 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-brand-primary-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.001 9.306l8.332-1.151L12 .587z"/>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default PlugIllustration;