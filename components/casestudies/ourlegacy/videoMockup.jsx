import { Video } from "./styled/styledVideoMockup";

const VideoMockup = () => {
  return (
    <Video muted playsInline loop autoPlay>
      <source
        src="https://res.cloudinary.com/pellux/video/upload/v1659547800/ourlegacy_lmmadt.mp4"
        type="video/mp4"
      />
    </Video>
  );
};

export default VideoMockup;
