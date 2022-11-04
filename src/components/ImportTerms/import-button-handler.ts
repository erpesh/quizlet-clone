import setDataInterface from "../../types/set-data.types";
import termType from "../../types/termType";

export function importButtonHandler(data: setDataInterface, termsArray: termType[]) {
  let items = data.terms;
  items = items.filter(item => item.term.length > 0 && item.definition.length > 0)
  items = items.concat(termsArray);
  return items;
}