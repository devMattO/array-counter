'use strict';

let arr = [6,7,9,9];

const incrementArrV1 = input => {
  let numFromArr = input.join('');
  numFromArr++;
  return numFromArr.toString().split('');
};

incrementArrV1(arr);