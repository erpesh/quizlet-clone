import styled from "styled-components";
import colors from "../../assets/colors";

export const PageContainer = styled.div`
  display: flex;
  padding: 0 10%;
  flex-direction: column;
  background: ${colors.pageBackgroundColor};
`
export const SetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.5rem 0 2rem;
`
export const SetHeaderHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
`
export const TextAreaContainer = styled.div`
  grid-area: headingDescription;
  overflow: hidden;
  position: relative;
  z-index: 301;
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
export const Label = styled.label`
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
export const TitleInput = styled.input`

`