
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DashboardHeader from '@/components/DashboardHeader';
import DemoTabs from '@/components/DemoTabs';
import { Download, Share } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">DeepTable Demo</h1>
            <p className="text-muted-foreground">Combine the flexibility of Excel with your Airtable data</p>
            <p className="text-muted-foreground mt-2">
              Use powerful Excel functions like XLOOKUP, COUNTIFS, and more directly on your Airtable data
              without exporting or manual updates.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span>Try Free</span>
            </Button>
          </div>
        </div>
        
        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-medium mb-2">How DeepTable Works</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Connect your Airtable workspace to DeepTable</li>
            <li>Access your Airtable data through Excel-like interface with full formula support</li>
            <li>Create complex calculations, reports, and analytics using Excel formulas</li>
            <li>Changes in Airtable are automatically reflected in your Excel formulas</li>
          </ul>
        </div>
        
        <DemoTabs />
      </main>
    </div>
  );
};

export default Demo;
