// js/config.js — Frontend Configuration (Single Source of Truth)
//
// Automatically toggles the API destination depending on where the app is running.
// LOCAL DEVELOPMENT:  http://localhost:5000/api
// PRODUCTION (Render): https://lms-backend-l8go.onrender.com/api

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

window.API_URL = isLocalhost 
  ? 'http://localhost:5000/api' 
  : 'https://lms-backend-l8go.onrender.com/api';

// Cloudinary settings used by the instructor dashboard upload widget
window.CLOUDINARY_CLOUD_NAME    = 'dvq1gxoqi';
window.CLOUDINARY_UPLOAD_PRESET = 'versionai';

// Diagnostic log to confirm routing in the browser console
console.log(`🌐 Frontend presentation layer initialized targeting API: ${window.API_URL}`);