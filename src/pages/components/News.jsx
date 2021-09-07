import React from "react";
import styled from "styled-components";
import VideosHolder from "./VideosHolder";
import GameReports from "./GameReports";
import RightSide from "./RightSide";

export const Container = styled.div`
  /* background-color: cyan; */
  /* height: fit-content; */
  /* margin: auto; */

  grid-area: news;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  padding: 20px 200px;

  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10px 20px;
  grid-template-areas: ; */
`;

export const LeftSide = styled.div`
  /* width: 60%; */
  width: 70%;
  height: 700px;
`;

export const Line = styled.div`
  background-color: #d8d8d8;
  width: 100;
  height: 1px;
  margin: 0 20px;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const News = () => {
  return (
    <Container>
      <LeftSide>
        <VideosHolder></VideosHolder>
        <Line></Line>
        <GameReports></GameReports>
      </LeftSide>
      <RightSide></RightSide>
    </Container>
  );
};

export default News;
