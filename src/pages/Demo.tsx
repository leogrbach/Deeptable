
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
            <p className="text-muted-foreground">See how DeepTable transforms Airtable data to Excel</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span>Download Example</span>
            </Button>
          </div>
        </div>
        
        <DemoTabs />
      </main>
    </div>
  );
};

export default Demo;
