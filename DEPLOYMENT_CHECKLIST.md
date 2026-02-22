# Deployment Checklist

## Pre-Deployment ✓

- [ ] Code is pushed to GitHub
- [ ] No sensitive credentials in code (all in .env)
- [ ] MongoDB Atlas account created
- [ ] MongoDB connection string obtained
- [ ] Render account created
- [ ] Vercel account created

## Backend Deployment (Render)

- [ ] Create Render Web Service from GitHub
- [ ] Configure environment variables:
  - [ ] `MONGODB_URI` - Your MongoDB Atlas connection string
  - [ ] `FRONTEND_URL` - Your Vercel frontend URL
  - [ ] `NODE_ENV` - Production
- [ ] Verify backend deployment succeeded
- [ ] Copy Render backend URL

## Frontend Deployment (Vercel)

- [ ] Import frontend project to Vercel
- [ ] Set root directory to `frontend`
- [ ] Add environment variable:
  - [ ] `REACT_APP_SERVER_URL` - Your Render backend URL
- [ ] Verify frontend deployment succeeded
- [ ] Copy Vercel frontend URL

## Post-Deployment Testing

- [ ] Visit frontend URL in browser
- [ ] Test user authentication (signup/login)
- [ ] Test video call functionality
- [ ] Check browser console for errors
- [ ] Test from mobile device
- [ ] Check Render logs for backend errors

## Production Optimization

- [ ] Update MongoDB Atlas IP whitelist (production)
- [ ] Configure custom domain (optional)
- [ ] Set up SSL certificate
- [ ] Enable analytics/monitoring
- [ ] Create database backups plan
- [ ] Document deployment process

---

## Quick Links

| Component | Platform | URL |
|-----------|----------|-----|
| Frontend | Vercel | https://your-app.vercel.app |
| Backend | Render | https://your-backend.onrender.com |
| Database | MongoDB Atlas | https://atlas.mongodb.com |
| Source Code | GitHub | https://github.com/username/repo |

---

Last deployed: [Date]
Deployed by: [Your Name]
