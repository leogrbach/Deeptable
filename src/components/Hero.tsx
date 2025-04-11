
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  // Check localStorage on component mount
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(!!userEmail);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store email in localStorage to mark user as "signed up"
      localStorage.setItem('userEmail', email);
      setIsLoggedIn(true);
      
      toast({
        title: "Success!",
        description: "Thank you for joining our early access list. We'll be in touch soon!",
      });
      
      setEmail('');
      setOpen(false);
      
      // Refresh page to update header state
      window.location.reload();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Transform Airtable Data into Beautiful Excel Spreadsheets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto">
              The only Airtable extension that lets you use Excel formulas directly on your Airtable data—preserving all the powerful calculation capabilities you love.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button size="lg" className="w-full sm:w-auto" onClick={() => setOpen(true)}>
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            <Link to="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </Link>
          </div>
          
          <div className="w-full max-w-5xl mx-auto rounded-lg border border-border overflow-hidden shadow-lg bg-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-muted py-2 px-4 flex items-center border-b border-border">
              <div className="flex space-x-2">
                <div className="rounded-full h-3 w-3 bg-red-500"></div>
                <div className="rounded-full h-3 w-3 bg-yellow-500"></div>
                <div className="rounded-full h-3 w-3 bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-muted-foreground">DeepTable Extension</div>
            </div>
            <div className="p-4">
              <img 
                src="https://s.lovable.ch/OWEydXdqTkdjdFBnQkRJaHdHOWJTRkpMUFZPSDFqMW52TVk3anJZcExOWT0="
                alt="DeepTable interface mockup" 
                className="w-full h-auto rounded border border-border"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm text-muted-foreground">No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm text-muted-foreground">Use Excel formulas directly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm text-muted-foreground">Live data connection</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm text-muted-foreground">Works with all Airtable plans</span>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Early Access to DeepTable</DialogTitle>
            <DialogDescription>
              Join our early access program and be among the first to experience the power of DeepTable.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Early Access"
                )}
              </Button>
            </DialogFooter>
          </form>
          <p className="text-xs text-center text-muted-foreground mt-2">
            By signing up, you agree to our Terms of Service and Privacy Policy. Launching Q3 2025.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
