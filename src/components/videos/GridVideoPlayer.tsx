import { ContentfulVideo } from "@/models/Video";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export function GridVideoPlayer({
  video,
  preload,
}: {
  video: ContentfulVideo;
  preload?: boolean;
}) {
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
      videoRef.current.play();
    }
  }

  function Pause() {
    if (videoRef.current) {
      videoRef.current.pause();
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
        preload={preload ? "auto" : "none"}
        className="h-full w-full object-cover"
      >
        <source src={video.url} type="video/mp4" title={video.caption} />
      </video>
    </div>
  );
}

export default GridVideoPlayer;
