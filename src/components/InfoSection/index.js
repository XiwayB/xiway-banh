import React from "react"
import { Button } from "../buttonElements"
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Heading, Subtitle} from "./infoElements"

const InfoSection = () => {
  return(
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>FULL STACK DEVELOPER</Heading>
                <Subtitle>Passionate about programming, I’m here to help people create a communication tool that will help them spread their ideas to the world.</Subtitle>
              </TextWrapper>
              <Button>LEARN MORE</Button>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
