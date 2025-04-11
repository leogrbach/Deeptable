
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileSpreadsheet, Settings, Download, Share } from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [formulas, setFormulas] = useState({
    b2: "=COUNTIFS(SalesData[Category], \"Electronics\")",
    c2: "=SUMIFS(SalesData[Price], SalesData[Category], \"Electronics\")",
    d2: "=AVERAGEIF(SalesData[Stock], \"&gt;30\", SalesData[Stock])",
    b3: "=COUNTIFS(SalesData[Category], \"Fitness\")",
    c3: "=SUMIFS(SalesData[Price], SalesData[Category], \"Fitness\")",
    d3: "=AVERAGEIF(SalesData[Category], \"Fitness\", SalesData[Stock])",
    b4: "=COUNTIFS(SalesData[Category], \"Kitchen\")",
    c4: "=SUMIFS(SalesData[Price], SalesData[Category], \"Kitchen\")",
    d4: "=AVERAGEIF(SalesData[Category], \"Kitchen\", SalesData[Stock])"
  });
  
  const [activeCell, setActiveCell] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const { toast } = useToast();
  
  const handleCellClick = (cellId: string) => {
    setActiveCell(cellId);
    setEditValue(formulas[cellId as keyof typeof formulas] || '');
  };
  
  const handleFormulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };
  
  const handleFormulaBlur = () => {
    if (activeCell) {
      setFormulas(prev => ({
        ...prev,
        [activeCell]: editValue
      }));
      setActiveCell(null);
    }
  };
  
  const handleFormulaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFormulaBlur();
    }
  };
  
  const handleExport = () => {
    toast({
      title: "Spreadsheet Exported",
      description: "Your Excel file has been generated and downloaded.",
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Spreadsheet Shared",
      description: "A shareable link has been copied to your clipboard.",
    });
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">DeepTable Dashboard</h1>
            <p className="text-muted-foreground">Create your Excel-like reports with live Airtable data</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
              <Share className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button size="sm" className="gap-2" onClick={handleExport}>
              <Download className="h-4 w-4" />
              <span>Export to Excel</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Your DeepTable Spreadsheet</CardTitle>
              <CardDescription>
                Edit formulas directly in the cells to analyze your Airtable data
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
                  <div className="mx-auto text-xs text-muted-foreground">Sales Analysis.xlsx</div>
                </div>
                
                {activeCell && (
                  <div className="p-2 bg-muted border-b">
                    <Input 
                      value={editValue}
                      onChange={handleFormulaChange}
                      onBlur={handleFormulaBlur}
                      onKeyDown={handleFormulaKeyDown}
                      placeholder="Enter formula..."
                      className="font-mono text-sm"
                      autoFocus
                    />
                  </div>
                )}
                
                <div className="p-0 bg-white">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-medium w-1/4">Category</TableHead>
                        <TableHead className="font-medium w-1/4">Items Count</TableHead>
                        <TableHead className="font-medium w-1/4">Total Value</TableHead>
                        <TableHead className="font-medium w-1/4">Avg Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Electronics</TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'b2' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('b2')}
                        >
                          3
                        </TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'c2' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('c2')}
                        >
                          $459.97
                        </TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'd2' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('d2')}
                        >
                          35
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fitness</TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'b3' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('b3')}
                        >
                          1
                        </TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'c3' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('c3')}
                        >
                          $35.99
                        </TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'd3' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('d3')}
                        >
                          120
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Kitchen</TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'b4' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('b4')}
                        >
                          1
                        </TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'c4' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('c4')}
                        >
                          $89.99
                        </TableCell>
                        <TableCell 
                          className={`cursor-pointer ${activeCell === 'd4' ? 'bg-blue-50' : ''}`}
                          onClick={() => handleCellClick('d4')}
                        >
                          15
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>Click on any value cell to view and edit its formula. Try changing formulas to see how you can analyze your Airtable data.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Connected Airtable Data</CardTitle>
              <CardDescription>
                Live data from your Airtable base
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
                <div className="p-2 bg-white max-h-[400px] overflow-y-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs">Product ID</TableHead>
                        <TableHead className="text-xs">Name</TableHead>
                        <TableHead className="text-xs">Category</TableHead>
                        <TableHead className="text-xs">Price</TableHead>
                        <TableHead className="text-xs">Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-xs">
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
              
              <div className="mt-4 space-y-2">
                <p className="text-xs text-muted-foreground">Available Excel Functions:</p>
                <div className="space-y-1 text-xs">
                  <div><span className="font-mono text-blue-600">XLOOKUP()</span> - Find values in a range</div>
                  <div><span className="font-mono text-blue-600">COUNTIFS()</span> - Count cells meeting criteria</div>
                  <div><span className="font-mono text-blue-600">SUMIFS()</span> - Sum cells meeting criteria</div>
                  <div><span className="font-mono text-blue-600">AVERAGEIF()</span> - Average cells meeting criteria</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
