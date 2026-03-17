import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;