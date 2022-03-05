function quickSort(array) {
  if(array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let less = [];
  let greater = [];

  for(let i = 1; i < array.length; i++) {
    (array[i] < pivot)? less.push(array[i]): greater.push(array[i]);
  }

  return quickSort(less).concat(pivot, quickSort(greater));
  
}

let array = [5, 2, 7, 90, 3, 8];

let sorted = quickSort(array);

console.log('UnSorted array', array);
console.log('Sorted array', sorted);
