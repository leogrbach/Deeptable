
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Transform Your Workflow?</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Join our early access program and be among the first to experience the power of AirExcel.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1"
          />
          <Button type="submit">Get Early Access</Button>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
          <p className="mt-4">🚀 Launching Q2 2023 - Limited spots available!</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
