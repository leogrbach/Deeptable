
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How Teams Use AirExcel</h2>
          <p className="text-muted-foreground max-w-[600px]">
            See how different departments leverage our tool to streamline their workflows.
          </p>
        </div>
        
        <Tabs defaultValue="finance" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="product">Product</TabsTrigger>
          </TabsList>
          
          <TabsContent value="finance" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Financial Reporting</h3>
                    <p className="text-muted-foreground mb-4">
                      Finance teams use AirExcel to export monthly financial reports from Airtable to Excel, preserving all calculations and formatting for board presentations and financial analysis.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Monthly P&L statements from Airtable data</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Budget vs actuals tracking in Excel format</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Cash flow forecasting with live Airtable data</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border overflow-hidden">
                    <img 
                      src="https://s.lovable.ch/a04GaFZYSXR0TnFzOFNGRVVjWW9QNk5zNFNFUGhtcFVLWVNob3czMW9tdz0=" 
                      alt="Finance use case" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="operations" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Operational Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Operations teams use AirExcel to transform their process tracking data from Airtable into detailed Excel reports with KPIs and performance metrics.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Supply chain management dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Inventory tracking with Excel pivot tables</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Process efficiency metrics and analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border overflow-hidden">
                    <img 
                      src="https://s.lovable.ch/MjRBODI0aUJWSGRQOU40WWFYZmk5VTI5cTUzWm43Z0lON3VOaFZrREdqbz0=" 
                      alt="Operations use case" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="marketing" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Campaign Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Marketing teams use AirExcel to export campaign performance data from Airtable for deeper analysis and client reporting in familiar Excel formats.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Campaign ROI calculations and charts</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Content calendar scheduling in Excel format</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Budget allocation and performance tracking</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border overflow-hidden">
                    <img 
                      src="https://s.lovable.ch/cHBHTG9zbzlnYlhaVytMZlV0UEVoQzNQK0lwY1BYSkRvamtIVU4wTnJGYz0=" 
                      alt="Marketing use case" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="product" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Product Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Product teams use AirExcel to transform feature tracking and roadmap data from Airtable into detailed Excel spreadsheets for stakeholder presentations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Feature prioritization matrices in Excel</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>Sprint planning and resource allocation</span>
                      </li>
                      <li className="flex items-start">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>User feedback analysis and categorization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border overflow-hidden">
                    <img 
                      src="https://s.lovable.ch/OU9rVGE3ZnY0K3B3RUw1RTVUWGRzdUFiams1MGxVaVFFaENySGRVbDRkbz0=" 
                      alt="Product use case" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
