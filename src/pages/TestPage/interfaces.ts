import termInterface from "../../interfaces/term-interface";

export interface trueFalseTest extends termInterface {
    isTrue: boolean
}
export interface multipleChoiseTest extends termInterface {
    possibleAnswers: termInterface[]
}