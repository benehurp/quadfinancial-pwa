import React from "react"
import MiniWideButton from "../../../Base/MiniWideButton"
import * as S from "./styled"
import TelegramIcon from "../../../../images/svg/icon-telegram.svg"

const TelegramFooter = () => {
  return (
    <S.TelegramWrapper>
      <div className="telegram-container">
        <div className="left">
          Receba nosso conteúdo no seu celular gratuitamente e fique por dentro
          de atualizações.
        </div>
        <div className="right">
          <MiniWideButton
            $externalLink={true}
            link="https://t.me/canaldaquad"
            $color={"blue"}
            $width={"100%"}
            $paddingRight={"1rem"}
            $height={"3rem"}
            $gradientColor1={"white"}
            $gradientColor2={"white"}
            $gradientPercent1={"0%"}
            $gradientPercent2={"100%"}
            $gradientDeg={"90deg"}
            $borderRadius={"0.7rem"}
          >
            <img
              src={TelegramIcon}
              alt="Acesse o nosso Telegram"
              width="18rem"
              height="18rem"
            />
            Participar do canal no Telegram
          </MiniWideButton>
        </div>
      </div>
    </S.TelegramWrapper>
  )
}

export default TelegramFooter
