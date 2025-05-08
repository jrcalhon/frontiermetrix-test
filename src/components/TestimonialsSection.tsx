
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "FrontierMetrix has completely transformed my approach to market analysis. The insights I've gained have been invaluable.",
      author: "Sarah Johnson",
      role: "Portfolio Manager",
      company: "Apex Capital",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      quote: "The predictive analytics feature has helped me identify opportunities I would have otherwise missed. This platform is a game-changer.",
      author: "Michael Chen",
      role: "Investment Analyst",
      company: "Quantum Advisors",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      rating: 5
    },
    {
      quote: "As someone managing multiple portfolios, the customization options and real-time alerts have significantly improved my efficiency.",
      author: "Rebecca Torres",
      role: "Wealth Advisor",
      company: "Meridian Wealth",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Trusted by Investment Professionals
          </h2>
          <p className="text-lg text-gray-600">
            See what early users are saying about FrontierMetrix
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 reveal">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[activeIndex].rating} className="h-5 w-5 text-gray-300" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].author}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-brand-blue">{testimonials[activeIndex].author}</h4>
                <p className="text-sm text-gray-600">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center space-x-2">
            <Button 
              onClick={goToPrevious} 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                onClick={() => setActiveIndex(index)}
                variant="ghost"
                size="icon"
                className={`w-2 h-2 rounded-full p-0 min-w-0 ${
                  activeIndex === index 
                    ? 'bg-brand-purple' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button 
              onClick={goToNext} 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
