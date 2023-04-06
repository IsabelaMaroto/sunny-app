import HeaderImg from "../../images/mobile/image-header.jpg";
import HeaderImgDesktop from "../../images/desktop/image-header.jpg";
import Arrow from "../../images/icon-arrow-down.svg";
import EggImg from "../../images/mobile/image-transform.jpg";
import PinkImg from "../../images/mobile/image-stand-out.jpg";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
.orange-mobile {
  display: block;
  height: 100%;
  width: 100%;
}
.orange-desktop {
  display: none;
}
.title {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  color: hsl(0, 0%, 100%);
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  letter-spacing: 5px;
}
.arrow {
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -52%);
}
.eggs {
  img {
    height: 100%;
    width: 100%;
  }
}
.text-div {
  padding: 20px;
  text-align: center;
  color: hsl(212, 27%, 19%);
  h2 {
    font-size: 32px;
    font-weight: 900;

    margin: 20px 0;
  }
  p {
    font-family: "Barlow", sans-serif;
    color: hsl(232, 10%, 55%);
    width: 90%;
    margin: 0 auto;
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
  h3 {
    position: relative;
    padding: 20px 0;
    text-transform: uppercase;
    width: fit-content;
    margin: 0 auto;
    font-weight: 900;
    cursor: pointer;
  }
  .color-yellow::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -65%);
    display: block;
    width: 120%;
    height: 10px;
    border-radius: 10px;
    filter: opacity(40%);
    background-color: hsl(51, 100%, 49%);
  }
  .color-pink::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -65%);
    display: block;
    width: 120%;
    height: 10px;
    border-radius: 10px;
    filter: opacity(40%);
    background-color: hsl(7, 99%, 70%);
  }
  h3:hover::after {
    filter: opacity(100%);
  }

}
@media (min-width: 500px) {
  .orange-mobile {
    display: none;
  }
  .orange-desktop {
    display: block;
    width: 100%;
  }
  .flex-change {
    display: flex;
  }
}
`;
export function Main() {
 

  return (
    <Container>
      <>
        <img src={HeaderImg} alt="orange" className="orange-mobile" />
        <img src={HeaderImgDesktop} alt="orange" className="orange-desktop" />
        <h1 className="title">We are creatives</h1>
        <img src={Arrow} alt="arrow down" className="arrow" />
      </>
      <div className="flex-change">
        <div className="eggs">
          <img src={EggImg} alt="eggs" />
        </div>
        <div className="text-div">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h3 className="color-yellow">Learn more</h3>
        </div>
      </div>
      <div className="flex-change">
        <div className="eggs">
          <img src={PinkImg} alt="background pink" />
        </div>
        <div className="text-div teste">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <h3 className="color-pink">Learn more</h3>
        </div>
      </div>
    </Container>
  );
}
