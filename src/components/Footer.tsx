const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {currentYear} Shubham Rana. All rights reserved.
        </p>
        
        <p className="font-body text-sm text-muted-foreground">
          Built with passion & precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
