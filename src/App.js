import './App.css';
import Header from './Modules/Header/header.jsx';
import Footer from './Modules/Footer/footer.jsx';
import Body from './Modules/Body/body.jsx';
import Promo from './Modules/Promo/Promo.jsx';
import AboutUs from './Modules/AboutUs/AboutUs.jsx';
import FeaturedCars from './Modules/FeaturedCars/FeaturedCars.jsx';
import TopSellingCars from './Modules/TopSellingCars/TopSellingCars.jsx';

function App() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Promo />
        <FeaturedCars />
        {/* <TopSellingCars /> */}
        <main className="flex-grow-1">
          {/* <Body /> */}
        </main>
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
