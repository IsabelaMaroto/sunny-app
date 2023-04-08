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
    padding: 20px;
  }
`;

const BoxLogo = styled.div`
  svg {
    height: fit-content;
    width: fit-content;
  }
`;

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
    color: hsl(213, 9%, 39%);

    li {
      padding: 20px 0;
      cursor: pointer;
    }
    li:hover {
      background-color: hsl(0, 0%, 91%);
    }

    @media (max-width: 700px) {
      display: ${MenuOpen ? "flex" : "none"};
      flex-direction: column;
      position: absolute;
      justify-content: center;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background-color: hsl(0, 0%, 100%);
      width: 90%;
      overflow: hidden;
      z-index: 100;
      min-height: 320px;

      #contacts {
        background-color: hsl(51, 100%, 49%);
        border-radius: 50px;
        width: 40%;
        margin: 10px auto;
        font-family: "Fraunces", serif;
        color: hsl(212, 27%, 19%);
        text-transform: uppercase;
        font-size: 14px;
      }
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
        <div>
          <List>
            <li className="li">About</li>
            <li>Services</li>
            <li>Projects</li>
            <li id="contacts">Contact</li>
          </List>
          <MenuBox className="menu-box" onClick={toggleMenu}>
            <Menu />
          </MenuBox>
        </div>
      </div>
    </ContainerHeader>
  );
}
