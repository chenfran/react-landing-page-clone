import FaqSection from './components/faqSection';
import FooterSection from './components/footerSection';
import Header from './components/header';
import HeroSection from './components/heroSection';
import IntermissionSection from './components/intermissionSection';
import MintSection from './components/mintSection';
import RaritySection from './components/raritySection';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <MintSection />
        <RaritySection />
        <IntermissionSection />
        <FaqSection />
        <FooterSection />
      </main>
    </div>
  );
}
