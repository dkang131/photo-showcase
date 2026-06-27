import './App.css'
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero";
// import Gallery from "./components/Gallery";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* <Gallery /> */}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;