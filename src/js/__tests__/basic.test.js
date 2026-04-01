import sum from '../basic';

test('should sum positive numbers', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test('should return 0 for empty array', () => {
  expect(sum([])).toBe(0);
});

test('should handle negative numbers', () => {
  expect(sum([-1, -2, 5])).toBe(2);
});

test('should handle one element array', () => {
  expect(sum([42])).toBe(42);
});