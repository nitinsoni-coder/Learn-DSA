/* 
   Time complexity : O(n²)
   space complexity : O(1)
*/
function rowWithMaxOne(mat) {
  let count = 0;
  let max = 0;
  let row = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    if (max < count) {
      max = count;
      row = i;
    }
  }

  return row;
}

// var mat = [
//   [0, 0, 0, 1],
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 0, 0],
// ];
// console.log(rowWithMaxOne(mat));

/* 
   Time complexity : O(M + N)
   space complexity : O(1)
*/
function rowWithMaxOnes(mat) {
  const R = mat.length;
  const C = mat[0].length;

  let maxRow = -1;
  let row = 0;
  let col = C - 1;

  while (row < R && col >= 0) {
    if (mat[row][col] === 0) {
      row++;
    } else {
      maxRow = row;
      col--;
    }
  }

  return maxRow;
}

var mat = [
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

console.log(rowWithMaxOnes(mat));
