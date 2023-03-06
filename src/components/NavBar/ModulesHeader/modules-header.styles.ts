import styled from "styled-components";
import colors from "../../../assets/colors";

const DisplayFlex = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`
export const Wrapper = styled.div`
  display: block;
  position: -webkit-sticky;
  position: sticky;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
  top: 0;
  width: 100%;
  z-index: 901;
  @media (max-width: 64rem) {
    position: sticky;
  }
`
export const BorderBottom = styled.div`
  border-bottom: none;
  @media screen and (max-width: 48em) {
    border-bottom: 0.125rem solid ${colors.pageBackgroundColor};
  }
`
export const Container = styled.div`
  background: ${colors.whiteColor};
  box-shadow: 0 0.25rem 1rem 0 ${colors.shadowWithOpacity};
  @media (max-width: 48rem) {
    height: auto;
  }
`
export const MainContentContainer = styled(DisplayFlex)`
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  height: 4rem;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  z-index: 101;
  @media (max-width: 38.75rem) {
    padding: 0.5rem;
  }
  @media (max-width: 48rem) {
    height: 3.5rem;
    padding: 0 1rem;
  }
`
export const ProgressBarContainer = styled.div`
  background-color: none;
  border-radius: 0;
  height: 0.125rem;
`
export const ProgressBar = styled.div<{ width: number }>`
  background-color: #7b89c9;
  border-radius: 0;
  height: 100%;
  width: ${props => props.width}%;
`
export const ChooseModuleContainer = styled(DisplayFlex)`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
`
export const MainContentSeparator = styled(DisplayFlex)`
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0.75rem 0;
`
export const CloseButtonContainer = styled(DisplayFlex)`
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`
const ButtonBase = styled.button`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  align-items: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
  -webkit-justify-content: center;
  justify-content: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`
export const CloseButton = styled(ButtonBase)`
  border-radius: 0.5rem;
  font-size: .875rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.4285714285714286;
  min-height: 2.5rem;
  background: ${colors.whiteColor};
  border: 0.0625rem solid ${colors.colorDisabled};
  color: ${colors.gray600};
  height: 2.5rem;
  padding: 0.6875rem;
  width: 2.5rem;
  &:hover {
    background: ${colors.neurtal300};
}
`
export const ModulesDropDownButton = styled(ButtonBase)`
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  min-height: 4rem;
  background: none;
  color: ${colors.gray600};
  &:focus {
    outline: 0.0625rem solid #a8b1ff;
  }
  &:hover {
    background: ${colors.neurtal300};
  }
`