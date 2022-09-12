import React from 'react';
import {
  PageContainer,
} from "./home.styles";
import HeroComponent from "../../components/HeroComponent/hero-component";

const Home = () => {
  return (
      <PageContainer>
        <HeroComponent/>
      </PageContainer>
  );
};

export default Home;