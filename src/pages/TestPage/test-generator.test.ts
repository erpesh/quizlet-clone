import generateTest from "./test-generator";
import {ITerm} from "../../types";

const generateTerms = (amount: number) => {
  const termTypes: ITerm[] = [];
  for (let i = 0; i < amount; i++) {
    termTypes.push({
      id: Math.random(),
      term: `${i * i * i} 124`,
      definition: `${i + 124} 14`,
      isMarked: false
    })
  }
  return termTypes;
}

test("should return total length 0", () => {
  const generatedTest = generateTest([]);
  expect(generatedTest.totalLength).toBe(0);
})
test("should return lengths 1 1 2 1", () => {
  const terms = generateTerms(5);
  const generatedTest = generateTest(terms);
  expect(generatedTest.lengths[0]).toEqual(1);
  expect(generatedTest.lengths[1]).toEqual(1);
  expect(generatedTest.lengths[2]).toEqual(2);
  expect(generatedTest.lengths[3]).toEqual(1);
});
test("should return lengths 1 1 0 2", () => {
  const terms = generateTerms(4);
  const generatedTest = generateTest(terms);
  expect(generatedTest.lengths[0]).toEqual(1);
  expect(generatedTest.lengths[1]).toEqual(1);
  expect(generatedTest.lengths[2]).toEqual(0);
  expect(generatedTest.lengths[3]).toEqual(2);
})
test("should return lengths 5 5 5 5", () => {
  const terms = generateTerms(45);
  const generatedTest = generateTest(terms);
  generatedTest.lengths.forEach(item => {
    expect(item).toEqual(5);
  })
  expect(generatedTest.totalLength).toBe(20);
})