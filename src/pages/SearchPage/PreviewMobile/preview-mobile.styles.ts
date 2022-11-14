import styled from "styled-components";
import colors from "../../../assets/colors";

export const ContainerZIndex = styled.div`
  bottom: 0;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1100;
  background: rgba(40, 46, 62, .5);
`
export const Wrapper = styled.div`
  background: ${colors.whiteColor};
  box-shadow: 0 0.25rem 1rem 0 ${colors.shadowWithOpacity};
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 auto;
  outline: none;
  overflow-y: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
  bottom: 0;
  background-color: ${colors.whiteColor};
  margin-bottom: 0;
  max-height: 90%;
  position: absolute;
  width: 100%;
`
export const Wrap = styled.div`
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: inherit;
  margin: 2rem 2rem 0;
  text-align: left;
  @media (max-width: 38.75rem) {
    margin: 1.5rem 1.5rem 0;
  }
`
export const Container = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 0;
  @media (max-width: 48rem) {
    padding: 0;
  }
`
export const CloseButtonWrap = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: ${colors.whiteColor};
  border-radius: 2rem;
  color: ${colors.gray600};
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 2rem;
  -webkit-justify-content: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  z-index: 101;
`