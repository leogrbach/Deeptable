
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AirtableView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Connected Airtable Data Source</CardTitle>
          <CardDescription>
            Your live Airtable data is securely connected and ready to use with Excel formulas
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
              <div className="mx-auto text-xs text-muted-foreground">Airtable: SalesData</div>
            </div>
            <div className="p-4 bg-white">
              <div className="border rounded overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>P001</TableCell>
                      <TableCell>Wireless Earbuds</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell>$129.99</TableCell>
                      <TableCell>45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>P002</TableCell>
                      <TableCell>Smart Watch</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell>$249.99</TableCell>
                      <TableCell>28</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>P003</TableCell>
                      <TableCell>Yoga Mat</TableCell>
                      <TableCell>Fitness</TableCell>
                      <TableCell>$35.99</TableCell>
                      <TableCell>120</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>P004</TableCell>
                      <TableCell>Coffee Maker</TableCell>
                      <TableCell>Kitchen</TableCell>
                      <TableCell>$89.99</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>P005</TableCell>
                      <TableCell>Bluetooth Speaker</TableCell>
                      <TableCell>Electronics</TableCell>
                      <TableCell>$79.99</TableCell>
                      <TableCell>32</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-muted-foreground">
        <p>DeepTable maintains a secure, read-only connection to your Airtable bases, allowing you to use this data with Excel formulas.</p>
      </div>
    </div>
  );
};

export default AirtableView;
