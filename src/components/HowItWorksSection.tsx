
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Register for Access",
      description: "Join our exclusive waitlist to be among the first to experience FrontierMetrix's powerful investment intelligence tools"
    },
    {
      number: "02",
      title: "Customize Your Dashboard",
      description: "Tailor your experience with personalized metrics, watchlists, and alerts that matter to you"
    },
    {
      number: "03",
      title: "Generate Insights",
      description: "Leverage our AI-powered analytics to identify opportunities and optimize your investment strategy"
    }
  ];

  const benefits = [
    "Real-time market data analytics",
    "Customizable investment alerts",
    "Portfolio optimization tools",
    "Seamless integration with brokerages"
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left column: Image */}
          <div className="w-full lg:w-1/2 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent rounded-lg transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt="Investor using FrontierMetrix platform"
                className="relative z-10 rounded-lg shadow-xl object-cover w-full"
              />
            </div>
          </div>
          
          {/* Right column: Content */}
          <div className="w-full lg:w-1/2 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              How FrontierMetrix Works for You
            </h2>
            
            <div className="space-y-8 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-blue">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-semibold text-brand-blue mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Request Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
