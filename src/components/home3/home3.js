import {skeleton} from '../home3/skeleton-home3';
import styled from "styled-components";

const Container = styled.section`
  
  .box {
    display: flex;
    position: relative;
  
    img {
      width: 100%;
      height: 100%;
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
  .mobile{
    display: flex;
  }
  .desktop{
    display: none;
  }
  @media (min-width: 700px) {
    display: flex;
    
    .box{
      flex: 1;
      justify-content: center;

      img{
        min-height: 500px;
      }
    }
    .text{
      align-items: unset;
      
      h2{
        padding: 10px 0;
      }
      p{
        width: 90%;
        max-width: 400px;
        margin: 0 auto;
        font-size: 18px;
      }
    }
    .mobile{
    display: none;
  }
  .desktop{
    display: flex;
  }
  }
`;
export function Home3() {
  return (
    <Container>
      {skeleton.map((item,index) => (
        <div className="box">
          <img src={item.img} alt="graphic/photography" className='mobile'/>
          <img src={item.imgDesktop} alt="graphic/photography" className='desktop'/>
          <div className={index === 0 ? ' text graphic' : 'text photography'}>
            <h2>{item.title}</h2>
            <p>{item.p}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
