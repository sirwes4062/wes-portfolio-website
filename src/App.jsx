import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Recent from "./components/Recent/Recent";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Messaging from "./components/Messaging/Messaging";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="App-container">
      <Navbar />
      <Hero />
      <Services />
      <Recent />
      <Experience />
      <Skills />
      <Messaging />
      <Footer />
    </div>
  );
};

export default App;
