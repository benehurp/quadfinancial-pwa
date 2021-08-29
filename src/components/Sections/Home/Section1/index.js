import React from "react"
import * as S from "./styled"
import ArrowMark from "../../../../images/svg/arrow-mark.svg"
import ImageSection from "../../../../images/home-section1.jpg"

const HomeSection1 = ({
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  height,
}) => {
  return (
    <S.Section1Wrapper
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition=""
      height=""
      s
    >
      <div className="section-container">
        <S.TitleH1>
          <span>Domine</span> os ciclos dos mercados globais
        </S.TitleH1>
      </div>
      <div class="move-down-container">
        <img src={ArrowMark} alt="Saiba mais" class="move-down-icon" />
      </div>
    </S.Section1Wrapper>
  )
}

export default HomeSection1