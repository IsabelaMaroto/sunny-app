import HeaderImg from "../../images/mobile/image-header.jpg";
import HeaderImgDesktop from "../../images/desktop/image-header.jpg";
import Arrow from "../../images/icon-arrow-down.svg";

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
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    color: hsl(0, 0%, 100%);
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    letter-spacing: 5px;
  }
  .arrow {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 500px) {
    .orange-mobile {
      display: none;
    }
    .orange-desktop {
      display: block;
      width: 100%;
    }
  }
`;
export function Home1() {
  return (
    <Container>
      <>
        <img src={HeaderImg} alt="orange" className="orange-mobile" />
        <img src={HeaderImgDesktop} alt="orange" className="orange-desktop" />
        <h1 className="title">We are creatives</h1>
        <img src={Arrow} alt="arrow down" className="arrow" />
      </>
    </Container>
  );
}
