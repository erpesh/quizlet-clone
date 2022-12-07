import React, {useEffect, useReducer} from "react";
import {importTermsTextReducer, initialState} from "../reducers/import-terms-text";
import {importButtonHandler} from "../components/ImportTerms/import-button-handler";
import {parseTextInput} from "../components/ImportTerms/text-parsers";
import {IStudySet} from "../types";

function useImportTerms(data: IStudySet, setData: (data: IStudySet) => void) {
  const [state, dispatch] = useReducer(importTermsTextReducer, initialState);

  const handleImportButtonBase = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let items = importButtonHandler(data, state.termsArray);
    dispatch({type: "SET_TEXT", payload: ""});
    dispatch({type: "SET_TERMS_ARRAY", payload: []});
    setData({...data, terms: items})
  }

  useEffect(() => {
    dispatch({type: "SET_TERMS_ARRAY", payload: parseTextInput(state.textInput, state.firstSeparator, state.secondSeparator)})
  }, [state])

  return {state, dispatch, handleImportButtonBase};
}
export default useImportTerms;