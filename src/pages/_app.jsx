import "../../styles/globals.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import styled from "styled-components";
import Banner from "./components/Banner";
import News from "./components/News";
import { useContext, useEffect, useState } from "react";

// import Club from "./club";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 45px 72px 694.95px 100px;
  grid-template-areas:
    "header1 ."
    "header2 ."
    "banner ."
    "news news";
`;

// columns width
// row height

export function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header1></Header1>
      <Header2></Header2>
      <Banner></Banner>
      <News></News>

      {/* <Component {...pageProps} /> */}
    </Container>
  );
}

export default MyApp;
