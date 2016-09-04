'use strict';

//string manipulation
let arr = [6,7,9,9];

const incrementArrV1 = input => {
  let numFromArr = input.join('');
  numFromArr++;
  return numFromArr.toString().split('');
};

console.log(incrementArrV1(arr),'<----incrementArrV1(arr)');

// const incrementArrV2 = input => {
//   for (let i = input.length - 1; i >= 0; i--) {
//     if(input[i] === 9){
//       input[i] = 0;
//       ++input[i - 1];
//     }
//     // else{
//     //   return input[input.length - 1]++;
//     // }
//   }

// };

// incrementArrV2(arr);
// console.log(arr,'<----arr');