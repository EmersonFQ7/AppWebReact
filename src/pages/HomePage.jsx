import HeroSection from '../components/home/HeroSection';
import PopularSection from '../components/home/PopularSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <PopularSection />
    </div>
  );
};

export default HomePage;