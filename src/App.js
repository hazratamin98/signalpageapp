import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Container from "./component/container";
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
></link>;
function App() {
  return (
    <Container>
      <Navbar />
      <div className="h-screen w-full sm:flex justify-between text-center cursor-pointer text-white ">
        <div className="clip-your-needful-style bg-red-300 w-1/4">
          <a>Item 1</a>
        </div>
        <div className=" clip-your-needful-style  w-1/4 bg-blue-300">
          <a>Item 2</a>
        </div>
        <div className=" clip-your-needful-style w-1/4 bg-green-400">
          <a>Item 3</a>
        </div>
        <div className="clip-your-needful-style w-1/4 bg-yellow-500">
          <a>Item 4</a>
        </div>
      </div>

      <Footer />
    </Container>
  );
}

export default App;
