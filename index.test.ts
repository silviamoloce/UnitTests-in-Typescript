import { add } from './index';
import { getDifferenceBetweenTwoMaxNumbers } from './index';
import { isPalindrome } from './index';

describe('add method', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });
});


describe('getDifferenceBetweenTwoMaxNumbers method', () => {
  test('returns the difference between two maximum numbers', () => {
    const result = getDifferenceBetweenTwoMaxNumbers([5, 8, 2, 10, 7]);
    expect(result).toBe(3); // failing test
  });

  test('returns 0 for an array with identical maximum numbers', () => {
    const result = getDifferenceBetweenTwoMaxNumbers([5, 8, 2, 10, 10]);
    expect(result).toBe(0);
  });

  test('throws an error for an array with less than two numbers', () => {
    expect(() => {
      getDifferenceBetweenTwoMaxNumbers([5]);
    }).toThrowError('Array must have at least two numbers.');
  });
});

describe('isPalindrome method', () => {
  test('returns true for a palindrome number', () => {
    const result = isPalindrome(1221);
    expect(result).toBe(true);
  });

  test('returns true for a single-digit number', () => {
    const result = isPalindrome(7);
    expect(result).toBe(true);
  });

  test('returns false for a non-palindrome number', () => {
    const result = isPalindrome(12345);
    expect(result).toBe(false);
  });

  test('returns false for a negative palindrom number', () => {
    const result = isPalindrome(-1221);
    expect(result).toBe(false); //failing test
  });

  // Add more test cases as needed
});