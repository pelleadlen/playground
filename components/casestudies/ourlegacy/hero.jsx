import { Video } from "./styled/styledHero";

const Hero = () => {
  return (
    <Video muted playsInline loop autoPlay>
      <source
        src="https://res.cloudinary.com/pellux/video/upload/v1655921345/Mobile-promo_qi1ywn.mp4"
        type="video/mp4"
      />
    </Video>
  );
};

export default Hero;
