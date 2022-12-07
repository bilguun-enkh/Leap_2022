console.log("Array Methods.");

function findAt(arr, index) {
  return arr[index];
}

const array1 = [1, 2, 3, 4, 5];
console.log(findAt(array1, 0));
console.log(findAt(array1, 4));

console.log(array1.at(0));
console.log(array1.at(4));




function arrConcat(arr1, arr2) {
  let concatedArray = [];
  for (let i = 0; i < arr2.length; i++) {
    concatedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    concatedArray.push(arr2[i]);
  }
  return concatedArray;
}
let arrayC1 = [1, 2, 3];
let arrayC2 = [4, 5, 6];
console.log(arrConcat(arrayC1, arrayC2));
console.log(arrConcat(arrayC2, arrayC1));

console.log(arrayC1.concat(arrayC2));
console.log(arrayC1 + "," + arrayC2);




function arrayElementAdd(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum[i] = arr1[i] + arr2[i];
  }
  return sum;
}
console.log(arrayElementAdd(arrayC1, arrayC2));




let arrayIncludes = function (array, number) {
  let found = false;
  for (let i = 0; i < array.length; i++)
    if (number === array[i]) {
      found = true;
      break;
    }
  return found;
};

const arrayInc = [2, 4, 5];
console.log(arrayIncludes(arrayInc, 2));
console.log(arrayIncludes(arrayInc, 5));
console.log(arrayIncludes(arrayInc, 3));

console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));

let findIndex = function (array, number) {
  let index = -1
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      index = i
    }
  }
  return index
}
const arrayIndex = [1, 2, 3]
console.log(findIndex(arrayIndex, 3))
console.log(findIndex(arrayIndex, 2))
console.log(findIndex(arrayIndex, 10))

console.log(arrayIndex.indexOf(3));

let funcJoin = (array, symbol) => {
  let output = ''
  for (let i = 0; i < array.length; i++) {
    output = output + array[i] + symbol
  }
  return output
}


const arrayJoin = [1, 2, 3]
console.log(funcJoin(arrayJoin, "+"));


let popFunc = (array) => {
  const lastIndex = array.length - 1
  let poppedArray = []

  for (let i = 0; i < array.length; i++) {
    if ( i != lastIndex) {
      poppedArray.push(array[i])
    }
  }

  return poppedArray
}

const popArray = [1, 2, 3]
console.log(popFunc([12,4,3,5,6]))

