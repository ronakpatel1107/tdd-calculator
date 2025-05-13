import { add } from './calculator';

describe('Calculator', () => {
  test('should returns 0 for empty string', () => {
    expect(add('')).toBe(0); // Fails: add() doesn't exist yet
  });
});

describe('Calculator', () => {
  test('should return the number itself for a single number input', () => {
    expect(add('1')).toBe(1); // Fails: add() doesn't exist yet
  });
});