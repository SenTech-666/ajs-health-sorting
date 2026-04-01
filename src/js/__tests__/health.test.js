import { healthIndicator } from '../health';

test('should return healthy when health > 50', () => {
  const result = healthIndicator({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should return wounded when health between 15 and 50', () => {
  expect(healthIndicator({ name: 'Маг', health: 50 })).toBe('wounded');
  expect(healthIndicator({ name: 'Маг', health: 30 })).toBe('wounded');
  expect(healthIndicator({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('should return critical when health < 15', () => {
  expect(healthIndicator({ name: 'Маг', health: 14 })).toBe('critical');
  expect(healthIndicator({ name: 'Маг', health: 0 })).toBe('critical');
  expect(healthIndicator({ name: 'Маг', health: -10 })).toBe('critical');
});