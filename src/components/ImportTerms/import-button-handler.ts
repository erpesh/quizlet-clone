import {IStudySet, ITerm} from "../../types";

export function importButtonHandler(data: IStudySet, termsArray: ITerm[]) {
  let items = data.terms;
  items = items.filter(item => item.term.length > 0 && item.definition.length > 0)
  items = items.concat(termsArray);
  return items;
}