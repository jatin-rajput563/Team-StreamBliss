import "./App.css";
import Hero from "./components/Hero";
import Action from "./components/Action";
import Everything from "./components/Everything";
import Pricing from "./components/Pricing";
import CompareFeature from "./components/CompareFeature";
import Members from "./components/Members";
import Ready from "./components/Ready";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonthlyPricing from "./components/MonthlyPricing";
import BackToTop from "./components/common/BackToTop";
import YearlyPricing from "./components/YearlyPricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Action />
              <Everything />
              <Pricing />
              <CompareFeature />
              <Members />
              <Ready />
              <Faq />
              <Footer />
              <BackToTop />
            </>
          }
        />
        <Route path="/monthlyPricing" element={<MonthlyPricing />} />
        <Route path="/yearlyPricing" element={<YearlyPricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
