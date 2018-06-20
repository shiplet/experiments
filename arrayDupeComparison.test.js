const {
  testMethod,
  arrayFrom,
  arraySlice,
  arrayObjAssign
} = require("./arrayDupeComparison");

const iterations = 1000000;

describe("arrayFrom", () => {
  const result = testMethod(arrayFrom, iterations);
  test("newArr should be longer than origin by one", () => {
    expect(result.newArr).toHaveLength(result.origin.length + 1);
  });
  test("newArr last element should be " + (iterations - 1), () => {
    expect(result.newArr[result.newArr.length - 1]).toBe(iterations - 1);
  });
  test("totalTime: " + result.totalTime + "s", () => {
    expect(result.totalTime).toBeGreaterThan(0);
  });
});

describe("arraySlice", () => {
  const result = testMethod(arraySlice, iterations);
  test("newArr should be longer than origin by one", () => {
    expect(result.newArr).toHaveLength(result.origin.length + 1);
  });
  test("newArr last element should be " + (iterations - 1), () => {
    expect(result.newArr[result.newArr.length - 1]).toBe(iterations - 1);
  });
  test("totalTime: " + result.totalTime + "s", () => {
    expect(result.totalTime).toBeGreaterThan(0);
  });
});

describe("arrayObjAssign", () => {
  const result = testMethod(arrayObjAssign, iterations);
  test("newArr should be longer than origin by one", () => {
    expect(result.newArr).toHaveLength(result.origin.length + 1);
  });
  test("newArr last element should be " + (iterations - 1), () => {
    expect(result.newArr[result.newArr.length - 1]).toBe(iterations - 1);
  });
  test("totalTime: " + result.totalTime + "s", () => {
    expect(result.totalTime).toBeGreaterThan(0);
  });
});
