import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import SinglePage from './Components/SinglePage';
import "swiper/css/bundle";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <SinglePage/>
    </div>
  );
}

export default App;
