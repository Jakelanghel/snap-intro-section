import { StyledHero } from "./Hero.Styled";
import { StyledButton } from "../../components/button/Button.Styled";
import { images } from "../../constants/images";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container-hero-copy">
        <h1 className="title">Make remote work</h1>

        <p className="copy">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <StyledButton>Learn More</StyledButton>

        <div className="container-clients">
          <img
            src={images.clientDatabiz}
            alt="databiz client"
            className="client-img"
          />
          <img
            src={images.clientAudiophile}
            alt="audiophile client"
            className="client-img audiophile"
          />
          <img
            src={images.clientMeet}
            alt="meet client"
            className="client-img"
          />
          <img
            src={images.clientMaker}
            alt="maker client"
            className="client-img"
          />
        </div>
      </div>

      <div className="container-hero-img"></div>
    </StyledHero>
  );
};

export default Hero;
