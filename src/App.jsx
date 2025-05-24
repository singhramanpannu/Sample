import React from 'react';
import Navbar from './components/navbar';
import HomeSection from './Pages/homeSection';
import AboutUsSection from './components/aboutus';
import Amenities from './components/amenities';
import LocationBenefits from './components/locationBenifits';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';
import useLenisScroll from './components/smoothscroll';


function App() {
  useLenisScroll();
  return (
   <div>
      <Navbar />
      <HomeSection></HomeSection>
      <AboutUsSection></AboutUsSection>
      <Amenities></Amenities>
      <LocationBenefits></LocationBenefits>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
