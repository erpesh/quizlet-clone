export default interface termType {
  id: number,
  term: string,
  definition: string,
  isMarked: boolean
}

export interface learnTerm extends termType {
  questions: string[]
}