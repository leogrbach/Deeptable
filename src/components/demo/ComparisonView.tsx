
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ComparisonView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Side by Side Comparison</CardTitle>
          <CardDescription>
            See the difference between standard Airtable exports and DeepTable enhanced exports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-lg font-medium text-center mb-4">Standard Export</div>
              <div className="rounded-md border overflow-hidden">
                <div className="bg-muted py-2 px-4 text-center text-sm border-b">CSV Export</div>
                <div className="p-4 bg-white">
                  <pre className="text-xs overflow-auto p-2 bg-gray-50 rounded border">
                    {`Project,Status,Budget,Progress
Website Redesign,In Progress,$12500,65%
Marketing Campaign,Planning,$5000,10%
Product Launch,On Hold,$25000,30%`}
                  </pre>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Loses all formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>No formulas preserved</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Basic text only</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>No visual elements</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <div className="text-lg font-medium text-center mb-4">DeepTable Export</div>
              <div className="rounded-md border overflow-hidden">
                <div className="bg-muted py-2 px-4 text-center text-sm border-b">Excel Export</div>
                <div className="p-4 bg-white">
                  <div className="rounded border overflow-hidden shadow-sm">
                    <div className="bg-[#217346] text-white px-2 py-1 text-xs">Excel</div>
                    <table className="w-full text-xs">
                      <tbody>
                        <tr className="bg-gray-50 border-b">
                          <td className="px-2 py-1 border-r font-medium">Project</td>
                          <td className="px-2 py-1 border-r font-medium">Status</td>
                          <td className="px-2 py-1 border-r font-medium">Budget</td>
                          <td className="px-2 py-1 border-r font-medium">Progress</td>
                          <td className="px-2 py-1 font-medium">Remaining</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-1 border-r">Website Redesign</td>
                          <td className="px-2 py-1 border-r">
                            <span className="bg-green-100 text-green-800 px-1 rounded text-center block text-xs">In Progress</span>
                          </td>
                          <td className="px-2 py-1 border-r text-right">$12,500.00</td>
                          <td className="px-2 py-1 border-r">65%</td>
                          <td className="px-2 py-1 text-right text-blue-600">$4,375.00</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1 border-r" colSpan={4}>
                            <span className="text-gray-500 italic">Formula cells show calculated values</span>
                          </td>
                          <td className="px-2 py-1 text-xs text-gray-500">
                            =B2*(1-D2)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Preserves all formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Excel formulas work perfectly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Cell styles and number formats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Charts and visual elements</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-muted p-4 rounded-lg text-center">
        <p className="font-medium mb-2">Why choose DeepTable for your Airtable exports?</p>
        <p className="text-muted-foreground">DeepTable bridges the gap between Airtable's collaborative features and Excel's powerful data analysis capabilities.</p>
      </div>
    </div>
  );
};

export default ComparisonView;
