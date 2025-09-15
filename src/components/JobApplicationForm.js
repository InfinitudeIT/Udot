import React, { useState, useEffect } from 'react';
import { FaUser, FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import '../css/JobApplicationForm.css';

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
    location: '',
    experience: '',
    coverLetter: ''
  });
  
  const [locations, setLocations] = useState([]);
  const [jobRoles, setJobRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

  // Load locations from Excel file
  useEffect(() => {
    const loadLocations = async () => {
      try {
        console.log('Starting to fetch Excel file...');
        const response = await fetch(`/locations.xlsx?t=${Date.now()}`);
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const arrayBuffer = await response.arrayBuffer();
        console.log('ArrayBuffer size:', arrayBuffer.byteLength);
        
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        console.log('Workbook sheet names:', workbook.SheetNames);
        
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log('Excel data loaded successfully, rows:', data.length);
        
        console.log('Excel data loaded:', data); // Debug log
        console.log('Number of rows:', data.length);
        
        if (data.length === 0) {
          throw new Error('No data found in Excel file');
        }
        
        // Log the first few rows to see the structure
        console.log('First 3 rows of Excel data:', data.slice(0, 3));
        console.log('All column names:', Object.keys(data[0]));
        
        // Extract locations from the first column
        const firstColumnKey = Object.keys(data[0])[0];
        console.log('First column key:', firstColumnKey);
        console.log('Sample data from first column:', data.slice(0, 10).map(row => row[firstColumnKey]));
        
        // Get all values from first column and filter out empty/null/undefined
        const allFirstColumnValues = data.map(row => row[firstColumnKey]);
        console.log('All first column values (first 20):', allFirstColumnValues.slice(0, 20));
        console.log('Total first column values:', allFirstColumnValues.length);
        
        // Filter out falsy values (null, undefined, empty string, etc.)
        const filteredValues = allFirstColumnValues.filter(value => 
          value !== null && 
          value !== undefined && 
          value !== '' && 
          String(value).trim() !== ''
        );
        console.log('Filtered values (first 20):', filteredValues.slice(0, 20));
        console.log('Total filtered values:', filteredValues.length);
        
        let uniqueLocations = [...new Set(filteredValues)];
        console.log(`Found locations from first column "${firstColumnKey}":`, uniqueLocations); // Debug log
        console.log('Number of unique locations:', uniqueLocations.length);
        
        if (uniqueLocations.length === 0) {
          console.log('No locations found in first column, using fallback locations');
          uniqueLocations = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Noida', 'Gurgaon', 'Pune'];
        }
        
        console.log('Final locations to set:', uniqueLocations);
        setLocations(uniqueLocations);
      } catch (error) {
        console.error('Error loading locations:', error);
        // Fallback locations if Excel fails to load
        setLocations(['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Noida', 'Gurgaon', 'Pune']);
      } finally {
        setIsLoadingLocations(false);
      }
    };

    loadLocations();
  }, []);

  // Define job roles
  useEffect(() => {
    setJobRoles([
      'Marketing Executive',
      'Business Development Manager',
      'Operations Executive',
      'Customer Support Specialist',
      'Sales Executive',
      'Logistics Coordinator',
      'Warehouse Manager',
      'Delivery Executive'
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Prepare form data for API
      const applicationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        jobRole: formData.jobRole,
        location: formData.location,
        experience: formData.experience,
        // coverLetter: formData.coverLetter,
        submittedAt: new Date().toISOString()
      };

      console.log('Submitting application data:', applicationData);

      // Send data to backend API
      // FastAPI backend
      const API_BASE_URL = "https://api.urbandot.in"
      const response = await fetch(`${API_BASE_URL}/careers/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Application submitted successfully:', result);
      
      // setSubmitMessage('Application submitted successfully! We will get back to you soon.');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobRole: '',
        location: '',
        experience: ''
        // coverLetter: ''
      });
      
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitMessage('Error submitting application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="job-application-form">
      <div className="form-container">
        <h2>Apply for a Position</h2>
        <p className="form-description">
          Fill out the form below and we'll get back to you soon.
        </p>
        
        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="form-icon" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="form-icon" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone className="form-icon" />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">
                <FaBriefcase className="form-icon" />
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              >
                <option value="">Select experience</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-2 years">1-2 years</option>
                <option value="2-3 years">2-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="jobRole">
                <FaBriefcase className="form-icon" />
                Job Role *
              </label>
              <select
                id="jobRole"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a job role</option>
                {jobRoles.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="location">
                <FaMapMarkerAlt className="form-icon" />
                Preferred Location *
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                disabled={isLoadingLocations}
              >
                <option value="">
                  {isLoadingLocations ? "Loading locations..." : "Select a location"}
                </option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
              {!isLoadingLocations && locations.length > 0 && (
                <small style={{ color: '#666', fontSize: '12px' }}>
                  {locations.length} locations available
                </small>
              )}
            </div>
          </div>

          {/* <div className="form-group">
            <label htmlFor="coverLetter">
              <FaFileAlt className="form-icon" />
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows="5"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            />
          </div> */}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default JobApplicationForm;
