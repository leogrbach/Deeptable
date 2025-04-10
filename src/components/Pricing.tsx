
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "For individuals and small teams just getting started.",
      price: "$9",
      period: "per user / month",
      features: [
        "Export up to 10 spreadsheets per month",
        "Basic Excel formatting preservation",
        "Limited formula support",
        "Export tables and views",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "Perfect for growing teams with regular export needs.",
      price: "$19",
      period: "per user / month",
      features: [
        "Unlimited exports",
        "Full formatting preservation",
        "Complete formula support",
        "Export linked records",
        "Scheduled exports (weekly)",
        "Priority support"
      ],
      buttonText: "Get Pro",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For organizations needing advanced features and control.",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Everything in Pro",
        "SSO integration",
        "Admin controls",
        "Custom branding",
        "Daily scheduled exports",
        "Dedicated account manager",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom plan for your organization?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
