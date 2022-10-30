import termTypes from "./term.types";

interface authorInterface {
  id: string | null | undefined,
  name: string | null | undefined
}

export default interface setDataInterface {
  author: authorInterface,
  id: number,
  title: string,
  description: string,
  terms: termTypes[],
  isPrivate: boolean
}