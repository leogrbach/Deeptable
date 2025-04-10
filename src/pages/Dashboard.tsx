
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileSpreadsheet, Settings, Download } from 'lucide-react';
import FileUploader from '@/components/FileUploader';
import DashboardHeader from '@/components/DashboardHeader';
import ExportSettings from '@/components/ExportSettings';
import FilePreview from '@/components/FilePreview';

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'configure' | 'preview'>('upload');
  const [file, setFile] = useState<File | null>(null);
  
  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
    setCurrentStep('configure');
  };
  
  const handleConfigureComplete = () => {
    setCurrentStep('preview');
  };
  
  const handleExport = () => {
    // In a real app, this would trigger the conversion and download
    console.log('Exporting file:', file?.name);
    alert('Your Excel file is being generated. It will download shortly.');
    
    // Reset to start over
    setTimeout(() => {
      setCurrentStep('upload');
      setFile(null);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Convert your Airtable data to Excel format</p>
        </div>
        
        {/* Step navigation */}
        <div className="flex items-center mb-10">
          <div className={`flex items-center ${currentStep === 'upload' ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Upload className="h-5 w-5" />
            </div>
            <span className="font-medium">Upload</span>
          </div>
          
          <div className="w-12 h-1 bg-border mx-2"></div>
          
          <div className={`flex items-center ${currentStep === 'configure' ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Settings className="h-5 w-5" />
            </div>
            <span className="font-medium">Configure</span>
          </div>
          
          <div className="w-12 h-1 bg-border mx-2"></div>
          
          <div className={`flex items-center ${currentStep === 'preview' ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <span className="font-medium">Preview</span>
          </div>
        </div>
        
        {/* Step content */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          {currentStep === 'upload' && (
            <FileUploader onFileUpload={handleFileUpload} />
          )}
          
          {currentStep === 'configure' && (
            <ExportSettings 
              fileName={file?.name || ''} 
              onConfigure={handleConfigureComplete} 
              onBack={() => setCurrentStep('upload')}
            />
          )}
          
          {currentStep === 'preview' && (
            <div className="space-y-6">
              <FilePreview fileName={file?.name || ''} />
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep('configure')}>
                  Back to Settings
                </Button>
                <Button onClick={handleExport}>
                  <Download className="mr-2 h-4 w-4" />
                  Export to Excel
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
