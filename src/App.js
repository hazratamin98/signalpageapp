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
        <div className="h-[calc(100vh-158px)] w-full flex flex-col lg:flex-row">
          <div className="bg-clip bg-img-1 w-full h-1/4 lg:h-full lg:w-1/4 relative ">
            <span className="center text-white text-2xl font-medium italic  ">
              <p>
                <a href="prsn1"> Person 1</a>
              </p>
            </span>
          </div>
          <div className="bg-clip bg-img-2 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-2xl font-medium italic">
              <p>
                <a href="prsn2"> Person 2</a>
              </p>
            </span>
          </div>
          <div className="bg-clip bg-img-3 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-2xl font-medium italic">
              <p>
                <a href="prsn3"> Person 3</a>
              </p>
            </span>
          </div>
          <div className="bg-clip bg-img-4 w-full h-1/4 lg:h-full lg:w-1/4 relative">
            <span className="center text-white text-2xl font-semibold italic">
              <p>
                <a href="prsn4"> Person 4</a>
              </p>
            </span>
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
