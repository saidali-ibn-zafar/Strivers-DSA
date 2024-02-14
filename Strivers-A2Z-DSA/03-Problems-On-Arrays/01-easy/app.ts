// Find the Largest element in an array
const findLargestElement = (arr: number[]): number => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};

console.log(findLargestElement([5, 2, 56, 7, 3, 2])); // 56

// = = = = =

// Find the Largest element in an array (Iterative Approach)
const recursiveFindLargestElement = (arr: number[]): number => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(recursiveFindLargestElement([2, 5, 3, 6, 8, 7, 5, 3, 44, 7]));

// = = = = =

// Find Second Smallest and Second Largest Element in an array (Brute Force)
const findSecondSmallestAndLargestElement = (arr: number[]): string => {
  if (arr.length === 0 || arr.length === 1) {
    return `-1 -1`;
  }
  arr.sort((a, b) => a - b);
  const secondSmallest = arr[1];
  const secondLargest = arr[arr.length - 2];
  return `Second smallest : ${secondSmallest}\nSecond largest : ${secondLargest}`;
};

console.log(findSecondSmallestAndLargestElement([3, 4, 6, 8, 5, 7]));

// = = = = =

// Find Second Smallest and Second Largest Element in an array (Better approach)
const findSecondAndLargestBetterApproach = (arr: number[]): void => {
  if (arr.length === 0 || arr.length === 1) {
    console.log(`-1 -1`);
    return;
  }

  let small = Infinity,
    secondSmall = Infinity,
    large = -Infinity,
    secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
    if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }
  console.log(
    `Second small is ${secondSmall} and second large is ${secondLarge}`
  );
};

findSecondAndLargestBetterApproach([1, 2, 4, 3, 5, 7, 0, 4, 2, 66]);

// = = = = =

// Find Second Smallest Element in an array (Optimal Approach)
const secondSmallElement = (arr: number[]): number => {
  if (arr.length < 2) return -1;

  let small = Infinity,
    secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
  }
  return secondSmall;
};

console.log(secondSmallElement([3, 2, 5, 6, 7])); // 3

// Find Second Largest Element in an array (Optimal Approach)
const secondLargestElement = (arr: number[]): number => {
  if (arr.length < 2) return -1;

  let large = -Infinity,
    secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
};

console.log(secondLargestElement([3, 2, 5, 6, 7]));

// = = = = = 

// Check if an Array is Sorted
// brute force approach
const isSorted = (arr: number[]): boolean => {
    const n = arr.length;
    if (n < 2) return true;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isSorted([1, 2, 3, 4, 5, 5, 4, 3, 5])); // false

// = = = = =

// Check if an Array is Sorted
// optimal approach
const isSorted2 = (arr: number[]): boolean => {
    const n = arr.length;
    if (n < 2) return true;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

console.log(isSorted2([3, 4, 5, 1, 2])); // true

// = = = = =

// Remove Duplicates in-place from Sorted Array
const removeDuplicates = (arr: number[]): number => {
    let set = new Set(arr);
    let uniqueElements = Array.from(set);
    for (let i = 0; i < uniqueElements.length; i++) {
        arr[i] = uniqueElements[i];
    }
    return uniqueElements.length;
};

const arr: number[] = [1, 1, 2, 2, 2, 3, 3];
const m: number = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < m; i++) {
    console.log(arr[i]);
}

// = = = = =

// Remove Duplicates in-place from Sorted Array
const removeDuplicates2 = (arr: number[]): number[] => {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    arr.splice(i + 1);
    return arr;
};

console.log(removeDuplicates2([1, 1, 2, 2, 3, 3, 4, 4]));

