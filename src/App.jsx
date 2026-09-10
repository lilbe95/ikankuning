import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <OrderForm />
      <LocationMap />
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;
