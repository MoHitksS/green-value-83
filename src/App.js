import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import "swiper/css/bundle";
import Cart from './Components/Pages/Cart';
import Checkout from './Components/Pages/Checkout';
function App() {
  return (
    <div className="App">
    <Cart />
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}
    </div>
  );
}

export default App;
