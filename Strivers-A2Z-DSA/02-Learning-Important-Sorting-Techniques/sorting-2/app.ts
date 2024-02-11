// Recursive Bubble Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Recursive Bubble Sort algorithm.
const recursiveBubbleSort = (
  arr: number[],
  n: number = arr.length
): number[] => {
  if (n === 1) return arr;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return recursiveBubbleSort(arr, n - 1);
};

const arr = [13, 46, 24, 52, 20, 9];
recursiveBubbleSort(arr);
console.log(arr); // [ 9, 13, 20, 24, 46, 52 ]

// = = = = = =
