import styled from "styled-components";
import colors from "../../assets/colors";

export const CardContainer = styled.div`
  background: ${colors.whiteColor};
  border-radius: 0.5rem;
  cursor: move;
  position: relative;
`
export const TopPart = styled.div`
  margin-bottom: 0;
  margin-top: 0;
  padding: 0.75rem 1rem;
  align-items: center;
  border-bottom: 2px solid var(--ui_color_gray_90_foreground);
  display: flex;
  justify-content: space-between;
  transition: all .12s ease;
  border-bottom: 3px solid ${colors.pageBackgroundColor};
`
export const BottomPart = styled.div`
  padding: 0.75rem 0.75rem 1.5rem 4.625rem;
  padding-left: 0.75rem;
`
export const TermContentWrap = styled.div`
  //display: table;
  min-height: 3.375rem;
  table-layout: fixed;
  transition: none .3s ease-out;
  transition-property: background;
  width: 100%;
  display: flex;
  @media screen and (max-width: 38.75em) {
    flex-direction: column;
  }
`
export const TermContentPart = styled.div`
  cursor: text;
  display: table-cell;
  padding-top: 0.75rem;
  position: relative;
  vertical-align: top;
  word-break: break-word;
  z-index: 100;
  padding-left: 0.75rem;
  padding-right: 1.25rem;
  width: 50%;
  @media screen and (max-width: 38.75em) {
    width: 90%;
  }
`
export const ProseMirrorInput = styled.input`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.444444444444444;
  cursor: text;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  white-space: pre-wrap;
  box-shadow: none;
  outline: none;
  width: 100%;
  border: none;

  ::before {
    color: ${colors.UIColorGray60};
    content: attr(placeholder)/"";
    position: absolute;
  }
`
export const InputLabel = styled.span`
  color: ${colors.UIColorGray60};
  display: grid;
  font-size: .75rem;
  font-weight: 600;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  letter-spacing: .0625rem;
  line-height: 1.333333333333333;
  margin-top: 0.625rem;
  text-align: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const InputLabelText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const IDSpan = styled.span`
  width: 2.5rem;
  color: ${colors.UIColorGray60};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .0875rem;
  line-height: 1.5;
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const DeleteButtonContainer = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin-left: 0.75rem;
  width: 2.5rem;
`
export const DeleteButton = styled.button`
  border-radius: 50%;
  margin: 0;
  padding: 0;
  background-color: initial;
  color: ${colors.UIColorGray};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.285714285714286;
  max-width: 100%;
  transition: all .12s cubic-bezier(.47, 0, .745, .715);
  width: auto;
`
export const DeleteButtonWrapper = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  white-space: pre-wrap;
  width: 100%;
  padding: 0.5625rem;

  > svg {
    transition: .2s;
  }

  :hover {
    > svg {
      fill: ${colors.yellowMain};
    }
  }
`
export const TermRowSeparator = styled.div`
  display: block;
  height: 1.25rem;
  margin-left: 5.375rem;
  position: relative;
  z-index: 1;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;

  > span {
    > span {
      > button {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
      }
    }
  }

  :hover {
    > span {
      > span {
        > button {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`
export const RowBetweenButton = styled.span`
  margin-left: 45%;
  transform: scale(0);
  transition: none .12s cubic-bezier(.47, 0, .745, .715);
  transition-property: transform;
`
export const SeparateAddButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.285714285714286;
  max-width: 100%;
  transition: all .12s cubic-bezier(.47, 0, .745, .715);
  width: auto;
  border-radius: 50%;
  margin: 0;
  margin-top: -0.375rem;
  padding: 0;
  background-color: ${colors.primaryButton};
  color: ${colors.whiteColor};
  :hover {
    background-color: #14baba;
  }
`
export const SeparateButtonWrap = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  white-space: pre-wrap;
  padding: 0.5625rem;

  > svg {
    display: block;
    height: 1.125rem;
    pointer-events: none;
    width: 1.125rem;
    fill: currentColor;
  }
`