import { logTimeAndHeap } from '../../../utils/index.js';

const list = [1, 4, 9, 5, 7, 6, 3, 2, 8, 0];

function InsertionSort(arr) {
  let executions = 0;

  for(let i = 1; i < arr.length; i++) {
    for(let j = i; j >= 0; j--) {
      if(arr[j] < arr[j-1]) [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      
      executions ++;
    }
  }
}

logTimeAndHeap(InsertionSort, list);