'use strict';

function scaleBalancing(strArr) {
  const leftAndRight = JSON.parse(strArr[0]);
  const weights = JSON.parse(strArr[1]);

  const left = leftAndRight[0];
  const right = leftAndRight[1];

  for (let i = 0; i < weights.length; i++) {
    if (left + weights[i] === right) {
      return weights[i].toString();
    } else if (left === right + weights[i]) {
      return weights[i].toString();
    }
  }

  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights.length; j++) {
      if (left + weights[i] === right + weights[j]) {
        return [weights[i], weights[j]].sort().toString();
      } else if (left + weights[i] + weights[j] === right && i !== j) {
        return [weights[i], weights[j]].sort().toString();
      } else if (left === weights[i] + weights[j] + right && i !== j) {
        return [weights[i], weights[j]].sort().toString();
      }
    }
  }

  return 'not possible';
}

const testArray = ['[5, 9]', '[1, 2, 6, 7, 4]'];

console.log(scaleBalancing(testArray));
