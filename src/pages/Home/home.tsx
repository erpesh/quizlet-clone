import React from 'react';
import {
  PageContainer,
    HighlightedTextContainer,
    HighlightedText,
    TextWithBackground
} from "./home.styles";
import HeroComponent from "../../components/HeroComponent/hero-component";

const Home = () => {
  return (
      <PageContainer>
        <HeroComponent/>
        <HighlightedTextContainer>
          <HighlightedText>
            <TextWithBackground>90%</TextWithBackground>of students who use Quizlet report receiving higher marks.
          </HighlightedText>
        </HighlightedTextContainer>
      </PageContainer>
  );
};

export default Home;