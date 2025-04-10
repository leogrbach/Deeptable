
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckIcon, XIcon } from 'lucide-react';

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Export with Formatting",
      airexcel: true,
      airtable: false,
      scripts: "Limited"
    },
    {
      feature: "Formula Preservation",
      airexcel: true,
      airtable: false,
      scripts: false
    },
    {
      feature: "One-Click Export",
      airexcel: true,
      airtable: true,
      scripts: false
    },
    {
      feature: "Multiple Tables/Views",
      airexcel: true,
      airtable: "Limited",
      scripts: "Limited"
    },
    {
      feature: "Scheduled Exports",
      airexcel: true,
      airtable: false,
      scripts: "Limited"
    },
    {
      feature: "Technical Setup Required",
      airexcel: false,
      airtable: false,
      scripts: true
    },
    {
      feature: "Preserves Cell Merging",
      airexcel: true,
      airtable: false,
      scripts: false
    }
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) return <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />;
    if (value === false) return <XIcon className="h-5 w-5 text-red-500 mx-auto" />;
    return <span className="text-center block">{value}</span>;
  };

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Comparison</h2>
          <p className="text-muted-foreground max-w-[600px]">
            See how AirExcel stacks up against standard Airtable exports and custom scripts.
          </p>
        </div>
        
        <div className="w-full overflow-auto">
          <Table className="min-w-full border border-border rounded-lg">
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[250px]">Feature</TableHead>
                <TableHead className="text-center">AirExcel</TableHead>
                <TableHead className="text-center">Airtable CSV Export</TableHead>
                <TableHead className="text-center">Custom Scripts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell>{renderValue(row.airexcel)}</TableCell>
                  <TableCell>{renderValue(row.airtable)}</TableCell>
                  <TableCell>{renderValue(row.scripts)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
