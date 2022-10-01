import setDataInterface from "../../interfaces/set-data.interface";
import termInterface from "../../interfaces/term-interface";

export function importButtonHandler(data: setDataInterface, termsArray: termInterface[]) {
  let items = data.terms;
  items = items.filter(item => item.term.length > 0 && item.definition.length > 0)
  items = items.concat(termsArray);
  return items;
}