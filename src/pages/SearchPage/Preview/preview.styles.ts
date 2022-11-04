import styled from "styled-components";
import colors from "../../../assets/colors";
import {DisplayFlex} from "../search-page.styles";
import {Link} from "react-router-dom";

export const PreviewWrapper = styled.div`
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
  position: -webkit-sticky;
  position: sticky;
  top: 1.5rem;
`
export const PreviewMainContainer = styled(DisplayFlex)`
  max-height: calc(100vh - 6rem);
`
export const PreviewCardShadows = styled.div`
  background-color: ${colors.whiteColor};
  box-sizing: border-box;
  display: inline-block;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1rem 0 ${colors.shadowWithOpacity};
`
export const PreviewPaddings = styled(DisplayFlex)`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 0;
`
export const PreviewHeader = styled(DisplayFlex)`
  -ms-flex-negative: 0;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 0 2rem 1rem;
`
export const PreviewSetLink = styled(Link)`
  -webkit-transition: all .12s cubic-bezier(.47,0,.745,.715);
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  font-size: 1.5rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  color: ${colors.textGray800};
  text-decoration: none;
  &:hover{
    color: ${colors.googleBlue};
  }
`
export const ButtonContainer = styled.div`
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  margin-left: 3.125rem;
`
export const OverflowContainer = styled.div`
  -ms-flex-negative: 1;
  -webkit-flex-shrink: 1;
  flex-shrink: 1;
  overflow: auto;
  padding-top: 1.25rem;
`
export const ItemContainer = styled.div`
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 1rem 2rem;
  &:not(:last-child){
    border-bottom: 0.125rem solid ${colors.neutralInk200};
  }
`
export const ItemText = styled.div<{fontWeight: number}>`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight};
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
`