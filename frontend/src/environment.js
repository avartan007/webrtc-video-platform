let IS_PROD = false;
const server = IS_PROD ?
    (process.env.REACT_APP_SERVER_URL || "https://backend.videochatplatform.com") :
    "http://localhost:8000"

export default server;