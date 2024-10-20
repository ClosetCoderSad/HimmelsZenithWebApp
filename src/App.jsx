import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import About from "./components/About";
import Footer from "./components/Footer";
import { LovedItemsProvider } from './components/LovedItemsContext'; 

const App = () => {
  return (
    <div>
      <LovedItemsProvider>{/* Wrap the app inside the provider */}
        <Navbar />
        <Hero />
      </LovedItemsProvider>
      <Category />
      <About />
      <Footer />
    </div>
  );
};

export default App;

{
  /* 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/category" element={<Category />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Notfoundpage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};
*/
}
