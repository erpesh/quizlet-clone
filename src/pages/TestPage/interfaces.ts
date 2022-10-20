import termInterface from "../../interfaces/term-interface";

interface simpleTest extends termInterface {
    isCorrect: boolean
}
interface trueFalseTest extends simpleTest {
    isTrue: boolean,
    incorrectAnswer: termInterface | null
}
interface multipleChoiseTest extends simpleTest {
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