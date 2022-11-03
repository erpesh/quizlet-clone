import React, {useEffect, useState, useRef} from 'react'
import Header from './Header/header'
import SideBar from './SideBar/side-bar'
import ModulesHeader from "./ModulesHeader/modules-header";
import ModulesDropDown from "./ModulesDropDown/modules-drop-down";
import {useLocation} from "react-router-dom";

const NavBar = () => {

  const MODULES_PATHS = ['flashcards', 'learn', 'test', 'match'];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [splitPath, setSplitPath] = useState<string[]>(location.pathname.split("/"));
  const [isModulesDropDownOpen, setIsModulesDropDownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSplitPath(location.pathname.split('/'));
  }, [location.pathname]);

  const toggleSideBar = () => setIsOpen(!isOpen);
  const toggleModulesDropDown = () => setIsModulesDropDownOpen(!isModulesDropDownOpen);

  // Header for learning modules
  if (splitPath.length === 3 && MODULES_PATHS.includes(splitPath[2]))
    return <>
      <ModulesHeader
          activePage={splitPath[2]}
          id={splitPath[1]}
          toggleModulesDropDown={toggleModulesDropDown}
          buttonRef={buttonRef}
      />
      {isModulesDropDownOpen && <ModulesDropDown
          activePage={splitPath[2]}
          id={splitPath[1]}
          toggleModulesDropDown={toggleModulesDropDown}
          buttonRef={buttonRef}
      />}
    </>
  // Default header and sidebar
  return (
      <>
        <Header toggle={toggleSideBar}/>
        <SideBar isOpen={isOpen} toggle={toggleSideBar}/>
      </>
  )
}

export default NavBar