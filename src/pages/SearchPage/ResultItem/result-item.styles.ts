import styled from "styled-components";
import colors from "../../../assets/colors";

const DisplayFlex = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`
export const Container = styled(DisplayFlex)`
  margin-bottom: .5rem;
`
export const AssemblyCard = styled.div`
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
  &:hover {
    &:after {
      background-color: ${colors.navHover};
    }
  }
  &:after {
    bottom: 0;
    content: " ";
    height: .25rem;
    left: 0;
    position: absolute;
    width: 100%;
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
  &:not(:last-child){
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
`
export const AuthorName = styled.span`
  display: flex;
  align-items: center;
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