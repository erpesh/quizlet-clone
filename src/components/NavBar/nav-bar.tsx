import React, {useReducer, useRef} from 'react'
import Header from './Header/header'
import SideBar from './SideBar/side-bar'
import ModulesHeader from "./ModulesHeader/modules-header";
import ModulesDropDown from "./ModulesDropDown/modules-drop-down";
import LibraryDropDown from "./LibraryDropDown/library-drop-down";
import {initialState, navBarReducer} from "../../reducers/nav-bar";
import useSplitPath from "../../hooks/useSplitPath";

const NavBar = () => {

  const MODULES_PATHS = ['flashcards', 'learn', 'test', 'match'];

  const [state, dispatch] = useReducer(navBarReducer, initialState);
  const modulesButtonRef = useRef<HTMLButtonElement>(null);
  const libraryButtonRef = useRef<HTMLDivElement>(null);
  const splitPath = useSplitPath();

  const toggleSideBar = () => dispatch({type: "MOBILE"});
  const toggleLibrary = () => dispatch({type: "LIBRARY"});
  const toggleModulesDropDown = () => dispatch({type: "MODULES"});

  // Header for learning modules
  console.log(splitPath[2]);
  if (MODULES_PATHS.includes(splitPath[splitPath.length - 1])){
    return <>
      <ModulesHeader
        activePage={splitPath[splitPath.length - 1]}
        id={splitPath[splitPath.length - 2]}
        toggleModulesDropDown={toggleModulesDropDown}
        buttonRef={modulesButtonRef}
      />
      {state.isModulesDropDownOpen && <ModulesDropDown
        activePage={splitPath[splitPath.length - 1]}
        id={splitPath[splitPath.length - 2]}
        toggleModulesDropDown={toggleModulesDropDown}
        buttonRef={modulesButtonRef}
      />}
    </>
  }
  // Default header and sidebar
  return (
    <>
      <Header
        toggle={toggleSideBar}
        toggleLibrary={toggleLibrary}
        buttonRef={libraryButtonRef}
      />
      <SideBar isOpen={state.isMobileOpen} toggle={toggleSideBar}/>
      {state.isLibraryOpen &&
        <LibraryDropDown
          toggleLibrary={toggleLibrary}
          buttonRef={libraryButtonRef}
        />}
    </>
  )
}

export default NavBar