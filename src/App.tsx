import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="https://github.com/Dynamo-09/I-Creations/releases/download/v1.0.0/Hero_banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Global Overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-primary/70 -z-10" />

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
