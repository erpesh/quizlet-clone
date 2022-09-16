import React from 'react';
import {
  PageContainer,
  HighlightedTextContainer,
  HighlightedText,
  TextWithBackground
} from "./home.styles";
import HeroComponent from "../../components/HeroComponent/hero-component";
import homeCard1 from "../../assets/images/home-card1.avif";
import homeCard2 from "../../assets/images/home-card2.avif";
import homeCard3 from "../../assets/images/home-card3.avif";
import homeCard4 from "../../assets/images/home-card4.avif";
import HomeCard from "../../components/HomeCard/home-card";

const Home = () => {
  return (
      <PageContainer>
        <HeroComponent/>
        <HighlightedTextContainer>
          <HighlightedText>
            <TextWithBackground>90%</TextWithBackground>of students who use Quizlet report receiving higher marks.
          </HighlightedText>
        </HighlightedTextContainer>
        <HomeCard
            isImageFirst={true}
            image={homeCard1}
            header="Flashcards on repeat. Study modes on shuffle."
            text="Mixed with smart study tools, our flashcards have been helping students ace their toughest exams since 2005."
        />
        <HomeCard
            isImageFirst={false}
            image={homeCard2}
            header="Whether you plan or cram, find your study jam."
            text="Early morning? All-nighter? With science-backed revision methods that improve active recall, Quizlet is designed to save you time."
        />
        <HomeCard
            isImageFirst={true}
            image={homeCard3}
            header="Millions of study sets."
            text="Discover study sets created by teachers, lecturers and other students, or easily create your own. Revise at home, school or on the go with the mobile app."
        />
        <HomeCard
            isImageFirst={false}
            image={homeCard4}
            header="Explanations you can trust."
            text="Quizlet explanations show you step-by-step approaches to solve tough problems. Find solutions in 64 subjects, all written and verified by experts."
        />
      </PageContainer>
  );
};

export default Home;