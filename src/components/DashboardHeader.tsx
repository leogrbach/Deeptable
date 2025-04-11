
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

// In a real app, this would be managed by an auth provider
const DashboardHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check localStorage on component mount to see if user is logged in
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(!!userEmail);
  }, []);
  
  const handleSignOut = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <header className="py-4 border-b border-border bg-card">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
            <path d="M8 11H24M8 16H24M8 21H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-bold text-xl">DeepTable</span>
        </Link>
        
        <div className="flex items-center gap-4">
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
              <Link to="/dashboard">
                <Button variant="outline" size="sm">Try Dashboard</Button>
              </Link>
              <Button 
                size="sm" 
                onClick={() => {
                  localStorage.setItem('userEmail', 'user@example.com');
                  setIsLoggedIn(true);
                }}
              >
                Sign In
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
