import { Container } from "react-bootstrap";
import "./videoSection.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";

const VideoSection = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        videoToggle &&
        videoContainerRef.current &&
        !videoContainerRef.current.contains(event.target as Node)
      ) {
        setVideoToggle(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [videoToggle]);

  return (
    <>
      <div className="video-section-container">
        <Container className="content-container">
          <div className="content-left">
            <h2>
              Clean and modern <br /> Manlab clinic
            </h2>
          </div>
          <div className="content-right">
            <p>
              That cup of tea gutted mate I such a fibber I'm <br /> telling
              give us a bell.
            </p>
            <button>Book Appointment &#8594;</button>
          </div>
        </Container>
      </div>
      <Container
        className="video-container"
        ref={videoContainerRef}
        onClick={() => setVideoToggle(!videoToggle)}
      >
        <img src="/img_video_clinic.png" alt="video" />
        <button onClick={() => setVideoToggle(!videoToggle)}>
          <BsFillPlayFill />
        </button>
      </Container>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yDSNJr__OiQ?si=1pNffvU7hPQMcl6s"
        title="YouTube video player"
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={videoToggle ? "show yt-iframe" : "hide"}
      ></iframe>
      {videoToggle && <div className="overlay"></div>}
    </>
  );
};

export default VideoSection;
