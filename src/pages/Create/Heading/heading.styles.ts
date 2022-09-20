import styled from "styled-components";
import colors from "../../../assets/colors";

export const SetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0 2rem;
`
export const SetHeaderHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`
export const TitleEffect = styled.span`
  color: ${colors.gray600};
  font-size: .75rem;
  font-weight: 600;
`
export const InputContainer = styled.div`
  grid-area: headingDescription;
  overflow: hidden;
  position: relative;
  z-index: 100;
`
export const TextAreaInput = styled.textarea`
  background-color: ${colors.whiteColor};
  height: calc(100% - 0.5rem);
  padding: 0.25rem 1.5rem 1.25rem 0;
  resize: none;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 15px;
  box-shadow: none;
  color: ${colors.ink400};
  cursor: text;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font: inherit;
  outline: none;
  overflow: hidden;
`
export const TextAreaLabel = styled.label`
  font-weight: 600;
  width: 100%;
  @media (min-width: 38.8125rem) {
    font-size: .875rem;
    letter-spacing: normal;
  }
  >div {
    display: flex;
    align-items: flex-start;
    background-color: ${colors.neutralInk200};
    border-radius: 0.5rem;
    flex-flow: row wrap;
    height: 100%;
    width: 100%;
    >div {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
`
export const TextAreaSpacer = styled.div`
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  min-height: 7.5rem;
  padding: 1.25rem 0;
  visibility: hidden;
  white-space: pre-wrap;
`
export const TextAreaWrapper = styled.div`
  background-color: ${colors.whiteColor};
  border-radius: 0.5rem;
  bottom: 0;
  left: 0;
  padding: 0.5rem 1rem 1rem;
  position: absolute;
  right: 0;
  top: 0;
`
export const InputLabel = styled.label`
  background: ${colors.whiteColor};
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  border-radius: 0.5rem;
  color: ${colors.gray600};
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 3rem;
  -webkit-justify-content: center;
  justify-content: center;
  overflow: hidden;
  padding: 0.25rem 1rem;
  position: relative;
`
export const TitleInput = styled.input`
  @media (min-width: 38.8125rem) {
    font-size: 1rem;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5; 
  }
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: initial;
  border: none;
  box-shadow: none;
  color: ${colors.textGray800};
  cursor: text;
  -webkit-filter: none;
  filter: none;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 1rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  padding-right: 1rem;
`