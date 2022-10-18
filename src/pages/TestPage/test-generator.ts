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
    const trueFalseTerms = selectedTerms.splice(0, lengthOfTerms / 4);
    const multipleChoiceTerms = selectedTerms.splice(0, lengthOfTerms / 4);
    const matchingTerms = selectedTerms.splice(0, lengthOfTerms / 4);
    const writtenTerms = selectedTerms.splice(0, lengthOfTerms / 4);


    const trueFalseItems = trueFalseTerms.map(item => {
        return {...item, isTrue: Math.random() < 0.5};
    })

    const multipleChoiseItems = multipleChoiceTerms.map(item => {
        let incorrestAnswers = [];

    })
    return trueFalseItems;
}