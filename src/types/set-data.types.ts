import termType from "./termType";

interface authorInterface {
  id: string | null | undefined,
  name: string | null | undefined,
  photoURL: string | null | undefined
}

export default interface setDataInterface {
  author: authorInterface,
  id: number,
  title: string,
  description: string,
  terms: termType[],
  isPrivate: boolean
}