import React from "react"
import * as S from "./styled"
import ImageSection from "../../../../images/home-section6.jpg"
import MiniWideButton from "../../../Base/MiniWideButton"
import { UserContext } from "../../../../UserContext"

const HomeSection6 = () => {
  const { useWindowSize } = React.useContext(UserContext)
  const [width] = useWindowSize()
  const [positionBg, setPositionBg] = React.useState("top left")

  React.useEffect(() => {
    width > 767 && width < 1024
      ? setPositionBg("top right")
      : setPositionBg("top left")
  }, [width])

  return (
    <S.SectionWrapper
      backgroundType="image"
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition={positionBg}
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
      height=""
    >
      <div className="container">
        <div className="left">
          <S.TitleH2>
            Atravesse os ciclos guiado pelo <span>Método M4D</span>
          </S.TitleH2>
          <S.Paragraph>
            Ao longo dos últimos 45 anos, Jarbas Gambogi estudou até se tornar
            especialista no mercado de capitais. Finalmente, por volta dos anos
            2000, reuniu um massivo volume de conhecimento sobre o behaviorismo
            (escola de estudo de psicologia comportamental), estatística e
            indicadores quantitativos para desenvolver uma abordagem top-down de
            investimentos que foi chamada de Mercado em Quatro Dimensões – M4D.
          </S.Paragraph>
          <S.Card
            gradientPercent1="-25%"
            gradientColor1="gray2"
            gradientColor2="red2"
            gradientDeg="45deg"
          >
            <S.Paragraph>
              A abordagem M4D é um breakthrough, sem precedentes na literatura
              financeira, e funciona como um farol para guia-lo ao longo dos
              ciclos de mercado. É um método prático, com critérios rigorosos, e
              que se provou eficaz em campo ao longo das últimas décadas.
            </S.Paragraph>
          </S.Card>
          <S.Paragraph>
            Através de seus preceitos, analisamos e dominamos as forças que
            movem os mercados para nos expormos com inteligência, sempre de
            acordo com os sinais fornecidos pelos indicadores das Quatro
            Dimensões. O primeiro passo para o sucesso nos investimentos é
            adotar um método e filosofia com critérios bem-definidos e que se
            provou eficaz ao longo do tempo. O segundo, é cercar-se dos
            melhores. E isso é exatamente o que oferecemos.
          </S.Paragraph>
          <MiniWideButton
            link="https://quadfinancial.com.br/assinatura"
            $externalLink="true"
            $width="100%"
            $height="5rem"
            $borderRadius=".8rem"
            $fontSize="medium"
            $marginTop="2rem"
          >
            CONHECER AS ASSINATURAS
          </MiniWideButton>
        </div>
        <div className="right"></div>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection6
