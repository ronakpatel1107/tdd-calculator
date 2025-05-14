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

describe('Calculator', () => {
  test('should handle custom delimiters and return the sum of all the numbers', () => {
    expect(add('//;\n1;2')).toBe(3); 
  });
});


describe('Calculator', () => {
  test('should throw an exception for a negative number', () => {
    expect(()=>add('2,-4')).toThrow("negative numbers not allowed");
  });
});

describe('Calculator', () => {
  test('should throw an exception for a negative number', () => {
    expect(()=>add('-1')).toThrow("negative numbers not allowed");
  });
});

describe('Calculator', () => {
  test('should throw an exception for a negative number', () => {
    expect(()=>add('//;\n-1;2')).toThrow("negative numbers not allowed");
  });
});