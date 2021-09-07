import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import News from "./News";

export const Banner = () => {
  // const [{ state, photos }, setState] = useState({
  //   state: 1,
  //   photos: ["um", "dois"],
  // });

  // const [num, setNum] = useState(1);

  // useEffect(() => {
  //   setInterval(() => {
  //     // setState((currentState) => ({ state: currentState.state + 1 }));
  //     // setState((currentState) => ({ state: currentState.state + 1 }));
  //     // setState([...state, { state.sate: 2 }]);
  //   }, 1000);
  // }, []);

  const Container = styled.div`
    grid-area: banner;
    overflow: hidden;

    /* position: relative; */
    /* display: flex; */
    /* justify-content: center; */
  `;

  const Img = styled.img`
    width: 100%;
    /* height: auto; */
    padding: 20px 100px;

    /* position: relative; */
  `;

  const ImgHolder = styled.div`
    position: relative;
    /* background-color: black; */
  `;

  const IMG = styled.img`
    min-width: 140%;
    /* height: auto; */

    /* width: 120px;
    min-height: 120px;
    max-height: auto;
    float: left;
    margin: 3px;
    padding: 3px; */
  `;

  const P = styled.p`
    /* width: 40%; */
    /* margin: 0; */
    /* margin-bottom: 5px; */
    /* margin-left: 10px; */
    /* margin-right: 10px; */
    font-size: 50px;
    /* color: #24ba24; */
    color: white;
    z-index: 999;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    /* margin-left: 200px; */
    font-weight: bolder;

    padding: 0px 100px;
    position: absolute;
    /* top: calc(100% - 500px); */

    top: 60%;
}

    /* top: 50%; */
    /* left: 100px; */
    /* width: 100%; */
  `;

  return (
    <Container>
      <IMG src="https://s2.glbimg.com/0R_As-dWCJDclNFz2Q-vkZGgB9M=/0x64:1400x861/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/B/n/FQ4IoJSGA1iKQn8y81NA/rib9390.jpg"></IMG>
      {/* <ImgHolder> */}
      {/* <Img
          src="https://s2.glbimg.com/0R_As-dWCJDclNFz2Q-vkZGgB9M=/0x64:1400x861/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/B/n/FQ4IoJSGA1iKQn8y81NA/rib9390.jpg"
          alt="spfc"
        />
        {/* <P>
          São Paulo vence Fortaleza e avança para as semis da Copa do Brasil.{" "}
        </P> */}
      {/* </ImgHolder> */}
    </Container>
  );
};

export default Banner;
