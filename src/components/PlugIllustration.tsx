import React from 'react';
import SocialGetIllustration from '@/assets/SocialGet.png'; // Import the actual illustration image

const PlugIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-auto flex items-center justify-center">
      <img
        src={SocialGetIllustration}
        alt="SocialGet Illustration"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default PlugIllustration;