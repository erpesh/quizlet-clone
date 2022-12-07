import {ITerm} from "../types";

export type ImportTermsTextAction =
  | { type: "SET_TEXT", payload: string }
  | { type: "SET_FIRST_SEPARATOR", payload: string }
  | { type: "SET_SECOND_SEPARATOR", payload: string }
  | { type: "SET_TERMS_ARRAY", payload: ITerm[]}

export interface ImportTermsTextState {
  textInput: string,
  firstSeparator: string,
  secondSeparator: string,
  termsArray: ITerm[]
}

export const initialState: ImportTermsTextState = {
  textInput: "",
  firstSeparator: "\t",
  secondSeparator: "\n",
  termsArray: []
}

export function importTermsTextReducer(
  state: ImportTermsTextState,
  action: ImportTermsTextAction
): ImportTermsTextState {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        textInput: action.payload
      }
    case "SET_FIRST_SEPARATOR":
      return {
        ...state,
        firstSeparator: action.payload
      }
    case "SET_SECOND_SEPARATOR":
      return {
        ...state,
        secondSeparator: action.payload
      }
    case "SET_TERMS_ARRAY":
      return {
        ...state,
        termsArray: action.payload
      }
    default:
      return state;
  }
}