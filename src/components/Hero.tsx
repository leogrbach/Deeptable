
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Transform Airtable Data into Beautiful Excel Spreadsheets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto">
              The only Airtable extension that exports your data with full Excel fidelity—preserving formulas, formatting, and structure in one click.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="w-full sm:w-auto">
              Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
          
          <div className="w-full max-w-5xl mx-auto rounded-lg border border-border overflow-hidden shadow-lg bg-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-muted py-2 px-4 flex items-center border-b border-border">
              <div className="flex space-x-2">
                <div className="rounded-full h-3 w-3 bg-red-500"></div>
                <div className="rounded-full h-3 w-3 bg-yellow-500"></div>
                <div className="rounded-full h-3 w-3 bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-muted-foreground">Airtable Extension</div>
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
              <span className="text-sm text-muted-foreground">Preserves all formatting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm text-muted-foreground">One-click export</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-sm text-muted-foreground">Works with all Airtable plans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
