export const INITIAL_CREATE_STATE = {
  author: {
    name: null,
    id: null
  },
  id: Date.now(),
  title: "",
  description: "",
  terms: [
    {id: Math.random(), term: "", definition: "", isMarked: false},
    {id: Math.random(), term: "", definition: "", isMarked: false},
    {id: Math.random(), term: "", definition: "", isMarked: false},
  ],
  isPrivate: true
}