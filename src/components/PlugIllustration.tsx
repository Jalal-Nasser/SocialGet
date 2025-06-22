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
      {/* Removed the placeholder for stars */}
    </div>
  );
};

export default PlugIllustration;