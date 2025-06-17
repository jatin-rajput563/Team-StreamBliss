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
import BackToTop from "./components/common/BackToTop";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {
  console.log(e);
});


function App() {
  return (
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
  );
}

export default App;
