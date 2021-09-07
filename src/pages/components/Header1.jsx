import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f3f3;
  grid-area: header1;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Separator = styled.div`
  width: 1.2px;
  height: 11px;
  background-color: #dddddd;
  margin-left: 10px;
`;

export const Item = styled.div`
  color: #005cef;
  font-weight: bold;
  margin-left: 5px;
  font-size: 16px;
  cursor: pointer;

  :hover {
  }
`;

const Header1 = () => {
  return (
    <Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "0 300px",
          flexDirection: "row",
        }}
      >
        <Item>globo.com</Item>
        <Separator />
        <Item style={{ color: "#A80000" }}>g1</Item>
        <Separator />
        <Item style={{ color: "#06aa48" }}>ge</Item>
        <Separator />
        <Item style={{ color: "#ff7f00" }}>gshow</Item>
        <Separator />
        <Item>vídeos</Item>
      </div>
    </Container>
  );
};

export default Header1;
