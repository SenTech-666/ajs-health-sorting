import { sortHeroesByHealth } from '../sorting';

test('should sort heroes by health descending', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroesByHealth(heroes);

  expect(result).toEqual(expected);        
  expect(result).not.toBe(expected);       
});

test('should handle empty array', () => {
  expect(sortHeroesByHealth([])).toEqual([]);
});

test('should handle array with one hero', () => {
  const hero = { name: 'воин', health: 50 };
  expect(sortHeroesByHealth([hero])).toEqual([hero]);
});