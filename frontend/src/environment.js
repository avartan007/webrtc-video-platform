let IS_PROD = true;
const server = IS_PROD ?
    (process.env.REACT_APP_SERVER_URL || "https://backend.videochatplatform.com") :
    "http://localhost:8000"

export default server;