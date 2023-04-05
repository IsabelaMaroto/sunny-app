import styled from "styled-components";

const Hamburguer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
`;
const Burguer = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;
export function Menu() {
  return (
    <Hamburguer>
      <Burguer ></Burguer>
      <Burguer ></Burguer>
      <Burguer ></Burguer>
    </Hamburguer>
  );
}
