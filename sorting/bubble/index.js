
const list = [1, 4, 2, 5, 6, 7, 3, 9, 8, 0];
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

BoobleSort(list);