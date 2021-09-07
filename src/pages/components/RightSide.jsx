import React from "react";
import styled from "styled-components";
import EachClub from "./EachClub";

export const Container = styled.div`
  width: 40%;
  margin-top: 19.2px;
  height: 100vh;
  /* height: 700px; */
  /* background-color: yellow; */

  display: flex;
  /* justify-content: center; */
`;

export const HolderClassificacao = styled.div`
  width: 347px;
  height: 357px;
  background-color: white;
  border: 1.2px solid #00000028;
  border-radius: 5px;
  margin-left: 100px;
  flex-shrink: 0;
  padding-left: 20px;
`;

export const Header = styled.div`
  margin-top: 10px;
  /* width: 347px; */
  /* height: 60px; */
  /* background-color: red; */
  /* background-color: white;
  border: 1.2px solid #00000028;
  border-radius: 5px;
  margin-left: 100px;
  flex-shrink: 0; */
`;

export const P = styled.p`
  margin: 0;
  margin-bottom: 5px;
  /* font-size: 17px; */
  /* margin-left: 10px; */
`;

export const P2 = styled.p`
  margin: 0;
  margin-bottom: 5px;
  /* margin-left: 10px; */
  margin-right: 10px;
  margin-top: 10px;
  font-size: 14px;
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 62px);
  /* height: calc(100% - 60px); */
  /* background-color: #990099; */
`;

export const FirstRow = styled.div`
  height: 50px;
  /* display: flex; */
  /* flex-direction: row; */
`;

export const Line = styled.div`
  /* width: 100%; */

  /* width: calc(100% - 40px); */
  /* padding: 0 10px; */
  height: 1px;
  background-color: #dcdcdc;

  /* margin: 0 auto; */
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 20px;
`;

const RightSide = () => {
  return (
    <Container>
      <HolderClassificacao>
        <Header>
          <P>Rodada 18</P>
          <P style={{ fontSize: "21px", fontWeight: "bold", color: "#1dae57" }}>
            Campeonato Brasileiro 2021
          </P>
        </Header>
        <Body>
          <FirstRow>
            <P2 style={{ float: "left" }}>Classificação</P2>
            <P2 style={{ float: "right", marginRight: "10px" }}>P</P2>
            <P2 style={{ float: "right" }}>Últ. Jogos</P2>
          </FirstRow>
          <Line></Line>
          <EachClub></EachClub>
        </Body>
      </HolderClassificacao>
    </Container>
  );
};

export default RightSide;
