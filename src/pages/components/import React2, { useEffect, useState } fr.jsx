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

    /* display: flex;
    justify-content: center;
     */
  `;

  const Img = styled.img`
    /* transform: scale(scaler); */
    /* min-width: 100vw;
    min-height: 790px; */

    width: 100vw;
    height: auto;

    padding: 20px 100px;

    /* display: block; */
    /* width: 100%;
    height: 790px; */
    /* width: auto;
    height: auto; */

    /* transition-duration: 15s; */

    /* transform: translate("-200px", "200px"); */
    /* transform: translate3d(100, 100, 100, 1); */

    /* :hover {
      transform: scale(1.3);
    } */
  `;

  const ImgHolder = styled.div``;

  const P = styled.p`
    margin: 0;
    margin-bottom: 5px;
    /* margin-left: 10px; */
    margin-right: 10px;
    font-size: 50px;

    /* color: #24ba24; */
    color: white;
    z-index: 999;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.3);

    margin-top: -500px;
    margin-left: 200px;
    font-weight: bolder;
  `;

  return (
    <Container>
      <ImgHolder>
        <Img
          // onMouseMove={() => {
          //   console.log(setScale(scaler + 1));
          //   // console.log();
          // }}
          // style={{}}
          src="https://s2.glbimg.com/0R_As-dWCJDclNFz2Q-vkZGgB9M=/0x64:1400x861/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/B/n/FQ4IoJSGA1iKQn8y81NA/rib9390.jpg"
          alt="spfc"
        />
        <P>
          São Paulo vence Fortaleza e avança para as semis da Copa do Brasil.{" "}
        </P>
      </ImgHolder>
      {/* <div>Counter: {state}</div>
      <div>num: {num}</div>
      <button
        onClick={() => {
          setNum((n) => n + 1);
          // console.log(photos);
          // setCount((currentState) => ({ count: currentState.count + 1 }));
        }}
      >
        Increase
      </button> */}
    </Container>
  );
};

export default Banner;
