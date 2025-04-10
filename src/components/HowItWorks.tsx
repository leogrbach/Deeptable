
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Install the Extension",
      description: "Add AirExcel directly to your Airtable workspace from the Airtable marketplace with just a few clicks."
    },
    {
      number: "02",
      title: "Select Your Data",
      description: "Choose which tables, views, or filtered data you want to export to Excel with our intuitive interface."
    },
    {
      number: "03",
      title: "Customize Export Options",
      description: "Select which formatting elements to preserve, including formulas, cell styles, and data types."
    },
    {
      number: "04",
      title: "Generate Excel File",
      description: "Click 'Export' and receive a perfectly formatted Excel file that maintains all your Airtable structure."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Getting started with AirExcel is simple. Follow these steps to transform your Airtable data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg">Get Early Access</Button>
          <Button size="lg" variant="outline">View Documentation</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
