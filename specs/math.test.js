const math = require("../lib/mathFunctions");

test("adds 1 + 2 to equal 3", () => {
  expect(math.add(1, 2)).toBe(3);
});

test("subtract 2 - 1 to equal 1", () => {
  expect(math.subtract(2, 1)).toBe(1);
});

test("divide 12 % 3 to equal 4", () => {
  expect(math.divide(12, 3)).toBe(4);
});

test("multiply 3 * 4  to equal 12", () => {
  expect(math.multiply(3, 4)).toBe(12);
});
