// import React, { useState } from "react";
// import { FaTimes, FaSearch } from "react-icons/fa";
// import "../css/header.css";

// const locations = {
//   Hyderabad: ["500001", "500002", "500003"],
//   Karimnagar: ["505001", "505002", "505003"],
//   Sangareddy: ["502001", "502002", "502003"],
//   Warangal: ["506001", "506002", "506003"],
//   Nizamabad: ["503001", "503002", "503003"],
// };

// const stores = [
//   { id: 1, name: "Urban Store Hyderabad", pincode: "500001", location: "Hyderabad", address: "123 MG Road" },
//   { id: 2, name: "Karimnagar Hub", pincode: "505002", location: "Karimnagar", address: "45 Main Street" },
//   { id: 3, name: "Sangareddy Outlet", pincode: "502003", location: "Sangareddy", address: "78 Market Road" },
//   { id: 4, name: "Warangal Depot", pincode: "506002", location: "Warangal", address: "Near Railway Station" },
//   { id: 5, name: "Nizamabad Point", pincode: "503001", location: "Nizamabad", address: "Central Avenue" },
// ];

// function LocationSearchPopup({ onClose, onStoreSelect }) {
//   const [location, setLocation] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [filteredStores, setFilteredStores] = useState([]);
//   const [showPincodeList, setShowPincodeList] = useState(false);
//   const [searchInitiated, setSearchInitiated] = useState(false);

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//     setPincode("");
//     setShowPincodeList(true);
//     setSearchInitiated(false);
//   };

//   const handleSearch = () => {
//     setSearchInitiated(true);
//     let foundStores = stores.filter(store => store.location === location && store.pincode === pincode);
    
//     if (foundStores.length === 0) {
//       // Find nearby stores if no exact match
//       const nearbyStores = stores.filter(store => Object.keys(locations).includes(store.location) && store.location !== location);
//       setFilteredStores(nearbyStores);
//     } else {
//       setFilteredStores(foundStores);
//     }
    
//     onStoreSelect(pincode, filteredStores);
//   };

//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-content fade-in" onClick={(e) => e.stopPropagation()}>
//         <button className="close-btn-pop" onClick={onClose}><FaTimes /></button>
//         <h2>Select Your Location</h2>
//         <div className="form-group">
//           <label>Select Location:</label>
//           <select value={location} onChange={handleLocationChange}>
//             <option value="">--Select Location--</option>
//             {Object.keys(locations).map((loc) => (
//               <option key={loc} value={loc}>{loc}</option>
//             ))}
//           </select>
//         </div>
        
//         {location && locations[location] && (
//           <div className="form-group">
//             <label>Select Pincode:</label>
//             <select value={pincode} onChange={(e) => setPincode(e.target.value)}>
//               <option value="">--Select Pincode--</option>
//               {locations[location].map((pin) => (
//                 <option key={pin} value={pin}>{pin}</option>
//               ))}
//             </select>
//           </div>
//         )}
        
//         <button 
//           style={{ 
//             backgroundColor: "red", 
//             color: "white", 
//             border: "none", 
//             padding: "10px 20px", 
//             cursor: "pointer", 
//             borderRadius: "5px", 
//             fontSize: "16px", 
//             display: "flex", 
//             alignItems: "center", 
//             justifyContent: "center", 
//             gap: "8px", 
//             marginTop: "10px" 
//           }} 
//           onClick={handleSearch}>
//           <FaSearch /> Search
//         </button>
        
//         {searchInitiated && filteredStores.length === 0 && (
//           <p className="no-stores">No stores found in the selected location. Showing nearby stores:</p>
//         )}
        
//         {filteredStores.length > 0 && (
//           <div className="stores-list fade-in">
//             <h4>Nearby Stores:</h4>
//             {filteredStores.map((store) => (
//               <div key={store.id} className="store-item">
//                 <strong>{store.name}</strong>
//                 <p>{store.address}</p>
//                 <small>Pincode: {store.pincode}</small>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import * as XLSX from "xlsx";
import "../css/locationsearchpopup.css";

