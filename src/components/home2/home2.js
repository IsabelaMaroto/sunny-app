import { skeleton } from "./skeleton-home2";
import styled from "styled-components";

const Container = styled.section`
  .img {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .text-div {
    padding: 20px;
    text-align: center;
    color: hsl(212, 27%, 19%);

    p {
      color: hsl(232, 10%, 55%);
      width: 90%;
      margin: 0 auto;
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
  .mobile {
    display: flex;
  }
  .desktop {
    display: none;
  }
  @media (min-width: 700px) {
    .mobile {
      display: none
    }
    .desktop {
      display: flex;
    }
    .flex-change {
      display: flex;
      height: 100%;

      .img {
        flex: 1;
        min-width: 50%;
      }
      .text-div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        margin: auto 0;
        margin-left: 8%;
        max-height: 500px;

        h3 {
          margin: 0;
        }
        p {
          margin: 0;
          padding: 20px 0;
        }
      }
    }
    .reverse {
      flex-direction: row-reverse;
    }
  }
`;

export function Home2() {
  return (
    <Container>
      {skeleton.map((item, index) => (
        <div className={index === 0 ? "flex-change reverse" : "flex-change"}>
          <div className="img">
            <img src={item.img} alt="background" className="mobile" />
            <img src={item.imgDesktop} alt="background" className="desktop" />
          </div>
          <div className="text-div">
            <h2>{item.title}</h2>
            <p>{item.p}</p>
            <h3 className={index === 0 ? "color-yellow" : "color-pink"}>
              {item.subtitle}
            </h3>
          </div>
        </div>
      ))}
    </Container>
  );
}
