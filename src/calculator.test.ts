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

describe('Calculator', () => {
  test('should return sum of two numbers for two input', () => {
    expect(add('2,4')).toBe(6); // Fails: add() doesn't exist yet
  });
});

describe('Calculator', () => {
  test('should return sum of three numbers for two input', () => {
    expect(add('2,4,1')).toBe(7); // Fails: add() doesn't exist yet
  });
});