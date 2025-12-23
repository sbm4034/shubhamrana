import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Shubham Rana. All rights reserved.
          </p>

          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> and{" "}
            <span className="gradient-text font-medium">passion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
