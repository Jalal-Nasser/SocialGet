import React from 'react';

const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525 1.151c-1.416-1.174-4.045-.158-4.045 2.309V12.4c0 1.105-.9 2-2 2s-2-.9-2-2V8.535c0-.818-.655-1.473-1.473-1.473S.5 7.717.5 8.535v3.918c0 4.995 4.005 9 9 9s9-4.005 9-9V3.362c0-1.416-2.383-2.53-3.5-1.629z" />
  </svg>
);

export default TikTokIcon;