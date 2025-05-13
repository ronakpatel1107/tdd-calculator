import { add } from './calculator';

describe('Calculator', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add('2,3')).toBe(5); // Fails: add() doesn't exist yet
  });
});