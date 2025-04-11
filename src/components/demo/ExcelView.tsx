
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExcelView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Excel Output</CardTitle>
          <CardDescription>
            DeepTable seamlessly converts your Airtable data to fully-functional Excel spreadsheets
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
              <div className="mx-auto text-xs text-muted-foreground">Microsoft Excel</div>
            </div>
            <div className="p-4 bg-white">
              <div className="border rounded overflow-hidden shadow-sm">
                <div className="bg-[#217346] text-white px-4 py-1 text-sm">
                  Project Tracking.xlsx - Excel
                </div>
                <div className="bg-[#f3f2f1] border-b px-4 py-1 flex items-center space-x-4 text-xs">
                  <span>File</span>
                  <span>Home</span>
                  <span>Insert</span>
                  <span>Page Layout</span>
                  <span>Formulas</span>
                  <span>Data</span>
                  <span>Review</span>
                  <span>View</span>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#f3f2f1] border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Project</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Status</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Budget</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Progress</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Remaining</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-blue-50">
                      <td className="px-4 py-2 border-r">Website Redesign</td>
                      <td className="px-4 py-2 border-r">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-center text-xs">
                          In Progress
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r text-right">$12,500.00</td>
                      <td className="px-4 py-2 border-r">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r text-right">$4,375.00</td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50">
                      <td className="px-4 py-2 border-r">Marketing Campaign</td>
                      <td className="px-4 py-2 border-r">
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-center text-xs">
                          Planning
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r text-right">$5,000.00</td>
                      <td className="px-4 py-2 border-r">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r text-right">$4,500.00</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-2 border-r">Product Launch</td>
                      <td className="px-4 py-2 border-r">
                        <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-center text-xs">
                          On Hold
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r text-right">$25,000.00</td>
                      <td className="px-4 py-2 border-r">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </td>
                      <td className="px-4 py-2 border-r text-right">$17,500.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-muted-foreground">
        <p>DeepTable preserves all formatting, adds Excel formulas, and enhances your data for professional spreadsheets.</p>
      </div>
    </div>
  );
};

export default ExcelView;