function LocationSearchPopup({ onClose, onStoreSelect }) {
  const [locations, setLocations] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showPincodeDropdown, setShowPincodeDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cityRef = useRef(null);
  const pincodeRef = useRef(null);

  // 📌 Load Data from Excel (Ensure the file is in the `public` folder)
  useEffect(() => {
    const loadExcelData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/locations.xlsx");
        const buffer = await response.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (jsonData.length === 0) throw new Error("Excel sheet is empty");

        // 📌 Convert Rows into Object Format
        const formattedData = jsonData.slice(1).map((row) => ({
          city: row[1]?.trim() || "", // Column B - City Name
          phone: row[2]?.toString().trim() || "N/A", // Column C - Phone Number
          email: row[3]?.trim() || "N/A", // Column D - Email ID
          address: row[4]?.trim() || "N/A", // Column E - Outlet Address
          pincode: row[5]?.toString().trim() || "", // Column F - Pincode
        }));

        setLocations(formattedData);
      } catch (error) {
        console.error("❌ Error loading locations file:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadExcelData();
  }, []);

  // 🔄 **Derived State for Cities and Pincodes**
  const availableCities = useMemo(() => [...new Set(locations.map((loc) => loc.city))], [locations]);
  const availablePincodes = useMemo(() => [...new Set(locations.map((loc) => loc.pincode))], [locations]);

  // 🔎 **Filter Cities**
  const filteredCities = useMemo(() => {
    return availableCities.filter((city) => city.toLowerCase().includes(selectedCity.toLowerCase()));
  }, [selectedCity, availableCities]);

  // 🔎 **Filter Pincodes**
  const filteredPincodes = useMemo(() => {
    return availablePincodes.filter((pin) => pin.includes(selectedPincode));
  }, [selectedPincode, availablePincodes]);

  // 🔽 **Handle City Selection**
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedPincode(""); // Reset pincode when selecting a city
    setShowCityDropdown(false);
  };

  // 🔽 **Handle Pincode Selection**
  const handlePincodeSelect = (pincode) => {
    setSelectedPincode(pincode);
    setShowPincodeDropdown(false);
  };

  // 📌 **Close dropdowns when clicking outside**
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setShowCityDropdown(false);
      }
      if (pincodeRef.current && !pincodeRef.current.contains(event.target)) {
        setShowPincodeDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔎 **Search Stores Based on City or Pincode**
  const handleSearch = () => {
    setSearchInitiated(true);
    let foundStores = [];

    if (selectedCity) {
      foundStores = locations.filter((store) => store.city.toLowerCase() === selectedCity.toLowerCase());
    } else if (selectedPincode) {
      foundStores = locations.filter((store) => store.pincode === selectedPincode);
    }

    if (foundStores.length === 0) {
      console.warn("❌ No stores found for the given search criteria.");
    }

    setFilteredStores(foundStores);
    onStoreSelect(selectedPincode || selectedCity, foundStores);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn-pop" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Select Your Location or Pincode</h2>

        {/* 🔍 **City Searchable Dropdown** */}
        <div className="form-group" ref={cityRef}>
          <label>Select City:</label>
          <input
            type="text"
            placeholder="Type a city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            onFocus={() => setShowCityDropdown(true)}
          />
          {showCityDropdown && filteredCities.length > 0 && (
            <div className="custom-dropdown">
              {filteredCities.map((city, index) => (
                <div key={index} className="dropdown-item" onClick={() => handleCitySelect(city)}>
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔽 **Pincode Searchable Dropdown** */}
        <div className="form-group" ref={pincodeRef}>
          <label>Select Pincode:</label>
          <input
            type="text"
            placeholder="Type a pincode"
            value={selectedPincode}
            onChange={(e) => setSelectedPincode(e.target.value)}
            onFocus={() => setShowPincodeDropdown(true)}
          />
          {showPincodeDropdown && filteredPincodes.length > 0 && (
            <div className="custom-dropdown">
              {filteredPincodes.map((pin, index) => (
                <div key={index} className="dropdown-item" onClick={() => handlePincodeSelect(pin)}>
                  {pin}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔎 **Search Button** */}
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch /> Search
        </button>

        {/* 📌 **Show Search Results** */}
        {searchInitiated && filteredStores.length === 0 && <p className="no-stores">No stores found.</p>}

        {filteredStores.length > 0 && (
          <div className="stores-list fade-in">
            <h4>Available Stores:</h4>
            {filteredStores.map((store, index) => (
              <div key={index} className="store-item">
                <strong>{store.city} - {store.pincode}</strong>
                <p><b>📍 Address:</b> {store.address}</p>
                <p><b>📞 Phone:</b> {store.phone}</p>
                <p><b>📧 Email:</b> {store.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationSearchPopup;
