import setDataInterface from "../../types/set-data.types";
import termTypes from "../../types/term.types";

export function importButtonHandler(data: setDataInterface, termsArray: termTypes[]) {
  let items = data.terms;
  items = items.filter(item => item.term.length > 0 && item.definition.length > 0)
  items = items.concat(termsArray);
  return items;
}