import { ContentfulVideo } from "@/models/Video";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export function GridVideoPlayer({ video }: { video: ContentfulVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const { ref, inView } = useInView({
    rootMargin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    } else {
      setIsTouchDevice(false);
    }
  }, []);

  useEffect(() => {
    if (inView && isTouchDevice) {
      Play();
    } else {
      Pause();
    }
  }, [inView, isTouchDevice]);

  function Play() {
    if (videoRef.current) {
      var isPlaying =
        videoRef.current.currentTime > 0 &&
        !videoRef.current.paused &&
        !videoRef.current.ended &&
        videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;

      if (!isPlaying) {
        videoRef.current.play();
      }
    }
  }

  function Pause() {
    if (videoRef.current) {
      var isPlaying =
        videoRef.current.currentTime > 0 &&
        !videoRef.current.paused &&
        !videoRef.current.ended &&
        videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;

      if (isPlaying) {
        videoRef.current.pause();
      }
    }
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isTouchDevice && Play()}
      onMouseLeave={() => !isTouchDevice && Pause()}
      className="h-full w-full"
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={video.url} type="video/mp4" title={video.caption} />
      </video>
    </div>
  );
}

export default GridVideoPlayer;
