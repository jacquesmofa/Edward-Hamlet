import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import StatsCounter from '../../components/base/StatsCounter';
import HeroSection from './components/HeroSection';
import ProgramsGrid from './components/ProgramsGrid';
import AboutPreview from './components/AboutPreview';
import TeamPreview from './components/TeamPreview';
import PartnersSection from './components/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <ProgramsGrid />
      <StatsCounter />
      <TeamPreview />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default HomePage;
