
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ComparisonView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Real-World Use Cases</CardTitle>
          <CardDescription>
            See how DeepTable bridges the gap between Airtable's collaborative database and Excel's calculation power
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-lg font-medium">Without DeepTable</div>
              <div className="rounded-md border overflow-hidden p-4">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">❌</span>
                    <div>
                      <p className="font-medium">Manual Export/Import</p>
                      <p className="text-sm text-muted-foreground">Export Airtable data to CSV, then import to Excel, repeating whenever data changes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">❌</span>
                    <div>
                      <p className="font-medium">Limited Formula Support</p>
                      <p className="text-sm text-muted-foreground">Airtable formulas lack many Excel functions like XLOOKUP, nested IFs, and array formulas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">❌</span>
                    <div>
                      <p className="font-medium">Data Synchronization Issues</p>
                      <p className="text-sm text-muted-foreground">Reports quickly become outdated as Airtable data changes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">❌</span>
                    <div>
                      <p className="font-medium">Complex Custom Development</p>
                      <p className="text-sm text-muted-foreground">Requires API development and scripting to maintain live connections</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-lg font-medium">With DeepTable</div>
              <div className="rounded-md border overflow-hidden p-4">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <div>
                      <p className="font-medium">Live Data Connection</p>
                      <p className="text-sm text-muted-foreground">Direct, real-time access to Airtable data in an Excel-like interface</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <div>
                      <p className="font-medium">Full Excel Formula Library</p>
                      <p className="text-sm text-muted-foreground">Access to XLOOKUP, SUMIFS, INDEX/MATCH, and all Excel functions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <div>
                      <p className="font-medium">Automatic Synchronization</p>
                      <p className="text-sm text-muted-foreground">Formulas automatically update when Airtable data changes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <div>
                      <p className="font-medium">No-Code Solution</p>
                      <p className="text-sm text-muted-foreground">Simple setup with no API knowledge or development required</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium">Popular Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Financial Reporting</h4>
                <p className="text-sm text-muted-foreground">Create complex financial reports with advanced Excel formulas while keeping data in Airtable for team collaboration.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Inventory Management</h4>
                <p className="text-sm text-muted-foreground">Use XLOOKUP and conditional formulas to create dynamic inventory reports from your Airtable inventory system.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Project Forecasting</h4>
                <p className="text-sm text-muted-foreground">Build sophisticated forecasting models with Excel while pulling live project data from Airtable workspaces.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-muted p-6 rounded-lg text-center">
        <p className="font-medium mb-2 text-lg">Ready to bring Excel power to your Airtable data?</p>
        <p className="text-muted-foreground mb-4">DeepTable gives you the best of both worlds - Airtable's collaboration with Excel's calculation power.</p>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded">Start Free Trial</button>
      </div>
    </div>
  );
};

export default ComparisonView;
