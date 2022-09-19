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
import homeCard1 from "../../../assets/images/home-card1.avif";
import homeCard2 from "../../../assets/images/home-card2.avif";
import homeCard3 from "../../../assets/images/home-card3.avif";
import homeCard4 from "../../../assets/images/home-card4.avif";

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
          <HomeCardContainer>
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