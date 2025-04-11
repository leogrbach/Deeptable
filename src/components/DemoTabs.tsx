
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AirtableView from '@/components/demo/AirtableView';
import ExcelView from '@/components/demo/ExcelView';
import ComparisonView from '@/components/demo/ComparisonView';

const DemoTabs = () => {
  return (
    <Tabs defaultValue="airtable" className="w-full">
      <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
        <TabsTrigger value="airtable">Data Source (Airtable)</TabsTrigger>
        <TabsTrigger value="excel">Excel Formula Integration</TabsTrigger>
        <TabsTrigger value="comparison">Live Use Cases</TabsTrigger>
      </TabsList>
      
      <TabsContent value="airtable" className="mt-0">
        <AirtableView />
      </TabsContent>
      
      <TabsContent value="excel" className="mt-0">
        <ExcelView />
      </TabsContent>
      
      <TabsContent value="comparison" className="mt-0">
        <ComparisonView />
      </TabsContent>
    </Tabs>
  );
};

export default DemoTabs;
