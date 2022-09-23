import termInterface from "./term-interface";

interface authorInterface {
  id: string | null | undefined,
  name: string | null | undefined
}

export default interface setDataInterface {
  author: authorInterface,
  id: number,
  title: string,
  description: string,
  terms: termInterface[],
  isPrivate: boolean
}