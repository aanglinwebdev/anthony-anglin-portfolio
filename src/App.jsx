import "./styles/styles.css";

import Header from "./components/Header";
import About from "./components/about";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";





function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <About />

      <Services />
      <Portfolio />
      
      {/* Portfolio
      <section>
        <h2>Portfolio</h2>
        <p>Project 1</p>
        <p>Project 2</p>
      </section> */}

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

    </div>
  );
}

export default App;

