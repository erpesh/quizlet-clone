interface authorInterface {
  id: string | null | undefined,
  name: string | null | undefined
}

interface termInterface {
  id: number,
  term: string,
  definition: string
}

export default interface setDataInterface {
  author: authorInterface,
  id: number,
  title: string,
  description: string,
  terms: termInterface[],
  isPrivate: boolean
}