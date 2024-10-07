import "./App.css";
import { AppProvider } from "./components/AppProvider";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Recent from "./components/Recent/Recent";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Messaging from "./components/Messaging/Messaging";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AppProvider>
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
    </AppProvider>
  );
};

export default App;
