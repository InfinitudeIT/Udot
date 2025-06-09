
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
  // const validLocations = formattedData.filter(loc => loc.city && loc.pincode);
  //  setLocations(validLocations);


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

      // 📌 Convert Rows into Object Format based on updated structure
      const formattedData = jsonData.slice(1).map((row) => ({
        city: row[1]?.toString().trim() || "",    // Outlet location
        phone: row[2]?.toString().trim() || "N/A", // NUMBER
        email: row[3]?.toString().trim() || "N/A", // MAIL
        address: row[4]?.toString().trim() || "N/A", // Outlet address
        pincode: row[5]?.toString().trim() || "",  // PIN CODE
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
    
          {/* Scrollable section */}
          <div className="popup-body">
            {/* City Dropdown */}
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
    
            {/* Pincode Dropdown */}
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
    
            {/* Search Button */}
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch /> Search
            </button>
    
            {/* Display Search Results */}
            {searchInitiated && filteredStores.length === 0 && <p className="no-stores">No stores found.</p>}
    
            {filteredStores.length > 0 && (
              <div className="stores-list fade-in">
                <h4>Available Stores:</h4>
                {filteredStores.map((store, index) => (
                  <div key={index} className="store-item">
                    <strong>{store.city} - {store.pincode}</strong>
                    <p><b>📍 Address:</b> {store.address}</p>
                    {/* <p><b>📞 Phone:</b> {store.phone}</p>
                    <p><b>📧 Email:</b> {store.email}</p> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
export default LocationSearchPopup;
