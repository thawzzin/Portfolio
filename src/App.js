import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <Home />
      <Work />
      <div className="bg-black px-5 md:px-10">
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
