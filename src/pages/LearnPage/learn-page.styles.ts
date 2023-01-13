import styled from "styled-components";
import colors from "../../assets/colors";

export const Container = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: calc(100vh - 66px);
  height: 100%;
  margin: 0 auto;
  width: 100%;
  background: ${colors.pageBackgroundColor};
`
export const NestedContainer = styled.div`
  display: block;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0;
  padding: 2rem 1.5rem 0 1.5rem;
  position: relative;
  width: 100%;
  @media (max-width: 64rem) {
    padding-top: 1.5rem;
  }
  @media (max-width: 48rem) {
    padding: 0;
    margin-bottom: 4rem;
  }
`
export const MediaStyling = styled.div`
  height: auto;
  margin: 0 auto;
  position: relative;
  @media (max-width: 48rem) {
    border-radius: 0;
    margin: 0;
    max-width: unset;
  }
`