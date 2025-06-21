import React from 'react';

const RedditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path d="M19.5 10.001c0 5.24-4.26 9.5-9.5 9.5s-9.5-4.26-9.5-9.5 4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5zM10 1.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5z" />
    <path d="M13.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM6.5 12.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    <path d="M10 14.5c-2.33 0-4.25-1.81-4.5-4.12l-.08-.75h9.16l-.08.75c-.25 2.31-2.17 4.12-4.5 4.12z" />
  </svg>
);

export default RedditIcon;