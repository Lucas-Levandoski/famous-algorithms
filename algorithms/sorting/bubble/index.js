import { logTimeAndHeap } from '../../../utils/index.js';

const list = [1, 4, 9, 5, 7, 6, 3, 2, 8, 0];

let executions = 0;

function BoobleSort(items) {
  for(let i = 0; i < items.length; i++) {
    for(let j = 0; j < items.length; j++) {
      if(items[i] < items[j]) {
        [items[i], items[j]] = [items[j], items[i]];
        executions ++;
      }
    }
  }
}

logTimeAndHeap(BoobleSort, list);