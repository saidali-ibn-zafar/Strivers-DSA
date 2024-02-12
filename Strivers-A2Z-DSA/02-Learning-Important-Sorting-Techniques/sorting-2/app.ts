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

// Recursive Insertion Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Recursive Insertion Sort algorithm.
const recursiveInsertionSort = (arr: number[], i: number = 0, n: number = arr.length): number[] => {
    if (i === n) return arr;

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        // Swap arr[j] and arr[j - 1]
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
    }

    return recursiveInsertionSort(arr, i + 1, n);
}

console.log(recursiveInsertionSort([4, 2, 5, 3, 5, 6])); // [ 2, 3, 4, 5, 5, 6 ]
