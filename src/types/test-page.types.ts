import termTypes from "./term.types";

interface simpleTest extends termTypes {
    isCorrect: boolean
}
export interface trueFalseTest extends simpleTest {
    isTrue: boolean,
    incorrectAnswer: termTypes | null,
    isAnswered: boolean
}
export interface multipleChoiseTest extends simpleTest {
    possibleAnswers: termTypes[],
    answer: string | null
}
export interface matchingTestItem extends simpleTest {
    answer: string | null
}
interface answersItem {
    answer: string,
    index: number
}
export interface writtenTest extends simpleTest {
    answer: string | null;
}
export interface matchingTest {
    items: matchingTestItem[],
    answers: answersItem[]
}
export interface testType {
    trueFalse: trueFalseTest[],
    multipleChoice: multipleChoiseTest[],
    matching: matchingTest,
    written: writtenTest[],
    lengths: number[],
    totalLength: number
}