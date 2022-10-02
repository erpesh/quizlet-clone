export const INITIAL_CREATE_STATE = {
  author: {
    name: null,
    id: null
  },
  id: Date.now(),
  title: "",
  description: "",
  terms: [
    {term: "", definition: "", id: Math.random()},
    {term: "", definition: "", id: Math.random()},
    {term: "", definition: "", id: Math.random()},
  ],
  isPrivate: true
}