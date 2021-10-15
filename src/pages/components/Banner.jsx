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
  // bpsc
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
    height: 694.95px;
    /* height: auto; */
    padding: 20px 100px;

    /* position: relative; */
  `;

  const ImgHolder = styled.div`
    width: 100%;
    height: 694.95px;
    background-color: blue;
    position: relative;
  `;

  const IMG = styled.img`
    min-width: 140%;
    width: 140%;
    /* height: auto; */

    /* width: 120px;
    min-height: 120px;
    max-height: auto;
    float: left;
    margin: 3px;
    padding: 3px; */
  `;

  const P = styled.p`
    /* position: absolute; */
    /* margin-top: -694.95px; */
    /* top: 0; */
    /* float: right; */
    margin-top: -79%;
    position: absolute;
    top: 80%;
    margin-left: 2em;
    font-size: 50px;
    color: white;
    z-index: 999;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    font-weight: bolder;
  `;

  return (
    <Container>
      <IMG src="https://s2.glbimg.com/0R_As-dWCJDclNFz2Q-vkZGgB9M=/0x64:1400x861/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/B/n/FQ4IoJSGA1iKQn8y81NA/rib9390.jpg"></IMG>
      <ImgHolder>
        <P>SPFC EMPATA DE NOVO</P>
        {/* <Img
          src="https://s2.glbimg.com/0R_As-dWCJDclNFz2Q-vkZGgB9M=/0x64:1400x861/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/B/n/FQ4IoJSGA1iKQn8y81NA/rib9390.jpg"
          alt="spfc"
        />
        {/* <P>
          São Paulo vence Fortaleza e avança para as semis da Copa do Brasil.{" "}
        </P> */}
      </ImgHolder>
    </Container>
  );
};

export default Banner;
