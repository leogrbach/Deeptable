
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How does AirExcel work with Airtable?",
      answer: "AirExcel is an Airtable extension that integrates directly with your Airtable workspace. Once installed, you'll see an 'Export to Excel' option in your Airtable interface. Select your export options, and with one click, you'll get a perfectly formatted Excel file."
    },
    {
      question: "What formulas are supported in the export?",
      answer: "AirExcel supports all standard Airtable formulas and automatically converts them to their Excel equivalents. This includes mathematical operations, text functions, logical functions, and date/time calculations."
    },
    {
      question: "Can I export multiple tables at once?",
      answer: "Yes! You can select multiple tables to export in a single operation. Each table will be created as a separate sheet within your Excel workbook, maintaining all relationships and references between them."
    },
    {
      question: "Do I need special permissions in Airtable to use this?",
      answer: "AirExcel works with standard Airtable permissions. If you can view and export data in Airtable, you can use our extension. For scheduled exports and certain advanced features, you'll need editor or creator permissions."
    },
    {
      question: "Is my data secure during the export process?",
      answer: "Absolutely. Your data never leaves your secure environment. AirExcel processes the export directly from Airtable to your device without storing your data on any intermediate servers."
    },
    {
      question: "What Excel versions are supported?",
      answer: "AirExcel exports to .xlsx format, which is compatible with Excel 2007 and newer, including Excel for Mac, Google Sheets, and other spreadsheet applications that support the .xlsx format."
    },
    {
      question: "Can I customize the Excel output?",
      answer: "Yes, AirExcel provides various customization options including which formatting elements to preserve, header styles, cell formatting preferences, and more. You can also save your preferences for future exports."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Find answers to common questions about AirExcel.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your question here?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
