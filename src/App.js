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
      <div className="h-screen w-full sm:flex justify-between text-center cursor-pointer bg-[#1E3E36]  text-white ">
        <div className="clip-your-needful-style bg-red-300 w-1/4">
          <a href="image-2">Item 1</a>
        </div>
        <div className=" clip-your-needful-style2  w-1/4 bg-blue-300">
          <a href="image-2">Item 2</a>
        </div>
        <div className=" clip-your-needful-style3 w-1/4 bg-green-400">
          <a href="image-4">Item 3</a>
        </div>
        <div className="clip-your-needful-style4 w-1/4 bg-yellow-500">
          <a href="image-4">Item 4</a>
        </div>
      </div>

      <Footer />
    </Container>
  );
}

export default App;
