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
  padding: 0.75rem;
  align-items: center;
  border-bottom: 2px solid var(--ui_color_gray_90_foreground);
  display: flex;
  transition: all .12s ease;
`
export const BottomPart = styled.div`
  padding: 0.75rem 0.75rem 1.5rem 4.625rem;
  padding-left: 0.75rem;
`
export const TermContentWrap = styled.div`
  display: table;
  min-height: 3.375rem;
  table-layout: fixed;
  transition: none .3s ease-out;
  transition-property: background;
  width: 100%;
`
export const TermContentPart = styled.div`
  cursor: text;
  display: table-cell;
  padding-top: 0.75rem;
  position: relative;
  vertical-align: top;
  word-break: break-word;
  z-index: 200;
  padding-left: 0.75rem;
  padding-right: 1.25rem;
  width: 50%;
`
export const ProseMirror = styled.div`
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
