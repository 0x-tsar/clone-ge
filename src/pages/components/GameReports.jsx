import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: black; */
`;

export const Holder = styled.div`
  display: grid;
  grid-template-columns: 372px;
  grid-template-rows: 0fr;
  grid-template-areas:
    "video clubname"
    "video clubenews"
    "video description";
`;

export const VideoH = styled.div`
  grid-area: "video";
  /* width: 100%; */
  height: 257px;
  /* background-color: black; */
  /* margin-top: 10px; */
  margin: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const Description = styled.div`
  grid-area: "description";
  /* height: 257px; */
  /* margin: 10px; */
  /* display: flex;
  align-items: center;
  padding-left: 20px; */
`;

const GameReports = () => {
  return (
    <Container>
      {new Array(1, 2, 3, 4, 5, 6).map((item, key) => {
        return (
          <Holder>
            <VideoH>
              <img
                width="100%"
                height="210px"
                style={{ backgroundColor: "black" }}
              />
            </VideoH>
            <p
              className="clubName"
              style={{
                gridArea: "clubname",
                marginTop: "30px",
                color: "#333333",
              }}
            >
              São Paulo
              <h2
                className="clubNews"
                style={{ gridArea: "clubnews", color: "#06aa48" }}
              >
                São Paulo vence o Sport e se distancia do Z4.
              </h2>
              <p
                className="descGame"
                style={{
                  gridArea: "description",
                  fontSize: "17px",
                  color: "#1ec661",
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "#333333", fontSize: "20px" }}>
                  &#8226;
                </span>{" "}
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов.
              </p>
            </p>

            {/* <Description>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
            </Description> */}
          </Holder>
        );
      })}
    </Container>
  );
};

export default GameReports;
