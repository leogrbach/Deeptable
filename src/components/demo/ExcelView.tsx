
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExcelView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Excel Formula Integration</CardTitle>
          <CardDescription>
            Use familiar Excel functions like XLOOKUP, COUNTIFS, and SUMIFS directly on your Airtable data
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
              <div className="mx-auto text-xs text-muted-foreground">DeepTable Excel Interface</div>
            </div>
            <div className="p-4 bg-white">
              <div className="border rounded overflow-hidden shadow-sm">
                <div className="bg-[#217346] text-white px-4 py-1 text-sm">
                  Sales Analysis.xlsx - DeepTable
                </div>
                <div className="bg-[#f3f2f1] border-b px-4 py-1 flex items-center space-x-4 text-xs">
                  <span>File</span>
                  <span>Home</span>
                  <span>Insert</span>
                  <span>Formulas</span>
                  <span>Data</span>
                  <span>View</span>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Formula Examples:</div>
                    <div className="space-y-2 bg-gray-50 p-3 rounded border text-sm">
                      <div><span className="font-mono text-blue-600">=XLOOKUP("P003", SalesData[Product ID], SalesData[Price])</span> → Returns price for Product ID P003</div>
                      <div><span className="font-mono text-blue-600">=COUNTIFS(SalesData[Category], "Electronics")</span> → Counts products in Electronics category</div>
                      <div><span className="font-mono text-blue-600">=SUMIFS(SalesData[Price], SalesData[Category], "Electronics")</span> → Sum of prices for Electronics</div>
                      <div><span className="font-mono text-blue-600">=AVERAGEIF(SalesData[Stock], ">50")</span> → Average stock for items with more than 50 units</div>
                    </div>
                  </div>
                  
                  <table className="w-full border">
                    <thead>
                      <tr className="bg-[#f3f2f1]">
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Category</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Items Count</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Total Value</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 border-r">Avg Price</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Avg Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 border-r">Electronics</td>
                        <td className="px-4 py-2 border-r text-right">3</td>
                        <td className="px-4 py-2 border-r text-right">$459.97</td>
                        <td className="px-4 py-2 border-r text-right">$153.32</td>
                        <td className="px-4 py-2 text-right">35</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 border-r">Fitness</td>
                        <td className="px-4 py-2 border-r text-right">1</td>
                        <td className="px-4 py-2 border-r text-right">$35.99</td>
                        <td className="px-4 py-2 border-r text-right">$35.99</td>
                        <td className="px-4 py-2 text-right">120</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-r">Kitchen</td>
                        <td className="px-4 py-2 border-r text-right">1</td>
                        <td className="px-4 py-2 border-r text-right">$89.99</td>
                        <td className="px-4 py-2 border-r text-right">$89.99</td>
                        <td className="px-4 py-2 text-right">15</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    <div>Formula for "Items Count" cell: <span className="font-mono text-blue-600">=COUNTIFS(SalesData[Category], A2)</span></div>
                    <div>Formula for "Total Value" cell: <span className="font-mono text-blue-600">=SUMIFS(SalesData[Price], SalesData[Category], A2)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-muted-foreground">
        <p>DeepTable brings Excel's powerful formula capabilities to your Airtable data, enabling advanced analysis without requiring data exports or manual updates.</p>
      </div>
    </div>
  );
};

export default ExcelView;
