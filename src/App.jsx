import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactsPage />} />

      </Routes>

    </>
  );
}

export default App;