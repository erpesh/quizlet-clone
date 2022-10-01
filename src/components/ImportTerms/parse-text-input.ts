const parseTextInput = (text: string, firstSeparator: string, secondSeparator: string) => {
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
export default parseTextInput;