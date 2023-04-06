import styled from "styled-components";
import { Menu } from "./menu";
import { useState } from "react";
import Logo from "../../images/logo.svg";

const ContainerHeader = styled.div`
  width: 100%;
  position: absolute;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

const BoxLogo = styled.div`
  svg {
    height: fit-content;
    width: fit-content;
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
    font-family: "Barlow", sans-serif;
    text-align: center;

    @media (max-width: 700px) {
      display: ${MenuOpen ? "inline" : "none"};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: hsl(0, 0%, 100%);
      max-width: 90%;
      overflow: hidden;
      margin-top: 50px;
    }
  `;

  const MenuBox = styled.div`
    display: none;

    @media (max-width: 700px) {
      display: fixed;
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
