import termInterface from "../../interfaces/term-interface";

interface simpleTest extends termInterface {
    isCorrect: boolean
}
export interface trueFalseTest extends simpleTest {
    isTrue: boolean,
    incorrectAnswer: termInterface | null,
    isAnswered: boolean
}
export interface multipleChoiseTest extends simpleTest {
    possibleAnswers: termInterface[],
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