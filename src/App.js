import logo from './logo.svg';
import './App.css';
import Navbar from "../src/Components/Pages/Navbar";
import ShowProduct from './Components/Pages/ShowProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dealcard from '..//src/Components/Pages/Dealcard'
import Footer from '../src/Components/Pages/footer'
function App() {
  return (
    <>
     <Navbar/>
    <ShowProduct/>
    
    
      <Dealcard />
      <Footer/>
   
    </>
  );
}

export default App;
