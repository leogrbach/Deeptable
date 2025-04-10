
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, FileSpreadsheet, LayoutGrid, Zap, BarChart4, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-airtable" />,
      title: "Full Formula Support",
      description: "Export Airtable formulas as native Excel formulas that continue to work in your spreadsheet."
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-airtable" />,
      title: "Preserve Formatting",
      description: "Maintain cell merging, colors, fonts, conditional formatting, and more when exporting to Excel."
    },
    {
      icon: <Table className="h-10 w-10 text-airtable" />,
      title: "Advanced Filtering",
      description: "Export specific views, filtered data, or sorted information exactly as you see it in Airtable."
    },
    {
      icon: <Zap className="h-10 w-10 text-airtable" />,
      title: "One-Click Export",
      description: "Generate Excel files directly from the Airtable interface with a single click."
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-airtable" />,
      title: "Chart Conversion",
      description: "Automatically convert Airtable charts and graphs to Excel-compatible visualizations."
    },
    {
      icon: <Clock className="h-10 w-10 text-airtable" />,
      title: "Scheduled Exports",
      description: "Set up recurring exports to automatically generate and deliver Excel files on schedule."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Powerful Features</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Everything you need to seamlessly bridge the gap between Airtable and Excel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
