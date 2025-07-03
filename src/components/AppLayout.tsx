import React from 'react';
import SinglePageLayout from './SinglePageLayout';

const AppLayout: React.FC = () => {
  return (
    <>
      <SinglePageLayout />
      <footer className="bg-green-900 text-white text-center py-4 mt-8 text-xs md:text-sm">
        <div>Borno State Agency for the Great Green Wall</div>
        <div>designed and developed by Shedrack Bata Joel &copy; {new Date().getFullYear()} all rights reserved</div>
      </footer>
    </>
  );
};

export default AppLayout;