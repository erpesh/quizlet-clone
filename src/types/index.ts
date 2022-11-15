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

interface IBaseTest extends ITerm {
  isCorrect: boolean
}

export interface ITrueFalse extends IBaseTest {
  isTrue: boolean,
  incorrectAnswer: ITerm | null,
  isAnswered: boolean
}

export interface IMultipleChoice extends IBaseTest {
  possibleAnswers: ITerm[],
  answer: string | null
}

export interface IMatchingItem extends IBaseTest {
  answer: string | null
}

interface IAnswerItem {
  answer: string,
  index: number
}

export interface IWritten extends IBaseTest {
  answer: string | null;
}

export interface IMatching {
  items: IMatchingItem[],
  answers: IAnswerItem[]
}

export interface ITestSet {
  trueFalse: ITrueFalse[],
  multipleChoice: IMultipleChoice[],
  matching: IMatching,
  written: IWritten[],
  lengths: number[],
  totalLength: number
}
export enum StudySetExceptions {
  TITLE = "Enter study set's title!",
  DESCRIPTION = "Enter study set's description!",
  TERMS = "Terms should not be empty!",
  TERMS_NUMBER = "Study set should have 3 or more terms!",
}