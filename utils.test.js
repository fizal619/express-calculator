const { add, subtract, multiply, divide } = require("./utils");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiplies 5 * 5 to equal 25", () => {
  expect(multiply(5, 5)).toBe(25);
});

test("divides 25 / 5 to equal 5", () => {
  expect(divide(25, 5)).toBe(5);
});

test("Test for number", () => {
  expect(typeof add(5, 3)).toBe("number");
});
