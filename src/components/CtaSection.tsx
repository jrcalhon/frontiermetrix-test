
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert the email into the waitlist table - use array format as required by TypeScript
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.trim() }]);
      
      if (error) {
        // Handle case where email might already exist
        if (error.code === '23505') {
          toast.info("You're already on our waitlist! We'll be in touch soon");
        } else {
          console.error('Error adding to waitlist:', error);
          toast.error("Something went wrong. Please try again later");
        }
      } else {
        toast.success("Success!", {
          description: "You've been added to our waitlist",
        });
        setEmail("");
      }
    } catch (err) {
      console.error('Error submitting to waitlist:', err);
      toast.error("Something went wrong. Please try again later");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Investment Strategy?
          </h2>
          
          <p className="text-lg text-white/80 mb-8">
            Be among the first to access FrontierMetrix when we launch. Join our waitlist today
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 text-white border-white/20 placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-brand-accent hover:bg-brand-accent/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm text-white/60">
            Join 500+ investors already on our waitlist. No spam, just updates about our launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
