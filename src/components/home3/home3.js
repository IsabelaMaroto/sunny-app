import {skeleton} from '../home3/skeleton-home3';
import styled from "styled-components";

const Container = styled.section`
  
  .box {
    display: flex;
    position: relative;
  
    img {
      width: 100%;
      height: max-content;
    }

    .text {
      position: absolute;
      top: 90%;
      transform: translateY(-90%);
      text-align: center;
      margin-bottom: 0px;
    }
    .graphic {
      color: hsl(167, 40%, 24%);
    }
    .photography {
      color: hsl(198, 62%, 26%);
    }
  }
  
@media (min-width: 500px) {
  display: flex;
}
`;
export function Home3() {
  return (
    <Container>
      {skeleton.map((item,index) => (
        <div className="box">
          <img src={item.img} alt="graphic/photography" />
          <div className={index === 0 ? ' text graphic' : 'text photography'}>
            <h2>{item.title}</h2>
            <p>{item.p}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
