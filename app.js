'use strict';

function scaleBalancing(strArr) {
  let leftAndRight = strArr[0].slice(1, strArr[0].length - 1);
  let balancingWeights = strArr[1].slice(1, strArr[1].length - 1);

  leftAndRight = leftAndRight.split(', ');
  balancingWeights = balancingWeights.split(', ');

  for (let i = 0; i < leftAndRight.length; i++) {
    leftAndRight[i] = parseInt(leftAndRight[i]);
  }

  for (let i = 0; i < balancingWeights.length; i++) {
    balancingWeights[i] = parseInt(balancingWeights[i]);
  }

  const left = leftAndRight[0];
  const right = leftAndRight[1];
  const weights = balancingWeights;

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
