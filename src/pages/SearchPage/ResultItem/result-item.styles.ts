import styled from "styled-components";
import colors from "../../../assets/colors";
import {DisplayFlex} from "../search-page.styles";


export const Container = styled(DisplayFlex)`
  margin-bottom: .5rem;
`
export const AssemblyCard = styled.div<{ isFocused: boolean }>`
  background-color: ${colors.whiteColor};
  box-sizing: border-box;
  display: inline-block;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem 0 ${colors.shadowWithOpacity};
  cursor: pointer;

  &:after {
    bottom: 0;
    content: " ";
    height: .25rem;
    left: 0;
    position: absolute;
    width: 100%;
    ${props => props.isFocused ? "background-color: #4255ff;" : ""}
  }

  &:hover {
    &:after {
      background-color: ${colors.navHover};
    }
  }
`
export const PaddingContainer = styled(DisplayFlex)`
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  cursor: pointer;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 1rem;
`
export const SecondaryData = styled(DisplayFlex)`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 1rem 0;
  min-height: 3rem;
  row-gap: 0.5rem;

  &:not(:last-child) {
    margin-right: .5rem;
  }
`
export const SecondaryItem = styled.span`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: #edefff;
  border-radius: 1.5rem;
  color: #2e3856;
  cursor: default;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  min-height: 1.5rem;
  padding: 0 0.5rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  white-space: nowrap;
  font-size: .75rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.3333333333333333;
`
export const CreatorContainer = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 2rem;
`
export const AuthorPhoto = styled.img<{ photoURL: string }>`
  border-radius: 100%;
  box-shadow: inset 0 0 0.0625rem rgb(0 0 0 / 30%);
  display: inline-block;
  margin: 0;
  overflow: hidden;
  padding: 0;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  vertical-align: middle;
  height: 24px;
  width: 24px;
  background-image: url(${props => props.photoURL});
  background-size: 100% 100%;
  margin-right: .5rem;
`
export const AuthorName = styled.span`
  display: inline-block;
  font-size: .75rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.3333333333333333;
`
export const BottomPart = styled(DisplayFlex)`
  justify-content: space-between;
`