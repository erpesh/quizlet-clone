import React from 'react';
import {Container, SpanCover} from "./footer.styles";
import footerImage from "../../assets/images/footer-img.png";

const Footer = () => {
  return (
    <Container>
      <SpanCover>
        <span>Original website: <a href={"https://quizlet.com"} target="_blank">Quizlet</a></span>
      </SpanCover>
      <img alt="img" src={footerImage}/>
    </Container>
  );
};

export default Footer;