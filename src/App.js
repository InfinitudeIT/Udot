<<<<<<< Updated upstream
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";  // Import the Header
import Home from "./components/homepage";
import AboutUs from "./components/About";
import OurServices from "./components/ourservices"; // Add this import
import CargoService from "./components/services/CargoService";
import DomesticService from "./components/services/DomesticService";
import InternationalService from "./components/services/InternationalService";
import ThirdPartyServices from "./components/services/3rdPartyServices";
// import OtherServices from "./components/services/OtherServices";
import "./css/header.css"; // Import header styles
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Footer from "./components/footer";
import FaqChatBot from "./components/FaqChatBot";
import OtherServices from "./components/services/OtherServices";
import ContactUs from "./components/contactus";
import TermsOfUse from "./TermsofUse";
import PrivacyPolicy from "./privacyPolicy";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      easing: "ease-in-out", // Smooth easing effect
      once: true, // Ensures animations happen only once
    });
  }, []);

  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
           <Header /> {/* Stays on all pages */}
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route index element={<Home />} /> {/* Home route */}
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/our-services" element={<OurServices />} />
                  <Route path="/services/cargo" element={<CargoService />} />
                  <Route path="/services/domestic" element={<DomesticService />} />
                  <Route path="/services/international" element={<InternationalService />} />
                  <Route path="/services/3rdPartyServices" element={<ThirdPartyServices />} />
                  <Route path="/services/OtherServices" element={<OtherServices />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/terms-of-use" element={<TermsOfUse />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  {/* <Route path="*" element={<NotFound />} /> Catch all for 404 pages */}
                </Routes>
              </main>
              <FaqChatBot />
              <Footer />
            </div>
          </Router>
  );
}

export default App;

=======
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";  // Import the Header
import Home from "./components/homepage";
import AboutUs from "./components/About";
import OurServices from "./components/ourservices"; // Add this import
// import OtherServices from "./components/services/OtherServices";
import "./css/header.css"; // Import header styles
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Footer from "./components/footer";
import FaqChatBot from "./components/FaqChatBot";
import ContactUs from "./components/contactus";
import TermsOfUse from "./TermsofUse";
import PrivacyPolicy from "./privacyPolicy";
import ExpressCourierService from "./components/services/ExpressCourierService";
import SeaFreightServices from "./components/services/SeaFreightService";
import ReverseLogistics from "./components/services/ReverseLogistics";
import FirstLastMileDelivery from "./components/services/FirstLastMileDelivery";
import B2BandB2CFulfillment from "./components/services/B2BandB2CFulfillment";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      easing: "ease-in-out", // Smooth easing effect
      once: true, // Ensures animations happen only once
    });
  }, []);

  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
           <Header /> {/* Stays on all pages */}
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route index element={<Home />} /> {/* Home route */}
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/our-services" element={<OurServices />} />
                  {/* <Route path="/services/OtherServices" element={<OtherServices />} /> */}
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/terms-of-use" element={<TermsOfUse />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/services/Express" element={<ExpressCourierService/>}/>
                  <Route path="/services/freight" element={<SeaFreightServices/>}/>
                  <Route path="/services/Reverse" element={<ReverseLogistics/>}/>
                  <Route path="/services/first-last-mile-delivery" element={<FirstLastMileDelivery/>}/>
                  <Route path="/services/b2b-b2c-fulfillment" element={<B2BandB2CFulfillment/>}/>
                  {/* <Route path="*" element={<NotFound />} /> Catch all for 404 pages */}
                </Routes>
              </main>
              <FaqChatBot />
              <Footer />
            </div>
          </Router>
  );
}

export default App;

>>>>>>> Stashed changes
