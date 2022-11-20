import styled from "styled-components";
import colors from "../../../assets/colors";
import {Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa";

export const Container = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${colors.whiteColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const SideLogo = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: ${colors.mainBlueColor};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  width: 300px;
`
export const CloseIcon = styled(FaTimes)`
  color: ${colors.UIColorGray60};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: ${colors.UIColorGray20};
`

export const SidebarMenu = styled.ul`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SidebarSignButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.0rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${colors.UIColorGray20};
  cursor: pointer;
  margin: 30px 0 0;
  
  &:hover {
    color: ${colors.mainBlueColor};
    transition: 0.2s ease-in-out;
  }
`
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2.0rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${colors.UIColorGray20};
  cursor: pointer;
  margin: 30px 0 0;
`
export const SideBarDropDownButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.0rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${colors.UIColorGray20};
  cursor: pointer;
  margin: 30px 0 0;
`
export const LibraryContainer = styled.div`
  border: 1px solid ${colors.UIColorGray};
  border-top-color: ${colors.whiteColor};
  border-bottom-color: ${colors.whiteColor};
  margin-top: .5rem;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
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