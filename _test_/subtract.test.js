const subtract = require("../functions/subtract.js");

test("subtract function minuses 10 - 7 to equal 3", () => {
  expect(subtract(10, 7)).toBe(3);
});
