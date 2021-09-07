import React from "react";
import styled from "styled-components";
// import "../../../styles/globals.css";

export const Container = styled.div`
  /* background-color: #ffffff; */
  height: 273px;
`;

export const Header = styled.div`
  /* background-color: red; */
  height: 60px;
  display: flex;
  align-items: center;
  color: #06aa48;
  margin-left: 40px;
  margin-top: 20px;
  /* position: absolute; */
`;

export const VideosHorizontal = styled.div`
  /* background-color: cyan; */
  height: 240px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  /* overflow-x: scroll; */
`;

export const VideoHolder = styled.div`
  /* height: 240px; */
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Img = styled.img`
  width: 350px;
  /* height: auto; */
  margin: 5px;
`;

export const SvgImg = styled.svg`
  cursor: pointer;
  fill: #06aa48;
  display: block;
  position: relative;
  margin-top: 100px;
  margin-left: -340px;
  margin-right: 300px;
  transform: scale(1);
  transition-duration: 0.3s;

  :hover {
    fill: #0a823a;
    transform: scale(1.1);
  }

  :active {
    fill: #0a823a;
  }
`;

const VideosHolder = () => {
  return (
    <>
      <Container>
        <Header>
          <h2>Veja gols e lances da 17ª rodada do Brasileirão...</h2>
        </Header>
        <VideosHorizontal>
          <VideoHolder>
            <Img src="https://s2.glbimg.com/r5cxMfokqoFGl63MFwner6y5l_w=/427x240/s01.video.glbimg.com/deo/vi/64/07/9790764"></Img>
            <SvgImg
              className="btn-play"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <g>
                <circle fill="#FFF" cx="24" cy="24" r="24"></circle>
                <path d="M33.389 24.726l-13.953 8.752a.782.782 0 0 1-.419.122c-.451 0-.817-.382-.817-.854V15.29c0-.508.366-.891.817-.891.155 0 .3.046.423.124l13.949 8.75c.232.15.387.42.387.726a.865.865 0 0 1-.387.726z"></path>
              </g>
            </SvgImg>
          </VideoHolder>

          <VideoHolder>
            <Img src="https://s2.glbimg.com/r5cxMfokqoFGl63MFwner6y5l_w=/427x240/s01.video.glbimg.com/deo/vi/64/07/9790764"></Img>
            <SvgImg
              className="btn-play"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <g>
                <circle fill="#FFF" cx="24" cy="24" r="24"></circle>
                <path d="M33.389 24.726l-13.953 8.752a.782.782 0 0 1-.419.122c-.451 0-.817-.382-.817-.854V15.29c0-.508.366-.891.817-.891.155 0 .3.046.423.124l13.949 8.75c.232.15.387.42.387.726a.865.865 0 0 1-.387.726z"></path>
              </g>
            </SvgImg>
          </VideoHolder>

          <VideoHolder>
            <Img src="https://s2.glbimg.com/r5cxMfokqoFGl63MFwner6y5l_w=/427x240/s01.video.glbimg.com/deo/vi/64/07/9790764"></Img>
            <SvgImg
              className="btn-play"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
            >
              <g>
                <circle fill="#FFF" cx="24" cy="24" r="24"></circle>
                <path d="M33.389 24.726l-13.953 8.752a.782.782 0 0 1-.419.122c-.451 0-.817-.382-.817-.854V15.29c0-.508.366-.891.817-.891.155 0 .3.046.423.124l13.949 8.75c.232.15.387.42.387.726a.865.865 0 0 1-.387.726z"></path>
              </g>
            </SvgImg>
          </VideoHolder>
        </VideosHorizontal>
      </Container>
    </>
  );
};

export default VideosHolder;
