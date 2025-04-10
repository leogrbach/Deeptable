
import React from 'react';

interface FilePreviewProps {
  fileName: string;
}

const FilePreview: React.FC<FilePreviewProps> = ({ fileName }) => {
  // Mock data for the preview
  const previewData = {
    headers: ['ID', 'Name', 'Email', 'Status', 'Created Date'],
    rows: [
      ['1', 'John Doe', 'john@example.com', 'Active', '2023-01-15'],
      ['2', 'Jane Smith', 'jane@example.com', 'Inactive', '2023-02-20'],
      ['3', 'Robert Johnson', 'robert@example.com', 'Active', '2023-03-05'],
      ['4', 'Emily Davis', 'emily@example.com', 'Pending', '2023-04-10'],
      ['5', 'Michael Wilson', 'michael@example.com', 'Active', '2023-05-22'],
    ]
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Preview Your Excel File</h3>
        <p className="text-muted-foreground">
          Review how your file "{fileName}" will look in Excel format
        </p>
      </div>

      <div className="border rounded-md overflow-hidden mt-6">
        <div className="bg-muted p-2 flex items-center border-b">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-center w-full">Excel Preview</div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                {previewData.headers.map((header, index) => (
                  <th key={index} className="px-4 py-2 text-left font-medium text-sm border-r border-b last:border-r-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b last:border-b-0 hover:bg-muted/30">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2 text-sm border-r last:border-r-0">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-md p-4 mt-6">
        <h4 className="font-medium mb-2">Excel Export Details</h4>
        <ul className="space-y-1 text-sm">
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Formulas preserved and working</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Formatting applied to all cells</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Links converted successfully</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilePreview;
