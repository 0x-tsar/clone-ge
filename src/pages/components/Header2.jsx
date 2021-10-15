import React, { useState } from "react";
import styled from "styled-components";
// import { logo } from "../../../public/ge_logo.png";
// import logo from "./ge_logo.png";
// import Logo from "./Logo.png";

// import card1 from "./card1.png";

export const Container = styled.div`
  background-color: #06aa48;
  grid-area: header2;
  display: flex;
  align-items: center;
  color: white;
`;

export const Logo = styled.h1`
  color: white;
  font-size: 40px;
  cursor: pointer;
`;

export const Holder = styled.div`
  /* width: 50%; */
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Menus = styled.div`
  /* background-color: blue; */
  /* padding-left: 100px; */
  /* margin-left: 100px; */
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  /* :hover {
    background-color: black;
  } */
`;

export const LittleWindow = styled.div`
  width: 330px;
  height: 320px;
  background-color: white;
  border-radius: 2px;
  z-index: 0;
  position: absolute;
  left: 90px;
  top: 110px;
  border: 1px solid #00000057;
  display: ${(props) => (props.windowVisibility ? "block" : "none")};

  /* transform: translate(1px, 2px);
  animation-duration: 4s;
  transition-duration: 4s; */
`;

// export const Div = styled.div`
//   background-color: red;

//   /* :hover {
//     :nth-child(1) {
//       background-color: blue;
//     }
//   } */
// `;

const Header2 = () => {
  const [windowVisibility, setWindowVisibility] = useState(false);

  return (
    <Container>
      <Menus>Menu</Menus>
      <Menus
        onMouseEnter={() => {
          setWindowVisibility(true);
        }}
        onMouseLeave={() => {
          setWindowVisibility(false);
        }}
      >
        Times
      </Menus>

      <LittleWindow windowVisibility={windowVisibility} />

      <Holder>
        <Logo>ge</Logo>
      </Holder>
    </Container>
  );
};

export default Header2;
