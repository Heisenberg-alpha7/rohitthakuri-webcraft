const Footer = () => (
  <footer className="py-8 bg-foreground">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-background/70">
        © {new Date().getFullYear()} Rohit Thakuri. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
