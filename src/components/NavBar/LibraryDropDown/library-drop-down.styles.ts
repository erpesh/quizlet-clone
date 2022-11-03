import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.div`
  position: absolute;
  z-index: 1099;
  left: 228px;
  top: 68px;
  max-height: 641.6px;
`
export const DownContainer = styled.div`
  background: ${colors.whiteColor};
  border: 0.0625rem solid ${colors.neurtal300};
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1rem 0 ${colors.shadowWithOpacity};
  max-height: inherit;
  overflow-y: auto;
`
export const ScrollContainer = styled.div`
  max-height: 20.25rem;
  overflow-x: hidden;
  overflow-y: auto;
`
export const ScrollContentContainer = styled.div`
  min-width: 30rem;
  padding: 0.5rem 0;
`
export const Item = styled.a`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-align-items: center;
  align-items: center;
  color: #939bb4;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  max-width: 100vw;
  padding: 1rem 1.5rem;
  text-decoration: none;
  &:hover{
    background-color: ${colors.pageBackgroundColor};
  }
`
export const ItemContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
`
export const ItemTitle = styled.span`
  color: ${colors.UIColorGray};
  font-size: 1rem;
  font-weight: 700;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`
export const ItemAuthorName = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: .75rem;
  font-weight: 600;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.3333333333333333;
  width: 100%;
`