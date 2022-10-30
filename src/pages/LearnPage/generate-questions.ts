import termTypes, {learnTerm} from "../../types/term.types";

function generateQuestions(terms: termTypes[]) {
  let result: learnTerm[] = [];
  for (let i = 0; i < terms.length; i++){
    let questions: string[] = [terms[i].term];
    while (questions.length < 4){
      const randomIndex = Math.floor(Math.random() * terms.length);
      if (!questions.includes(terms[randomIndex].term))
        questions.push(terms[randomIndex].term);
    }

    result.push({...terms[i], questions: questions.sort(() => 0.5 - Math.random())});
  }
  return result.sort(() => 0.5 - Math.random());
}
export default generateQuestions;