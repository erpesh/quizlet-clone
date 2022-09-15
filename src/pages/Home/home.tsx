import React from 'react';
import {
  PageContainer,
  HighlightedTextContainer,
  HighlightedText,
  TextWithBackground,
  HomeCardsContainer,
  HomeCardContainer
} from "./home.styles";
import HeroComponent from "./HeroComponent/hero-component";
import homeCard1 from "../../assets/images/home-card1.avif";
import homeCard2 from "../../assets/images/home-card2.avif";
import homeCard3 from "../../assets/images/home-card3.avif";
import homeCard4 from "../../assets/images/home-card4.avif";

const Home = () => {
  return (
      <PageContainer>
        <HeroComponent/>
        <HighlightedTextContainer>
          <HighlightedText>
            <TextWithBackground>90%</TextWithBackground>of students who use Quizlet report receiving higher marks.
          </HighlightedText>
        </HighlightedTextContainer>
        <HomeCardsContainer>
          <HomeCardsContainer>
            <img alt="img" src={homeCard1}/>
          </HomeCardsContainer>
          <HomeCardContainer>

          </HomeCardContainer>
          <HomeCardContainer>

          </HomeCardContainer>
          <HomeCardContainer>

          </HomeCardContainer>
        </HomeCardsContainer>
      </PageContainer>
  );
};

export default Home;