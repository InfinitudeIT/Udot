# UrbanDot Careers - Backend Setup

## Quick Setup (Node.js Backend in Same Folder)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Both Frontend and Backend
```bash
# Option A: Run both together (recommended)
npm run dev

# Option B: Run separately in different terminals
# Terminal 1: Frontend
npm start

# Terminal 2: Backend
npm run server
```

### 3. Test the System
1. **Frontend:** http://localhost:3000/careers
2. **Backend API:** http://localhost:3001/api/health
3. **Fill out the form** and submit
4. **Check for `applications.xlsx`** file in your project root

## How It Works

- **Frontend (React):** Runs on port 3000
- **Backend (Express):** Runs on port 3001
- **Excel File:** `applications.xlsx` created automatically
- **Form Data:** Saved to Excel file when submitted

## File Structure
```
urbandot-couriers-chatbot/
├── server.js                 # Backend API server
├── applications.xlsx         # Generated Excel file (after first submission)
├── package.json             # Updated with backend dependencies
├── src/
│   └── components/
│       └── JobApplicationForm.js  # Updated form component
└── ...
```

## API Endpoints
- `POST /api/submit-application` - Submit job application
- `GET /api/applications` - Get all applications (admin)
- `GET /api/health` - Health check

## Troubleshooting

### If you get CORS errors:
- Make sure backend is running on port 3001
- Check browser console for errors

### If Excel file isn't created:
- Check server console for errors
- Verify file permissions in project folder

### If form submission fails:
- Check that both frontend and backend are running
- Verify API URL in JobApplicationForm.js
