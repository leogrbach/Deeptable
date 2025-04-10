
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
                <path d="M8 11H24M8 16H24M8 21H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-lg">DeepTable</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bridging the gap between Airtable and Excel for seamless data workflows.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </nav>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 DeepTable. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
