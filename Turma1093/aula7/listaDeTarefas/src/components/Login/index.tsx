import VideoContainer from "./VideoContainer";
import LoginContainer from "./LoginContainer";
import { useEffect, useState } from "react";

const Login: React.FC = () => {
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    setShowVideo(import.meta.env.VITE_SHOW_VIDEO == 'true');
  }, []);

  return (
    <div className="px-2 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      {showVideo && <VideoContainer></VideoContainer>}
      <LoginContainer></LoginContainer>
    </div>

  )
}

export default Login;