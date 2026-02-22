# Deployment Guide: Render + Vercel

This guide walks you through deploying the WebRTC Video Conferencing Platform to Render (backend) and Vercel (frontend).

## Prerequisites

1. **GitHub Account** - Push your repository to GitHub
2. **MongoDB Atlas Account** - https://www.mongodb.com/cloud/atlas
3. **Render Account** - https://render.com
4. **Vercel Account** - https://vercel.com

---

## Step 1: MongoDB Atlas Setup

### 1.1 Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project (e.g., "WebRTC Video Platform")
4. Create a free cluster
5. Click **Connect** and choose **Drivers**
6. Copy your connection string (URI):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/videochatplatform?retryWrites=true&w=majority
   ```

### 1.2 Add Network Access

1. Go to **Network Access**
2. Click **Add IP Address**
3. Select **Allow access from anywhere** (0.0.0.0/0) for initial deployment
4. Later, restrict to Render's IPs for production

---

## Step 2: Push to GitHub

```bash
cd /Users/avartanathlay/Downloads/Apna-Zoom-Clone

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: WebRTC video platform"

# Add remote repository
git remote add origin https://github.com/yourusername/webrtc-video-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy Backend to Render

### 3.1 Create Render Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. Select **Deploy with GitHub**
4. Authorize and select your repository
5. Configure the service:
   - **Name:** `webrtc-video-platform-backend`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free tier (suitable for portfolio/testing)

### 3.2 Add Environment Variables

In the Render dashboard, add these environment variables:

```
MONGODB_URI = mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/videochatplatform?retryWrites=true&w=majority

NODE_ENV = production

FRONTEND_URL = https://your-frontend-vercel-url.vercel.app
```

### 3.3 Deploy

1. Click **Create Web Service**
2. Wait for deployment to complete
3. Copy your Render URL: `https://webrtc-video-platform-backend.onrender.com`

**Note:** Render free tier spins down after 15 mins of inactivity. Consider upgrading for production.

---

## Step 4: Deploy Frontend to Vercel

### 4.1 Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New...** → **Project**
3. Import your GitHub repository
4. Select the `frontend` folder as the **Root Directory**

### 4.2 Add Environment Variables

In the Environment Variables section, add:

```
REACT_APP_SERVER_URL = https://webrtc-video-platform-backend.onrender.com
```

### 4.3 Deploy

1. Click **Deploy**
2. Wait for deployment to complete
3. Your frontend URL will be: `https://webrtc-video-platform.vercel.app` (or custom)

---

## Step 5: Update Frontend Configuration

Update the backend URL in your frontend code:

**File:** `frontend/src/environment.js`

```javascript
let IS_PROD = true;
const server = IS_PROD ?
    process.env.REACT_APP_SERVER_URL || "https://webrtc-video-platform-backend.onrender.com" :
    "http://localhost:8000"

export default server;
```

### Redeploy Frontend

After updating the environment variable, Vercel will automatically rebuild and deploy.

---

## Step 6: Update Backend CORS

Update your backend to accept requests from your Vercel frontend:

**File:** `backend/src/app.js`

Ensure CORS is properly configured:

```javascript
app.use(cors({
    origin: [
        "http://localhost:3000",
        process.env.FRONTEND_URL || "https://your-frontend-url.vercel.app"
    ],
    credentials: true
}));
```

---

## Step 7: Test the Deployment

1. Visit your Vercel frontend URL
2. Try signing up and creating a video call
3. Check browser console for any errors
4. Check Render logs if backend issues occur

---

## Troubleshooting

### Backend not connecting
- Check MongoDB connection string in Render environment variables
- Verify IP whitelist in MongoDB Atlas (should include 0.0.0.0/0)
- Check Render logs: Dashboard → your-service → Logs

### Frontend can't reach backend
- Verify `REACT_APP_SERVER_URL` environment variable in Vercel
- Check CORS settings in backend app.js
- Ensure backend URL is correct in environment.js
- Check browser Network tab for failed API calls

### Cold start delays
- Render free tier has 15-min spindown. First request after idle takes ~30s
- Consider upgrading to paid plan for production

### MongoDB connection timeout
- Add 30-second timeout to MONGODB_URI:
  ```
  mongodb+srv://.../?retryWrites=true&w=majority&serverSelectionTimeoutMS=30000
  ```

---

## Production Optimization

For production deployment:

1. **Upgrade Render Plan** - Use Standard or Pro plan to avoid spindown
2. **Use Custom Domain** - Add your domain in both Render and Vercel settings
3. **MongoDB Atlas Sizing** - Upgrade cluster tier for production workloads
4. **Enable HTTPS** - Both platforms provide free SSL/TLS
5. **Set up Monitoring** - Use Render and Vercel monitoring tools
6. **Add CI/CD** - Both platforms support automatic deployments on git push

---

## Local Development

To test locally before deploying:

```bash
# Terminal 1: Backend
cd backend
npm install
npm run dev

# Terminal 2: Frontend
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`
Backend will run on `http://localhost:8000`

---

## Next Steps

- Set up custom domain
- Configure SSL certificate
- Monitor deployment health
- Set up error tracking (Sentry, etc.)
- Create CI/CD pipeline

---

**Last Updated:** February 2026
