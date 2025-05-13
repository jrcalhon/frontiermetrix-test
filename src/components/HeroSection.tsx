
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-brand-lightPurple/20 to-transparent"></div>
        <div className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-brand-lightPurple/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0">
          {/* Left column: Text content */}
          <div className="w-full md:w-1/2 space-y-6 reveal">
            <p className="inline-block bg-brand-purple/10 text-brand-purple px-4 py-1 rounded-full font-medium text-sm">
              Coming Soon
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight">
              Investment Intelligence 
              <span className="text-brand-purple"> Redefined</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 md:pr-12 max-w-2xl">
              FrontierMetrix helps investors make better decisions with cutting-edge analytics and real-time market intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                Explore Features
              </Button>
              <Button variant="outline" size="lg" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                Join Waitlist
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">TS</div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">BM</div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>500+</strong> investors on the waitlist
              </p>
            </div>
          </div>
          
          {/* Right column: Image */}
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 to-transparent rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt="Investment dashboard visualization"
                className="relative z-10 rounded-lg shadow-xl object-cover w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
