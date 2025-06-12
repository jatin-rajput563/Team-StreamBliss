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
import YearlyPricing from "./components/YearlyPricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
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
            </>
          }
        />
        {/* Monthly Pricing Route */}
        <Route path="/monthlyPricing" element={<MonthlyPricing />} />
        {/* Yearly Pricing Route */}
        <Route path="/yearlyPricing" element={<YearlyPricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
