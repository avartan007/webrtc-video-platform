# WebRTC Video Conferencing Platform

A real-time video conferencing application built with modern web technologies. This platform enables peer-to-peer video communication with user authentication, meeting history tracking, and a responsive user interface.

## Project Overview

This is a full-stack application demonstrating proficiency in real-time communication protocols, WebRTC implementation, and full-stack JavaScript development. The application supports multiple concurrent video sessions with secure user authentication and persistent data storage.

## Tech Stack

**Frontend:**
- React 18.2.0
- React Router v6 (client-side routing)
- Socket.io Client (real-time signaling)
- Material-UI (responsive UI components)
- Axios (HTTP client)

**Backend:**
- Node.js with Express.js
- Socket.io (WebSocket communication)
- MongoDB with Mongoose (database)
- bcrypt (password hashing)
- CORS support

**Core Technology:**
- WebRTC (peer-to-peer video/audio)
- PeerJS (WebRTC abstraction)
- JWT Authentication

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup

```bash
cd backend
npm install
```

Configure environment variables in `.env`:
```
MONGODB_URI=your_mongodb_connection_string
PORT=8000
```

Start the backend server:
```bash
npm start        # Production mode
npm run dev      # Development mode with auto-reload
```

### Frontend Setup

```bash
cd frontend
npm install
```

Update the API endpoint in `src/environment.js` if needed.

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Key Features

- **Real-time Video Communication**: Peer-to-peer video calls using WebRTC
- **User Authentication**: Secure login and registration with bcrypt hashing
- **Meeting History**: Track and review past video sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Guest Access**: Join meetings without authentication
- **Live Signaling**: Socket.io-based call signaling and notifications

## Project Structure

```
backend/
├── src/
│   ├── app.js              # Express app initialization
│   ├── controllers/        # Business logic controllers
│   ├── models/            # MongoDB schemas
│   └── routes/            # API endpoints
└── package.json

frontend/
├── public/                # Static assets
├── src/
│   ├── pages/            # React page components
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React context for state management
│   ├── styles/           # CSS modules
│   └── utils/            # Helper functions
└── package.json
```

## Development

### Available Scripts

**Frontend:**
```bash
npm start      # Run development server
npm run build  # Create production build
npm test       # Run test suite
```

**Backend:**
```bash
npm start      # Production server
npm run dev    # Development server with hot-reload
npm run prod   # PM2 production deployment
```

## Deployment

The application is ready for deployment on platforms like:
- Vercel (Frontend)
- Render (Backend)
- Heroku
- AWS/Azure

## Author Notes

This project demonstrates full-stack development capabilities including:
- Real-time communication architecture
- WebRTC peer-to-peer protocols
- Responsive React component design
- RESTful API design
- Database design and management
- Authentication and security best practices

## License

ISC

---

**Last Updated:** February 2026
