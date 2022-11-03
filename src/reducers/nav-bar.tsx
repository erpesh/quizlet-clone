export type NavBarAction =
    | { type: "MOBILE" }
    | { type: "LIBRARY" }
    | { type: "MODULES" }

export interface NavBarState {
  isMobileOpen: boolean,
  isLibraryOpen: boolean,
  isModulesDropDownOpen: boolean
}

export const initialState: NavBarState = {
  isMobileOpen: false,
  isLibraryOpen: false,
  isModulesDropDownOpen: false
}

export function navBarReducer(
    state: NavBarState,
    action: NavBarAction
): NavBarState {
  switch (action.type){
    case "MOBILE":
      return {
        ...state,
        isMobileOpen: !state.isMobileOpen
      }
    case "LIBRARY":
      return {
        ...state,
        isLibraryOpen: !state.isLibraryOpen
      }
    case "MODULES":
      return {
        ...state,
        isModulesDropDownOpen: !state.isModulesDropDownOpen
      }
    default:
      return state;
  }
}