import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledHero = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .container-hero-img {
    width: 100%;
    max-width: 450px;
    order: 1;
    min-height: 300px;
    background-image: url(${images.imageHeroMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  .container-hero-copy {
    height: 100%;
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 2.15rem;
    margin-bottom: 1%.5;
  }

  .copy {
    max-width: 350px;
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 1.5rem 0.5rem;
    color: var(--gray);
  }

  .container-clients {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
    margin-bottom: 4rem;
  }

  .client-img {
    width: 70px;
  }

  .audiophile {
    width: 55px;
  }

  @media (min-width: 400px) {
    .title {
      font-size: 2.5rem;
      margin-bottom: 1%.5;
    }

    .copy {
      max-width: 400px;
      font-size: 1.15rem;
      line-height: 2rem;
    }

    .container-hero-img {
      min-height: 350px;
    }
  }

  @media (min-width: 800px) {
    height: none;

    .container-hero-img {
      min-height: 700px;
      max-width: 800px;
    }

    .title {
      font-size: 3.5rem;
    }

    .copy {
      max-width: 575px;
      font-size: 1.25rem;
      line-height: 2rem;
      padding: 2rem 0;
    }

    .container-clients {
      margin-bottom: 4rem;
      margin-top: 6rem;
    }
  }

  @media (min-width: 1280px) {
    width: 100%;
    flex-direction: row;
    text-align: left;
    justify-content: center;
    gap: 5rem;
    padding-top: 3rem;
    padding-bottom: 3rem;

    .container-hero-copy {
      width: 45%;
      max-height: 600px;
      max-width: 500px;
      order: 1;
      height: auto;
      align-items: flex-start;
    }

    .container-hero-img {
      order: 2;
      width: 35%;
      max-width: 450px;
      min-height: 600px;
      max-height: 600px;
      background-image: url(${images.imageHeroDesktop});
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 1.5rem;
      margin: 0;
    }

    .title {
      max-width: 425px;
      font-size: 4rem;
      margin-top: 6rem;
    }

    .copy {
      padding: 2rem 0;
      margin-bottom: 2rem;
    }

    .container-clients {
      margin-top: 6rem;
      justify-content: center;
      gap: 4.5rem;
    }
  }

  @media (min-width: 1400px) {
    gap: 8rem;
    .container-hero-img {
      max-width: 550px;
      min-height: 650px;
      max-height: 650px;
    }

    .title {
      max-width: 475px;
      font-size: 4.5rem;
      margin-top: 8rem;
    }

    .container-clients {
      margin-top: 7rem;
    }
  }

  @media (min-width: 1600px) {
    .container-hero-copy {
      width: 45%;
      max-height: 700px;
      max-width: 500px;
      order: 1;
      height: auto;
      align-items: flex-start;
    }

    .container-hero-img {
      max-width: 700px;
      max-height: 700px;
    }

    .title {
      max-width: 475px;
      margin-top: 6rem;
    }

    .container-clients {
      margin-top: 10rem;
    }
  }
`;
