import React from 'react';
import {Container, SpanCover} from "./footer.styles";
import footerImage from "../../assets/images/footer-img.png";

const Footer = () => {
  return (
    <Container>
      <SpanCover>
        <span>© 2022 Quizlet Inc.</span>
      </SpanCover>
      <img alt="img" src={footerImage}/>
    </Container>
  );
};

export default Footer;