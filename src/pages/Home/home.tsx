import React from 'react';
import home1 from '../../assets/images/hero-picture.avif';
import {
  PageContainer,
  HeroContainer,
  HeroImageWrapper,
  HeroImage,
  UIContainer,
  HeroContent,
  HeroText,
  H1,
  Text
} from "./home.styles";

const Home = () => {
  return (
      <PageContainer>
        <HeroContainer>
          <UIContainer>
            <HeroImageWrapper>
              <HeroImage alt='img' src={home1}/>
            </HeroImageWrapper>
            <HeroContent>
              <UIContainer>
                <HeroText>
                  <H1>Learn it. Own it. Quizlet.</H1>
                  <Text>With our ever-effective flashcards, an AI Learning Assistant and new expert explanations, get a
                    suite of science-backed study tools at your fingertips.</Text>
                </HeroText>
              </UIContainer>
            </HeroContent>
          </UIContainer>
        </HeroContainer>
      </PageContainer>
  );
};

export default Home;