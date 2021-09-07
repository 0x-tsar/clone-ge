import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin-left: 110px;
  align-items: center;
  /* flex-direction: row; */
  /* background-color: black; */
`;

export const Marks = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  margin: 2px;
  background-color: #4cb319;
`;

const handleColor = (color) => {
  if (color === 0) {
    return "#c72d22";
  } else if (color === 1) {
    return "#b6b6b6";
  } else {
    return "#4cb319";
  }
};

const ScoreGames = (scores) => {
  return (
    <Container>
      <Marks style={{ backgroundColor: handleColor(scores.scores[0]) }}></Marks>
      <Marks style={{ backgroundColor: handleColor(scores.scores[1]) }}></Marks>
      <Marks style={{ backgroundColor: handleColor(scores.scores[2]) }}></Marks>
      <Marks style={{ backgroundColor: handleColor(scores.scores[3]) }}></Marks>
      <Marks style={{ backgroundColor: handleColor(scores.scores[4]) }}></Marks>
    </Container>
  );
};

export default ScoreGames;
