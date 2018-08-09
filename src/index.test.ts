import {addNumbers} from "./index";

describe("first test", () => {
  test("it should pass", () => {
    expect(true).toBe(true);
  });
});

describe("starter template tests", () => {
  test("adding 2 & 3 results in 5", () => {
    expect(addNumbers(2, 3) === 5);
  });
});
