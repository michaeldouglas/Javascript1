import { memo } from "react";

import video from './assets/video.mp4';

const VideoContainer: React.FC = () => {
  return (

    <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-0">
      <source src={video} type="video/mp4" />
    </video>

  )
}

export default memo(VideoContainer);