import Base from "../components/Base";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import TrendingSection from "../components/TrendingSection";
import ValuesSection from "../components/ValuesSection";

const HomePage = () => {
  return (
    <Base>
      <NavBar />
      <HeroSection />
      <TrendingSection />
      <ValuesSection />
      <FAQSection />
      <Footer />
    </Base>
  );
};

export default HomePage;
