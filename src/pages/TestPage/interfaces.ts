import termInterface from "../../interfaces/term-interface";

export interface simpleTest extends termInterface {
    isCorrect: boolean
}
export interface trueFalseTest extends simpleTest {
    isTrue: boolean,
    incorrectAnswer: termInterface | null
}
export interface multipleChoiseTest extends simpleTest {
    possibleAnswers: termInterface[]
}
export interface testType {
    trueFalse: trueFalseTest[],
    multipleChoice: multipleChoiseTest[],
    matching: simpleTest[],
    written: simpleTest[],
    lengths: number[],
    totalLength: number
}