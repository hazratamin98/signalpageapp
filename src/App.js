import { useEffect } from "react";

import "./App.css";
import "./gradient.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Container from "./component/container";
import Gradient from "./component/Gradient";
import Navbarrrr from "./component/Navbarrrr";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div>
      <div className="background">
        <Gradient />
      </div>
      <Container>
        <div className="app-root flex flex-col">
          <Navbar />
          {/* h-[calc(100vh-158px)] */}
          <div className="flex-grow w-full flex flex-col lg:flex-row">
            <div className="bg-clip bg-img-1 w-full h-1/4 lg:h-full lg:w-1/4 relative ">
              <span className="center text-white text-2xl font-medium italic  ">
                Person 1
              </span>
            </div>
            <div className="bg-clip bg-img-2 w-full h-1/4 lg:h-full lg:w-1/4 relative">
              <span className="center text-white text-2xl font-medium italic">
                Person 2
              </span>
            </div>
            <div className="bg-clip bg-img-3 w-full h-1/4 lg:h-full lg:w-1/4 relative">
              <span className="center text-white text-2xl font-medium italic">
                Person 3
              </span>
            </div>
            <div className="bg-clip bg-img-4 w-full h-1/4 lg:h-full lg:w-1/4 relative">
              <span className="center text-white text-2xl font-medium italic">
                Person 4
              </span>
            </div>
          </div>
          <Footer />
        </div>
        <Navbarrrr />
      </Container>
    </div>
  );
}

export default App;
