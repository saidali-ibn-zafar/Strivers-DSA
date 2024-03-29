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

// = = = = = 

// Left Rotate the Array by One 1
const leftRotateArrayByOne1 = (arr: number[], n: number): void => {
  let temp: number[] = new Array(n);
  for (let i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  temp[n - 1] = arr[0];
  console.log(temp);
}

let n: number = 5;
let arr: number[] = [1, 2, 3, 4, 5];
leftRotateArrayByOne1(arr, n);

// = = = = = 

// Left Rotate the Array by One 2
const leftRotateTheArrayByOne2 = (arr: number[]): number[] => {
    const n = arr.length;
    const temp = arr[0];
    for (let i = 0; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
    return arr;
}

console.log(leftRotateTheArrayByOne2([1, 2, 3, 4, 5]));

// = = = = = 

// Rotate array by K elements
const rotateTheArray = (arr: number[], k: number, rotate: string): number[] | string => {
    const n = arr.length;
    if (rotate === "right") {
        let part = arr.splice(n - k, k);
        return [...part, ...arr];
    }
    else if (rotate === "left") {
        let part = arr.splice(0, k);
        return [...arr, ...part];
    }
    else {
        return `Input should only be 'left' or 'right' but not ${rotate}`
    }
}

console.log(rotateTheArray([1, 2, 3, 4, 5], 2, "l"));

// = = = = = 

// Move all Zeros to the end of the array
const moveZeros = (arr: number[]): number[] => {
    const n: number = arr.length;
    let temp: number[] = [];
  
    for(let i: number = 0; i < n; i++){
        if(arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }
    while(temp.length < n) {
        temp.push(0);
    }
    
    return temp;
}

const result: number[] = moveZeros([0, 2, 3, 0, 3, 0, 5, 0, 0, 0, 3, 4, 5]);
console.log(result);

// = = = = = 

// Move all Zeros to the end of the array OPTIMAL APPROACH
const moveZerosOptimal = (arr: number[]): number[] => {
    const n: number = arr.length;
    let j: number = -1;

    for (let i: number = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    if (j === -1) {
        return arr;
    }

    for (let i: number = j + 1; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }

    return arr;
}

const result: number[] = moveZerosOptimal([1, 0, 0, 0, 2]);
console.log('Final array:', result.join(', '));

// = = = = = 

// Linear Search 
const linearSearch = (arr: number[], num: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5];
console.log(linearSearch(arr, 3)); // Output: 2


// = = = = = 
// Find the missing number in an array 
// Brute Force Approach
const missingNum = (arr: number[]): number => {
    const n = arr.length;
    for(let i = 1; i <= n; i++){
        let flag = 0;

        for(let j = 0; j < n; j++){
            if(arr[j] === i){
                flag = 1;
                break;
            }
        }

        if(flag === 0){
            return i;
        }
    }

    return -1;
}

const arr = [1, 2, 4, 5, 6];
console.log(missingNum(arr)); // Output: 3
