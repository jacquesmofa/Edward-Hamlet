import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Team', path: '/team' },
    { name: 'Impact Hub', path: '/impact' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-vitality/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://edwardsregen.org/wp-content/uploads/2024/11/edwardhamlet-01ggggg__1_-removebg-preview-1.png"
                alt="Edwards Hamlet Regeneration Centre"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-neon-growth bg-white/10'
                      : 'text-white hover:text-neon-growth hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://www.zeffy.com/en-US/donation-form/donation-to-edwards-hamlet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-neon-growth text-forest-dark font-semibold text-sm rounded-lg hover:bg-neon-light transition-all duration-200 shadow-lg hover:shadow-neon-growth/50 whitespace-nowrap cursor-pointer"
              >
                Donate Now
              </a>
              <a
                href="tel:+256760454324"
                className="flex items-center space-x-2 text-white hover:text-neon-growth transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Call Anytime</div>
                  <div className="text-sm font-semibold whitespace-nowrap">+256 760 454324</div>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 cursor-pointer"
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-forest-vitality/98 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      location.pathname === link.path
                        ? 'text-neon-growth bg-white/10'
                        : 'text-white hover:text-neon-growth hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donation-to-edwards-hamlet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-neon-growth text-forest-dark font-semibold text-sm rounded-lg text-center hover:bg-neon-light transition-all cursor-pointer"
                >
                  Donate Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
