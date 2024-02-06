export function add(a: number, b: number): number {
  return a + b;
}

export function getDifferenceBetweenTwoMaxNumbers(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error('Array must have at least two numbers.');
  }

  const sortedArr = arr.sort((a, b) => b - a);
  const max1 = sortedArr[0];
  const max2 = sortedArr[1];

  const difference = max1 - max2;
  return difference;
}

export function isPalindrome(num: number): boolean {
  const numStr = num.toString();
  const reversedStr = numStr.split('').reverse().join('');

  return numStr === reversedStr;
}
