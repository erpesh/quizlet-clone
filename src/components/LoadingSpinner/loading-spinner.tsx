import React from 'react';
import styled, {keyframes} from "styled-components";
import colors from "../../assets/colors";

const spinAnimation = keyframes`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(720deg)}
`
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5em);
`
const Spinner = styled.div`
  width: 7em;
  height: 7em;
  border: 2em solid #f3f3f3; /* Light grey */
  border-top: 2em solid ${colors.mainBlueColor}; /* Black */
  border-radius: 50%;
  animation: ${spinAnimation} 1.5s linear infinite;
`

const LoadingSpinner = () => <Container><Spinner/></Container>

export default LoadingSpinner;