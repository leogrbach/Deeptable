
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
      
      toast({
        title: "Success!",
        description: "Thank you for joining our early access list. We'll be in touch soon!",
      });
      
      setEmail('');
      
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
    <section className="py-20 bg-primary/5 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Transform Your Workflow?</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Join our early access program and be among the first to experience the power of DeepTable.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1"
            value={email}
            onChange={handleEmailChange}
            disabled={isSubmitting}
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
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
        </form>
        
        <div className="text-center mt-4">
          <Link to="/dashboard">
            <Button variant="outline">Try Dashboard Demo</Button>
          </Link>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
          <p className="mt-4">🚀 Launching Q3 2025 - Limited spots available!</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
