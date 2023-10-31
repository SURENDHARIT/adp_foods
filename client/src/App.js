import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Food from './components/Food/Food';
import Team from './components/Team/Team';
import VegProducts from './components/VegProducts/VegProducts';
import Footer from './components/Footer/Footer';
import NVProducts from './components/NVProducts/NVProducts';
import Routing from './Routing';
import Navbar from './components/Navbar/Navbar';

import "react-toastify/dist/ReactToastify.css";
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <NVProducts/> */}
      <Routing/>
      {/* <About/> */}
      {/* <Team/> */}
      {/* <VegProducts/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
