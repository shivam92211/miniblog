// import React from 'react'

// const Layout = ({ children, className = "" }) => {
//   return (
//       <div className={`w-full h-full inline-block z-0 bg-light p-0 dark:bg-dark ${className}`}>
//          {children} 
//     </div>
//   )
// }

// export default Layout

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-0 dark:bg-dark ${className}`}>
      {children} 
    </div>
  );
};

export default Layout;
