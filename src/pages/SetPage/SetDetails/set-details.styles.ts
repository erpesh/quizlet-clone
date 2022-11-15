import styled from "styled-components";
import colors from "../../../assets/colors";

export const PageBackgroundColor = styled.div`
  background-color: ${colors.pageBackgroundColor};
`
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 54.5625rem;
  padding: 2.5rem;
  position: relative;
  padding-bottom: 0;
  padding-top: 0;
  @media screen and (max-width: 38.75em) {
    padding: 1rem;
  }
  @media screen and (max-width: 64em) {
    max-width: none;
  }
`
export const MarginRight = styled.div`
  @media screen and (max-width: 48em) {
    margin-right: 0;
  }
`
export const DetailsSection = styled.section`
  min-height: 2.5rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 38.75em) {
    padding-bottom: 1.5rem;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  align-self: center;
  width: 100%;
`
export const DetailsHeaderWrap = styled.div`
  position: relative;
  padding: 0;
`
export const DetailsHeaderContainer = styled.div`
  word-wrap: break-word;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  max-width: 81.25em;
  padding: 0;
  @media screen and (max-width: 38.75em) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 85.25em) {
    padding: 0 2.5rem;
  }
`
export const DetailsHeaderWrapper = styled.div`
  display: inline-block;
  color: ${colors.UIColorGray};
  font-size: 1rem;
  height: auto;
`
export const DisplayInlineBlock = styled.div`
  display: inline-block;
  white-space: nowrap;
`
export const UILink = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: initial;
  border: none;
  cursor: pointer;
  display: inline;
  font: inherit;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.285714285714286;
  margin-top: 0;
  outline: none;
  padding: 0;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  vertical-align: initial;
  color: ${colors.textGray800};
  @media screen and (max-width: 38.75em){
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.333333333333333; 
  }
`
export const AssemblyAvatar = styled.img<{url: string}>`
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
  background-image: url(${props => props.url});
  height: 50px;
  width: 50px;
`
export const CreatedBy = styled.div`
  margin-bottom: -0.125rem;
  color: ${colors.UIColorGray60};
  display: block;
  font-size: .625rem;
`
export const DisplayFlex = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`
export const AssemblyButton = styled.button`
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
  border-radius: 50%;
  padding: 0.625rem;
  width: 2.5rem;
`