import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Background Video & Overlay */}
      <BackgroundVideo />

      <div className="bg-transparent min-h-screen flex flex-col relative z-0">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
