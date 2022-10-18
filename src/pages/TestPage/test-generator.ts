import termInterface from "../../interfaces/term-interface";

const MAX_NUMBER_OF_TERMS = 20;

// returns array of up to 20 terms for test
export const selectRandomTerms = (terms: termInterface[]) => {
    const shuffledTerms = terms.sort(() => 0.5 - Math.random());
    return shuffledTerms.slice(0, MAX_NUMBER_OF_TERMS);
}
export const generateTest = (terms: termInterface[]) => {
    const termsClone = [...terms];
    let selectedTerms = selectRandomTerms(terms);
    const lengthOfTerms = selectedTerms.length;

    // separating terms to types
    const multipleChoiceTerms = selectedTerms.splice(0, lengthOfTerms / 4);
    const trueFalseTerms = selectedTerms.slice(0, lengthOfTerms / 4);
    const matchingTerms = selectedTerms.slice(0, lengthOfTerms / 4);
    const writtenTerms = selectedTerms.slice(0, lengthOfTerms / 4);


    const trueFalseItems = trueFalseTerms.map(item => {
        return {...item, isTrue: Math.random() < 0.5};
    })

    let leftTerms = [...selectedTerms].sort(() => 0.5 - Math.random())
    const multipleChoiseItems = multipleChoiceTerms.map(item => {
        let possibleAnswers = [];
        for (let i = 0; i < 3; i++){
            let [item] = leftTerms.splice(0, 1);
            possibleAnswers.push(item);
        }
        possibleAnswers.push(item)
        return {...item, possibleAnswers: possibleAnswers};
    })
    return multipleChoiseItems;
}