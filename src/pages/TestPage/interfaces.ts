import termInterface from "../../interfaces/term-interface";

interface simpleTest extends termInterface {
    isCorrect: boolean
}
interface trueFalseTest extends simpleTest {
    isTrue: boolean,
    incorrectAnswer: termInterface | null
}
interface multipleChoiseTest extends simpleTest {
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
export interface matchingTest {
    items: matchingTestItem[],
    answers: answersItem[]
}
export interface testType {
    trueFalse: trueFalseTest[],
    multipleChoice: multipleChoiseTest[],
    matching: matchingTest,
    written: simpleTest[],
    lengths: number[],
    totalLength: number
}