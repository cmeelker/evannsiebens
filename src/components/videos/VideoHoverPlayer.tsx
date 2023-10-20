import { useRef } from "react";

const VideoHoverPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-full w-full"
    >
      <video ref={videoRef} loop muted className="h-full w-full object-cover">
        <source
          src="https://videos.ctfassets.net/0opxhh4wnmx1/5SQJrHYTi1Hso6rK1MPkap/977ab9727e051eba182e8e2a8e9bc48b/ezgif.com-gif-to-mp4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoHoverPlayer;
