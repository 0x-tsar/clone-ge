import React from "react";
import styled from "styled-components";
import ScoreGames from "./ScoreGames";
import clubs from "./clubs";

export const Container = styled.div``;

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

export const ChaqueClub = styled.div`
  height: 40px;
  margin-bottom: 2px;
  margin-right: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EachClub = () => {
  return (
    <Container>
      {clubs.map((item, key) => {
        return (
          <ChaqueClub>
            <P2>{item.position}</P2>
            <img
              width="35px"
              height="35px"
              style={{ backgroundColor: "black" }}
            />
            <P2>
              <span
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  marginTop: 0,
                  marginRight: 0,
                }}
              >
                {item.name}
              </span>
            </P2>
            <P2>{item.update}</P2>
            <P2>{item.points}</P2>

            <ScoreGames scores={item.last_games}></ScoreGames>
          </ChaqueClub>
        );
      })}
    </Container>
  );
};

export default EachClub;
