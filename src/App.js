import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Container from "./component/container";
function App() {
  return (
    <Container>
      <Navbar />
      <div className="h-screen">Main page</div>

      <Footer />
    </Container>
  );
}

export default App;
