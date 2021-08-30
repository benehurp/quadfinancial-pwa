import React from "react"
import * as S from "./styled"
import MiniWideButton from "../../../Base/MiniWideButton"
import Rotate3d from "../../../../images/rotate3d.png"

const HomeSection3 = ({
  backgroundType,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  gradientDeg,
  gradientColor1,
  gradientColor2,
  gradientPercent1,
  gradientPercent2,
  height,
}) => {
  return (
    <S.Section3Wrapper
      backgroundType="color"
      backgroundColor="gray2"
      backgroundImage=""
      backgroundPosition=""
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
      height=""
    >
      <div className="container">
        <div className="left">
          <img
            className="rotate3d"
            src={Rotate3d}
            alt="Clique no cubo para rotacionar"
          ></img>
          <S.TitleH2 width="95%" textAlign="right">
            Mercado em quatro dimensões
          </S.TitleH2>
          <S.Paragraph width="85%" textAlign="right">
            Analisamos o mercado sobre a ótica inédita do Método M4D, uma
            abordagem de investimentos desenvolvida por Jarbas Gambogi há mais
            de 20 anos, e que compõe nossa própria forma de identificar os
            sinais e filtrar os ruídos nos mercados globais.
          </S.Paragraph>
          <MiniWideButton
            link="/"
            width="48rem"
            height="4.5rem"
            borderRadius=".8rem"
            fontSize="medium"
          >
            Conhecer mais sobre o método
          </MiniWideButton>
        </div>
        <div className="right">Box</div>
      </div>
    </S.Section3Wrapper>
  )
}

export default HomeSection3
