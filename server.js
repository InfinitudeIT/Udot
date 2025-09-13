// Node.js/Express Backend API for Job Applications
// Run with: node server.js

const express = require('express');
const XLSX = require('xlsx');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the Excel file (in the same directory as server.js)
const EXCEL_FILE_PATH = path.join(__dirname, 'applications.xlsx');

// Function to read existing Excel file or create new one
function readOrCreateExcel() {
  try {
    if (fs.existsSync(EXCEL_FILE_PATH)) {
      const workbook = XLSX.readFile(EXCEL_FILE_PATH);
      return workbook;
    } else {
      // Create new workbook with headers
      const newWorkbook = XLSX.utils.book_new();
      const headers = [
        'Name', 'Email', 'Phone', 'Job Role', 'Location', 
        'Experience', 'Cover Letter', 'Submitted At'
      ];
      const newWorksheet = XLSX.utils.aoa_to_sheet([headers]);
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Applications');
      return newWorkbook;
    }
  } catch (error) {
    console.error('Error reading Excel file:', error);
    throw error;
  }
}

// Function to append data to Excel file
function appendToExcel(applicationData) {
  try {
    const workbook = readOrCreateExcel();
    const worksheet = workbook.Sheets['Applications'];
    
    // Convert sheet to JSON to get existing data
    const existingData = XLSX.utils.sheet_to_json(worksheet);
    
    // Add new application data
    const newData = [...existingData, {
      'Name': applicationData.name,
      'Email': applicationData.email,
      'Phone': applicationData.phone,
      'Job Role': applicationData.jobRole,
      'Location': applicationData.location,
      'Experience': applicationData.experience,
      'Cover Letter': applicationData.coverLetter,
      'Submitted At': applicationData.submittedAt
    }];
    
    // Create new worksheet with updated data
    const updatedWorksheet = XLSX.utils.json_to_sheet(newData);
    workbook.Sheets['Applications'] = updatedWorksheet;
    
    // Write back to file
    XLSX.writeFile(workbook, EXCEL_FILE_PATH);
    
    console.log('Application data saved to Excel file');
    return { success: true, totalApplications: newData.length };
    
  } catch (error) {
    console.error('Error saving to Excel:', error);
    throw error;
  }
}

// API endpoint to submit job application
app.post('/api/submit-application', async (req, res) => {
  try {
    const applicationData = req.body;
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'jobRole', 'location'];
    const missingFields = requiredFields.filter(field => !applicationData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }
    
    // Save to Excel file
    const result = await appendToExcel(applicationData);
    
    res.json({
      success: true,
      message: 'Application submitted successfully',
      totalApplications: result.totalApplications
    });
    
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// API endpoint to get all applications (optional - for admin use)
app.get('/api/applications', (req, res) => {
  try {
    const workbook = readOrCreateExcel();
    const worksheet = workbook.Sheets['Applications'];
    const applications = XLSX.utils.sheet_to_json(worksheet);
    
    res.json({
      success: true,
      applications: applications
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API endpoints:`);
  console.log(`  POST /api/submit-application - Submit job application`);
  console.log(`  GET  /api/applications - Get all applications`);
  console.log(`  GET  /api/health - Health check`);
  console.log(`📁 Excel file will be created at: ${EXCEL_FILE_PATH}`);
});
