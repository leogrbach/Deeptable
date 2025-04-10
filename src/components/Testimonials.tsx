
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AirExcel has completely transformed our financial reporting process. What used to take hours of manual formatting now happens with a single click.",
      author: "Sarah Johnson",
      role: "Finance Director",
      company: "TechGrowth Inc.",
      avatar: "SJ"
    },
    {
      quote: "As a product manager, I need to share roadmap data with stakeholders who live in Excel. This tool has saved me countless hours of manual exports and reformatting.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCorp",
      avatar: "MC"
    },
    {
      quote: "Our marketing team manages campaigns in Airtable but executives want reports in Excel. AirExcel bridges that gap seamlessly.",
      author: "Emily Rodriguez",
      role: "Marketing Director",
      company: "BrandForward",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Hear from professionals who've transformed their Airtable-to-Excel workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/40">
                      <path d="M11.0801 2.9999C7.0001 6.9999 7.0001 12.9999 7.0001 12.9999H11.0801C11.0801 12.9999 11.0801 16.9999 7.0001 16.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21.08 2.9999C17 6.9999 17 12.9999 17 12.9999H21.08C21.08 12.9999 21.08 16.9999 17 16.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-foreground italic mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
