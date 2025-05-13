import { add } from './calculator';

describe('Calculator', () => {
  test('should returns 0 for empty string', () => {
    expect(add('')).toBe(0); // Fails: add() doesn't exist yet
  });
});