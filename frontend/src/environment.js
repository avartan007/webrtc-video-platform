let IS_PROD = true;
const server = IS_PROD ?
    (process.env.REACT_APP_SERVER_URL || "https://webrtc-video-platform-icjc.onrender.com") :
    "http://localhost:8000"

export default server;