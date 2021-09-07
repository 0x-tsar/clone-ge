import React from "react";
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
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Menus = styled.div`
  background-color: blue;
`;

export const Div = styled.div`
  background-color: red;

  /* :hover {
    :nth-child(1) {
      background-color: blue;
    }
  } */
`;

const Header2 = () => {
  return (
    <Container>
      {/* <Div
        onMouseEnter={() => {}}
        onMouseOut={() => {}}
        style={{
          marginRight: "20px",
          // marginLeft: "20px",
          fontSize: "18px",
          cursor: "pointer",
          // width: "100%",
          // display: "flex",
          paddingLeft: "310px",
          // flexDirection: "row",
        }}
      >
        Menu
      </Div>

      <Div style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" }}>
        Times
      </Div> */}

      <Holder>
        <Logo>ge</Logo>
      </Holder>
    </Container>
  );
};

export default Header2;
