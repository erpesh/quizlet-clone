export default interface termTypes {
  id: number,
  term: string,
  definition: string,
  isMarked: boolean
}

export interface learnTerm extends termTypes {
  questions: string[]
}