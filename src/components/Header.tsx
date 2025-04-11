
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check localStorage on component mount to see if user is logged in
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(!!userEmail);
  }, []);
  
  const handleSignOut = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
  };

  return (
    <header className="py-4 border-b border-border">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
            <path d="M8 11H24M8 16H24M8 21H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-xl">DeepTable</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#use-cases" className="text-sm font-medium hover:text-primary transition-colors">Use Cases</a>
          <Link to="/demo" className="text-sm font-medium hover:text-primary transition-colors">Demo</Link>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <div className="text-sm text-muted-foreground hidden md:block">
                <span>Welcome back, </span>
                <span className="font-medium text-foreground">User</span>
              </div>
              
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
              </Button>
              
              <Button variant="outline" size="sm" className="gap-2" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="hidden sm:flex"
                onClick={() => {
                  localStorage.setItem('userEmail', 'user@example.com');
                  setIsLoggedIn(true);
                }}
              >
                Log In
              </Button>
              <Link to="/dashboard">
                <Button>Try Dashboard</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
