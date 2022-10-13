import React, {FC} from 'react';
import {
  HomeCardSection,
  UIContainer,
  HomeCardContainer,
  ImageContainer,
  Image,
  TextContainer,
  CardHeader,
  CardText,
} from "./home-card.styles";

interface Props {
  isImageFirst: boolean
  image: string,
  header: string,
  text: string
}

const HomeCard: FC<Props> = ({isImageFirst, image, header, text}) => {
  return (
      <HomeCardSection>
        <UIContainer>
          <HomeCardContainer isLeft={isImageFirst}>
            {isImageFirst ? <>
              <ImageContainer>
                <Image alt="img" src={image}/>
              </ImageContainer>
              <TextContainer isLeft={isImageFirst}>
                <CardHeader>{header}</CardHeader>
                <CardText>{text}</CardText>
              </TextContainer></> : <>
              <TextContainer isLeft={isImageFirst}>
                <CardHeader>{header}</CardHeader>
                <CardText>{text}</CardText>
              </TextContainer>
              <ImageContainer>
                <Image alt="img" src={image}/>
              </ImageContainer>
            </>
            }
          </HomeCardContainer>
        </UIContainer>
      </HomeCardSection>
  );
};

export default HomeCard;