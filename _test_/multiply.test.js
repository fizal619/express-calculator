const multiply = require("../functions/multiply");

test("multiply function multiplies 10 * 3 to equal 30", () => {
  expect(multiply(10, 3)).toBe(30);
});
