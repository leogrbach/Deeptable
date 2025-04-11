
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AirtableView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Airtable Source Data</CardTitle>
          <CardDescription>
            This is how your data appears in Airtable before using DeepTable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <div className="bg-muted py-2 px-4 flex items-center border-b">
              <div className="flex space-x-2">
                <div className="rounded-full h-3 w-3 bg-red-500"></div>
                <div className="rounded-full h-3 w-3 bg-yellow-500"></div>
                <div className="rounded-full h-3 w-3 bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-muted-foreground">Airtable</div>
            </div>
            <div className="p-4 bg-white">
              <div className="border rounded overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Project</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Status</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Budget</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2">Website Redesign</td>
                      <td className="px-4 py-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          In Progress
                        </span>
                      </td>
                      <td className="px-4 py-2">$12,500</td>
                      <td className="px-4 py-2">65%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Marketing Campaign</td>
                      <td className="px-4 py-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Planning
                        </span>
                      </td>
                      <td className="px-4 py-2">$5,000</td>
                      <td className="px-4 py-2">10%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Product Launch</td>
                      <td className="px-4 py-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          On Hold
                        </span>
                      </td>
                      <td className="px-4 py-2">$25,000</td>
                      <td className="px-4 py-2">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-muted-foreground">
        <p>Airtable is great for real-time collaboration but exporting to Excel often loses formatting and formula functionality.</p>
      </div>
    </div>
  );
};

export default AirtableView;
