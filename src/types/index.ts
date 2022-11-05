export interface ITerm {
  id: number,
  term: string,
  definition: string,
  isMarked: boolean
}

export interface ILearnTerm extends ITerm{
  questions: string[]
}

interface IAuthor {
  id: string | null | undefined,
  name: string | null | undefined,
  photoURL: string | null | undefined
}

export interface IStudySet {
  author: IAuthor,
  id: number,
  title: string,
  description: string,
  terms: ITerm[],
  isPrivate: boolean
}

interface simpleTest extends ITerm {
  isCorrect: boolean
}

export interface ITrueFalse extends simpleTest {
  isTrue: boolean,
  incorrectAnswer: ITerm | null,
  isAnswered: boolean
}

export interface IMultipleChoice extends simpleTest {
  possibleAnswers: ITerm[],
  answer: string | null
}

export interface IMatchingItem extends simpleTest {
  answer: string | null
}

interface answersItem {
  answer: string,
  index: number
}

export interface IWritten extends simpleTest {
  answer: string | null;
}

export interface IMatching {
  items: IMatchingItem[],
  answers: answersItem[]
}

export interface ITestSet {
  trueFalse: ITrueFalse[],
  multipleChoice: IMultipleChoice[],
  matching: IMatching,
  written: IWritten[],
  lengths: number[],
  totalLength: number
}