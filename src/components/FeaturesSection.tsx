
import { BarChart, Search, Globe, Star } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 reveal">
      <div className="mb-4 p-3 inline-block bg-brand-purple/10 rounded-lg">
        <Icon className="h-6 w-6 text-brand-purple" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Access sophisticated analytical tools designed for professional investors, with customizable dashboards and real-time metrics."
    },
    {
      icon: Search,
      title: "Market Insights",
      description: "Discover unique investment opportunities with our proprietary screening algorithms and comprehensive market research."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Monitor markets across the globe with data coverage spanning multiple asset classes, regions, and exchanges."
    },
    {
      icon: Star,
      title: "AI Recommendations",
      description: "Receive personalized investment recommendations powered by machine learning and predictive analytics."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Powerful Features for Intelligent Investing
          </h2>
          <p className="text-lg text-gray-600">
            FrontierMetrix combines cutting-edge technology with financial expertise to give you a competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
