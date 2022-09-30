import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import "swiper/css/bundle";
import ProductPage from "./Pages/ProductPage"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <ProductPage />
    </div>
  );
}

export default App;
