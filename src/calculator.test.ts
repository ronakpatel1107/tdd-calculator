import { add } from './calculator';

describe('Calculator', () => {
  test('should returns 0 for empty string', () => {
    expect(add('')).toBe(0); 
  });
});

describe('Calculator', () => {
  test('should return the number itself for a single number input', () => {
    expect(add('1')).toBe(1); 
  });
});

describe('Calculator', () => {
  test('should return sum of two numbers for two input', () => {
    expect(add('2,4')).toBe(6); 
  });
});

describe('Calculator', () => {
  test('should return sum of all numbers for multiple inputs', () => {
    expect(add('2,4,1')).toBe(7); 
  });
});

describe('Calculator', () => {
  test('should return sum of all numbers for multiple inputs', () => {
    expect(add('2,4,1,4,5')).toBe(16); 
  });
});

describe('Calculator', () => {
  test('should return 5', () => {
    expect(add('2\n3')).toBe(5); 
  });
});

describe('Calculator', () => {
  test('should allow new line and return 6', () => {
    expect(add('2\n3,1')).toBe(6); 
  });
});