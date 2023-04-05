import styled from "styled-components";
import { Menu } from "./menu";
import { useState } from "react";
import Logo from "../../images/logo.svg";

const ContainerHeader = styled.div`

  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  position: absolute;
  max-height: 50px;
  width: 100%;
`;

const BoxLogo = styled.div`
  svg {
    height: 50px;
    width: 50px;
  }
`;

const BoxList = styled.div``;
export function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    float: right;
    margin: 0px;
    padding: 0px;
    overflow: hidden;

    @media (max-width: 700px) {
      display: ${MenuOpen ? "inline" : "none"};
      background-color: hsl(0, 0%, 100%);
      width: 90%;
      margin-top: 50px;
      position: fixed;
    }
  `;

  const MenuBox = styled.div`
    display: none;
    z-index: 6;

    @media (max-width: 700px) {
      display: fixed;
      padding-top: 10px;
      margin-left: 10px;
      z-index: 6;
    }
  `;
  return (
    <ContainerHeader className="container-header">
      <div className="flex">
        <BoxLogo>
          <img src={Logo} alt="logo Sunnyside" />
        </BoxLogo>
        <BoxList>
          <List>
            <li className="li">About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contacts</li>
          </List>
          <MenuBox className="menu-box" onClick={toggleMenu}>
            <Menu />
          </MenuBox>
        </BoxList>
      </div>
    </ContainerHeader>
  );
}
