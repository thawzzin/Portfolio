import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <Home />
      <Work />
      <div className="bg-black px-5 md:px-10 pb-5">
        <About />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
