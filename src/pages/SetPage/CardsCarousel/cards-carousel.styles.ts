import styled, {keyframes} from "styled-components";
import colors from "../../../assets/colors";

export const CardsCarouselWrap = styled.div`
  display: grid;
  grid-auto-rows: minmax(0,1fr);
  grid-column: 1/1;
  grid-row: 1/1;
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  z-index: 0;
`
export const CardsCarouselContainer = styled.div`
  height: 100%;
  -webkit-perspective: 62.5rem;
  -moz-perspective: 62.5rem;
  -ms-perspective: 62.5rem;
  perspective: 62.5rem;
  position: relative;
`
const flipAnim = keyframes`
  50% {
    transform: rotateX(180deg);
  }
  75% {
    transform: rotateX(270deg);
  }
  100% {
    transform: rotateX(360deg);
  }
`
export const GridContainer = styled.div<{animate: boolean}>`
  display: grid;
  grid-auto-rows: minmax(0,1fr);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-animation: ${flipAnim} .35s ease-in-out 1;
  animation: ${flipAnim} .35s ease-in-out 1;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  animation-play-state: ${props => props.animate ? "active" : "paused"};
`