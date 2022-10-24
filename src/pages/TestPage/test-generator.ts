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

    // separating terms to types
    const multipleChoiceTerms = selectedTerms.splice(0, selectedTerms.length / 4);

    const trueFalseTerms = selectedTerms.splice(0, selectedTerms.length / 3);
    let incorrectAnswers = termsClone.filter(item => {
        return trueFalseTerms.filter(trueFalseItem => trueFalseItem.id === item.id).length === 0;
    })
    let incorrectMultipleAnswers = termsClone.filter(item => {
        return multipleChoiceTerms.filter(mChouseItem => mChouseItem.id === item.id).length === 0;
    })

    const writtenTerms = selectedTerms.splice(0, selectedTerms.length / 2);
    const matchingTerms = selectedTerms;

    // generate true or false tests
    const trueFalseItems = trueFalseTerms.map(item => {
        let number = Math.random() < 0.5;
        if (number) {
            const randomNumber = Math.floor(Math.random()*incorrectAnswers.length)
            const [incorrectAnswer] = incorrectAnswers.splice(randomNumber, 1);
            return {
                ...item,
                isTrue: false,
                isCorrect: false,
                incorrectAnswer: incorrectAnswer
            }
        }
        return { ...item, isTrue: true, isCorrect: false, incorrectAnswer: null };
    })

    // generate multiple choise tests
    const multipleChoiseItems = multipleChoiceTerms.map(item => {
        let possibleAnswers = [];
        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random()*incorrectMultipleAnswers.length)
            let [item] = incorrectMultipleAnswers.splice(randomNumber, 1);
            possibleAnswers.push(item);
        }
        possibleAnswers.push(item)
        //shuffle answers
        possibleAnswers = possibleAnswers.sort(() => 0.5 - Math.random());
        return { ...item, possibleAnswers: possibleAnswers, isCorrect: false, answer: null };
    })

    const matchingItems = matchingTerms.map(item => {
        return { ...item, isCorrect: false, answer: null }
    })
    const matchingTest = {
        items: matchingItems,
        answers: matchingItems.map((item, index) =>  ({answer: item.term, index: index})).sort(() => 0.5 - Math.random())
    }

    const writtenItems = writtenTerms.map(item => {
        return { ...item, isCorrect: false, answer: null }
    })

    const lengths = [
        trueFalseItems.length,
        multipleChoiseItems.length,
        matchingItems.length,
        writtenItems.length
    ]
    const generatedTest = {
        trueFalse: trueFalseItems,
        multipleChoice: multipleChoiseItems,
        matching: matchingTest,
        written: writtenItems,
        lengths: lengths,
        totalLength: lengths.reduce((partialSum, a) => partialSum + a, 0)
    }
    return generatedTest;
}