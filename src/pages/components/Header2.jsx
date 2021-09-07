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
  width: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Header2 = () => {
  return (
    <Container>
      <div
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
      </div>
      <div style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" }}>
        Times
      </div>

      <Holder>
        <Logo>ge</Logo>
      </Holder>

      {/* <img src={logo}></img> */}

      {/* <Logo src={logo} /> */}
    </Container>
  );
};

export default Header2;
