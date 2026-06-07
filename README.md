# Learning Management System — Frontend

This is the **frontend** for the Learning Management System, deployable to [Vercel](https://vercel.com).

It is a static site — pure HTML/CSS/JS, no build step required.

## Structure

```
frontend/
├── index.html                    ← Login / Register
├── dashboard-student.html        ← Student dashboard
├── dashboard-instructor.html     ← Instructor dashboard
├── dashboard-admin.html          ← Admin dashboard
├── dashboard-progress.html       ← Student progress view
├── js/
│   └── config.js                 ← API_URL config (change this for production)
└── vercel.json                   ← Vercel routing
```

## Configuring the Backend URL

Open `js/config.js` and change `window.API_URL`:

```javascript
// For local development:
window.API_URL = 'http://localhost:5000/api';

// For production (after deploying backend to Render):
window.API_URL = 'https://your-backend-name.onrender.com/api';
```

That single change updates all dashboards — no need to touch any HTML file.

## Local Development

Just open `index.html` in a browser, or run a simple static server:

```bash
# Python (if installed)
python3 -m http.server 3000

# Node
npx serve .
```

Then open `http://localhost:3000`.

**Important:** the backend (`../backend/`) must be running for the frontend to work.

## Deploying to Vercel

1. Push this `frontend/` folder to GitHub (or use the repo root with build path set to `/frontend`).
2. Sign in at [vercel.com](https://vercel.com) and click "Add New → Project".
3. Import your GitHub repo.
4. **Important — Project Settings:**
   - **Framework Preset:** "Other" (or leave blank)
   - **Root Directory:** `frontend` (if the repo has both `frontend/` and `backend/` folders)
   - **Build Command:** leave empty
   - **Output Directory:** leave empty (or `.`)
5. Click Deploy.
6. **Update `js/config.js`** with your Render backend URL, commit, push. Vercel will auto-redeploy.
7. **Copy your Vercel URL** (e.g. `https://versionai-frontend.vercel.app`) and set it as `FRONTEND_URL` in your Render backend's env vars, so CORS allows it.
