// Selection Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.
const selectionSort = (arr: number[]): void => {
  // n is length of an array
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
};

const arr = [13, 46, 24, 52, 20, 9];
selectionSort(arr); // [ 9, 13, 20, 24, 46, 52 ]

// = = = = =

// Bubble Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.
const bubbleSort = (arr: number[]): void => {
  const n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

bubbleSort(arr); // [ 9, 13, 20, 24, 46, 52 ]

// = = = = = 

// Insertion Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.
const insertionSort = (arr: number[]): void => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap elements
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
  console.log(arr);
}

// = = = = = 

