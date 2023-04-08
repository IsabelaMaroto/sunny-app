import styled from "styled-components";
import HamburguerIcon from '../../images/icon-hamburger.svg';

const Hamburguer = styled.div`
  width: 100%;
  min-height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
 
`;
export function Menu() {
  return (
    <Hamburguer>
      <img src={HamburguerIcon} alt="Menu icon"/>
    </Hamburguer>
  );
}
