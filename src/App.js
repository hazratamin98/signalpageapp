import "./App.css";
import "./gradient.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Container from "./component/container";
import Gradient from "./component/Gradient";

function App() {
  return (
    <div>
      <div className="background">
        <Gradient />
      </div>
      <Container>
        <Navbar />
        <div className="h-[calc(100vh-88px)] w-full flex flex-col lg:flex-row ">
          <div className="bg-clip bg-img-1 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-xl font-medium">
              Item 1
            </span>
          </div>
          <div className="bg-clip bg-img-2 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-xl font-medium">
              Item 2
            </span>
          </div>
          <div className="bg-clip bg-img-3 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-xl font-medium">
              Item 3
            </span>
          </div>
          <div className="bg-clip bg-img-4 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-xl font-medium">
              Item 4
            </span>
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
