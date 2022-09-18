import React, {useContext} from 'react';
import {
  H1, HeroButtonContainer,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroImageWrapper,
  HeroText, Text,
  UIContainer
} from "./hero-component.styles";
import home1 from "../../assets/images/hero-picture.avif";
import {BlueButton} from "../BlueButton/blue-button.styles";
import AuthContext from "../../context/auth-context";
import {useNavigate} from "react-router-dom";

const HeroComponent = () => {

  const {signInWithGoogle, isAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
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
              <HeroButtonContainer>
                <BlueButton
                    padding="1.375rem 2rem"
                    radius="0.5rem"
                    fontSize="1rem"
                    onClick={isAuth? () => navigate("/create") : signInWithGoogle}
                >
                  Get started
                </BlueButton>
              </HeroButtonContainer>
            </UIContainer>
          </HeroContent>
        </UIContainer>
      </HeroContainer>
  );
};

export default HeroComponent;