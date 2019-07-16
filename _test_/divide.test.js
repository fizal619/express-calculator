const divide = require("../functions/divide.js");

test("divide function divides 10 / 5 to equal 2", () => {
  expect(divide(10, 5)).toBe(2);
});
