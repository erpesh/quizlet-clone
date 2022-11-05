import styled from "styled-components";
import colors from "../../assets/colors";

export const Wrap = styled.div<{ height: string }>`
  height: ${props => props.height};
  &:focus-visible{
    outline: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  height: calc(100% - 1rem);
  @media (max-width: 38.75rem) {
    height: calc(100% - .5rem);
  }
  &:focus-visible{
    outline: none;
  }
`
export const MainSectionWrapper = styled.div`
  background-color: ${colors.pageBackgroundColor};
  max-height: 100%;
  -webkit-transition: max-height .2s ease-in;
  transition: max-height .2s ease-in;
`
export const MainSectionContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`
export const MainSectionContainer2 = styled.div`
  display: block;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0;
  padding: 0;
  position: relative;
  width: 100%;
`
export const HeightRegulator = styled.div`
  height: 100%;
  min-height: 31.25rem;
  @media (max-width: 38.75rem) {
    min-height: 25rem;
  }
`