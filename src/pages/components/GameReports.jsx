import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
          <Holder key={key}>
            <VideoH>
              <img
                width="100%"
                height="210px"
                style={{ backgroundColor: "black" }}
              />
            </VideoH>

            <Link href="/club">
              <a>
                <p
                  className="clubName"
                  style={{
                    gridArea: "clubname",
                    marginTop: "30px",
                    color: "#333333",
                  }}
                >
                  Loren Ipson
                </p>
                <h2
                  className="clubNews"
                  style={{
                    gridArea: "clubnews",
                    color: "#06aa48",
                    cursor: "pointer",
                  }}
                >
                  Lorem Ipsum - это текст-"рыба{" "}
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
              </a>
            </Link>
          </Holder>
        );
      })}
    </Container>
  );
};

export default GameReports;
