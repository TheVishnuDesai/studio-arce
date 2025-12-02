import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import InfiniteScroll from "./components/InfiniteScroll";
import Aboutus from "./components/Aboutus";
import Work from "./components/Work";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <InfiniteScroll />
      <Aboutus />
      <Work />      
      <Services />      
      {/* <Testimonial />       */}
      <CTA />
      <Footer />
    </div>
  );
}
export default App;