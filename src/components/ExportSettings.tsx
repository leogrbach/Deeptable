
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';

interface ExportSettingsProps {
  fileName: string;
  onConfigure: () => void;
  onBack: () => void;
}

const ExportSettings: React.FC<ExportSettingsProps> = ({ fileName, onConfigure, onBack }) => {
  const [settings, setSettings] = useState({
    preserveFormulas: true,
    preserveFormatting: true,
    includeHiddenColumns: false,
    convertLinks: true,
    optimizeForPrinting: false,
  });

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    });
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Configure Export Settings</h3>
        <p className="text-muted-foreground">
          Customize how your file "{fileName}" will be converted to Excel
        </p>
      </div>

      <div className="space-y-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3 p-4 border rounded-md hover:bg-muted/50">
            <Checkbox 
              id="preserveFormulas" 
              checked={settings.preserveFormulas}
              onCheckedChange={() => handleSettingChange('preserveFormulas')}
            />
            <div className="space-y-1">
              <label 
                htmlFor="preserveFormulas" 
                className="font-medium cursor-pointer"
              >
                Preserve Formulas
              </label>
              <p className="text-sm text-muted-foreground">
                Convert Airtable formulas to Excel equivalent formulas
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-md hover:bg-muted/50">
            <Checkbox 
              id="preserveFormatting" 
              checked={settings.preserveFormatting}
              onCheckedChange={() => handleSettingChange('preserveFormatting')}
            />
            <div className="space-y-1">
              <label 
                htmlFor="preserveFormatting" 
                className="font-medium cursor-pointer"
              >
                Preserve Formatting
              </label>
              <p className="text-sm text-muted-foreground">
                Maintain colors, fonts and cell styles in Excel
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-md hover:bg-muted/50">
            <Checkbox 
              id="includeHiddenColumns" 
              checked={settings.includeHiddenColumns}
              onCheckedChange={() => handleSettingChange('includeHiddenColumns')}
            />
            <div className="space-y-1">
              <label 
                htmlFor="includeHiddenColumns" 
                className="font-medium cursor-pointer"
              >
                Include Hidden Columns
              </label>
              <p className="text-sm text-muted-foreground">
                Export hidden columns from Airtable to Excel
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-md hover:bg-muted/50">
            <Checkbox 
              id="convertLinks" 
              checked={settings.convertLinks}
              onCheckedChange={() => handleSettingChange('convertLinks')}
            />
            <div className="space-y-1">
              <label 
                htmlFor="convertLinks" 
                className="font-medium cursor-pointer"
              >
                Convert Links
              </label>
              <p className="text-sm text-muted-foreground">
                Maintain hyperlinks as clickable links in Excel
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-md hover:bg-muted/50">
            <Checkbox 
              id="optimizeForPrinting" 
              checked={settings.optimizeForPrinting}
              onCheckedChange={() => handleSettingChange('optimizeForPrinting')}
            />
            <div className="space-y-1">
              <label 
                htmlFor="optimizeForPrinting" 
                className="font-medium cursor-pointer"
              >
                Optimize for Printing
              </label>
              <p className="text-sm text-muted-foreground">
                Set print area and page settings automatically
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onConfigure}>
          Continue to Preview
        </Button>
      </div>
    </div>
  );
};

export default ExportSettings;
