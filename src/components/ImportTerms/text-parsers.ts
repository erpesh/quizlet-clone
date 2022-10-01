export const parseTextInput = (text: string, firstSeparator: string, secondSeparator: string) => {
  const _firstSeparator = firstSeparator.replace(/\\t/g, "\t").replace(/\\n/g, "\n");
  const _secondSeparator = secondSeparator.replace(/\\t/g, "\t").replace(/\\n/g, "\n")
  const splitBySecond = text.split(_secondSeparator);
  let splitByFirst = [];
  for (let i = 0; i < splitBySecond.length; i++) {
    let splitItem = splitBySecond[i].split(_firstSeparator);
    let item = {
      term: splitItem[0],
      definition: splitItem[1],
      id: Math.random()
    }
    splitByFirst.push(item);
  }
  return text.length > 0? splitByFirst : [];
}
export const placeHolderHandler = (firstSeparator: string, secondSeparator: string) => {
  const examples = [
    ["Word 1", "Definition 1"],
    ["Word 2", "Definition 2"],
    ["Word 3", "Definition 3"],
  ]
  const _firstSeparator = firstSeparator.replace(/\\t/g, "\t").replace(/\\n/g, "\n");
  const _secondSeparator = secondSeparator.replace(/\\t/g, "\t").replace(/\\n/g, "\n")
  return examples.map(item => item.join(_firstSeparator)).join(_secondSeparator);
}