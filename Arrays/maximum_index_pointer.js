/* 
  Time complexity : O(n)
  space complexity : O(1)
*/

function maxIndexPointer(N, B) {
  let max_index = 0;

  for (let i = 0; i < N; i++) {
    if (i !== B) {
      max_index += Math.pow(2, N - i - 1);
    }
  }

  return max_index;
}

const N = 3;
const B = 1;
console.log(maxIndexPointer(N, B));
