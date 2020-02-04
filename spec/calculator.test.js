const { add, subtract, multiply, divide } = require('../lib/functions');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 20 - 1 to equal 19', () => {
  expect(subtract(20, 1)).toBe(19);
});

test('multiply 8 * 2 to equal 16', () => {
  expect(multiply(8, 2)).toBe(16);
});

test('divide 2 / 2 to equal 1', () => {
  expect(divide(2, 2)).toBe(1);
});

test('should return numbers', () => {
  expect(typeof divide(2, 2)).toBe('number');
});
