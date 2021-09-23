import React from "react"
import * as S from "./styled"
import ArrowMark from "../../../../images/svg/arrow-mark.svg"
import ImageSection from "../../../../images/home-section1.jpg"

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
      height=""
    >
      <div className="container">
        <S.TitleH1>
          <span>Domine</span> os ciclos dos mercados globais
        </S.TitleH1>
        <div className="move-down-container">
          <img src={ArrowMark} alt="Saiba mais" className="move-down-icon" />
        </div>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection1
