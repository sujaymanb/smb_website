import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import CustomCursor from "./components/Cursorbot"

function App() {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Home />
      <Work />
      <About />
    </div>
  );
}

export default App;
