
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleAuthClick = () => {
    navigate("/auth");
  };

  const getUserInitials = () => {
    if (!user || !user.email) return "FX";
    return user.email.substring(0, 2).toUpperCase();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-blue">
            Frontier<span className="text-brand-purple">Metrix</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-brand-purple transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-brand-purple transition-colors">
            How It Works
          </a>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8 border border-brand-purple">
                <AvatarFallback className="bg-brand-purple text-white">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut} 
                className="flex items-center text-gray-700"
              >
                <LogOut className="mr-1 h-4 w-4" /> Logout
              </Button>
            </div>
          ) : (
            <Button 
              className="bg-brand-purple hover:bg-brand-purple/90" 
              onClick={handleAuthClick}
            >
              Login
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-brand-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-700 hover:text-brand-purple transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          
          {user ? (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 border border-brand-purple mr-2">
                  <AvatarFallback className="bg-brand-purple text-white">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-gray-700">{user.email}</span>
              </div>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="flex items-center text-gray-700 justify-center"
              >
                <LogOut className="mr-1 h-4 w-4" /> Logout
              </Button>
            </div>
          ) : (
            <Button 
              className="bg-brand-purple hover:bg-brand-purple/90 w-full" 
              onClick={() => {
                setMobileMenuOpen(false);
                handleAuthClick();
              }}
            >
              Login
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
