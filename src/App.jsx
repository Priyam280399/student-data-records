import React, { useState, useEffect } from 'react';
import DesktopView from './components/DesktopView';
import MobileView from './components/MobileView';

const App = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 400);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Management Page</h1>
      {isMobile ? (
        <MobileView/>
      ) : (
        <DesktopView/>
      )}

    </div>
  );
};

export default App;
