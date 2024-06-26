import React from "react"
import * as S from "./styled"
import ArrowMark from "../../../../images/svg/arrow-mark.svg"
import ImageSection from "../../../../images/home-section1.jpg"
import MiniWideButton from "../../../Base/MiniWideButton"

const HomeSection1 = () => {
  
  return (
    <S.SectionWrapper
      backgroundType="image"
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition=""
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
    >
      <div className="container">
        <S.TitleH1>
          <span>Domine</span> os ciclos dos mercados globais
        </S.TitleH1>
      </div>
      <div className="move-down-container">
        <img src={ArrowMark} alt="Saiba mais" className="move-down-icon" />
      </div>
      <div className="button-wrapper">
        <MiniWideButton
          link="https://quadfinancial.com.br/assinatura"
          externalLink="true"
          $width="auto"
          $height="5rem"
          $borderRadius="0.8rem"
          $fontSize="small"
        >
          Quero conhecer as assinaturas
        </MiniWideButton>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection1
