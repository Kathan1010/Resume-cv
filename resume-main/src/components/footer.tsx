import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 py-6 no-print">
      <div className="container mx-auto flex flex-col items-center justify-center text-center text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>&copy; {currentYear} John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
