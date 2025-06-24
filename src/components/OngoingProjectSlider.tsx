import React from 'react';
import { Github } from 'lucide-react';

const OngoingProjectSlider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-primary-600 text-white py-2 text-sm">
      <div className="flex items-center justify-center whitespace-nowrap animate-marquee">
        <span className="flex items-center mx-8">
          <Github className="h-4 w-4 mr-2" />
          Ongoing GitHub Project: <a href="https://github.com/Jalal-Nasser/SocialGet" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-brand-primary-100">github.com/Jalal-Nasser/SocialGet</a>
        </span>
        <span className="flex items-center mx-8">
          <Github className="h-4 w-4 mr-2" />
          Ongoing GitHub Project: <a href="https://github.com/Jalal-Nasser/SocialGet" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-brand-primary-100">github.com/Jalal-Nasser/SocialGet</a>
        </span>
        <span className="flex items-center mx-8">
          <Github className="h-4 w-4 mr-2" />
          Ongoing GitHub Project: <a href="https://github.com/Jalal-Nasser/SocialGet" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-brand-primary-100">github.com/Jalal-Nasser/SocialGet</a>
        </span>
      </div>
    </div>
  );
};

export default OngoingProjectSlider;