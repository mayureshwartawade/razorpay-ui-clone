// src/App.jsx


import { Header, Footer } from "./components";

// Page sections
import {
  Hero,
  FeaturePayments,
  FeatureBusinessBanking,
  ProductSuiteSection,
  CoreFeaturesSection,
  JoinRazorpaySection,
  TestimonialSection
} from "./pages";

function App() {
  return (
    <div className="w-full overflow-x-hidden font-mullish">
      <Header />
      <Hero />
      <FeaturePayments />
      <FeatureBusinessBanking />
      <ProductSuiteSection />
      <CoreFeaturesSection />
      <JoinRazorpaySection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;


