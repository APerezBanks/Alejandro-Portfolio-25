import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Layout/Footer";
import Success from "./components/Success";
import Extra from "./components/Extra";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
      </main>
      \
      <Footer />
    </BrowserRouter>
  );
}

export default App;
