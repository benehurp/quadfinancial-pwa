import styled from "styled-components"

export const CubeFace = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  pointer-events: none;
`

export const TitleH3 = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 2rem 0;
`

export const ImgCube = styled.img`
  width: 30%;
`
export const ImgCubeHead = styled.img`
  width: 35%;
  height: 35%;
  transform: scaleX(-1);
  opacity: 0.15;
`
export const CubeFaceTop = styled(CubeFace)`
  align-items: center;
`
