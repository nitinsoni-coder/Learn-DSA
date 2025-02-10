function findLongestConseqSubseq(arr, n) {
  let S = new Set(arr);
  let ans = 0;

  // check each possible sequence from
  // the start then update optimal length
  for (let i = 0; i < n; i++) {
    // if current element is the starting
    // element of a sequence

    console.log(
      "i : ",
      i,
      "num :",
      arr[i] - 1,
      "not exist :",
      !S.has(arr[i] - 1)
    );
    if (!S.has(arr[i] - 1)) {
      // Then check for next elements
      // in the sequence
      let j = arr[i];

      console.log("before j :", j);
      while (S.has(j)) {
        console.log("iteration j :", j);
        j++;
      }

      console.log("j :", j, ans, j - arr[i]);

      // update optimal length if
      // this length is more
      ans = Math.max(ans, j - arr[i]);
    }
  }
  return ans;
}

// Driver code
let arr = [1, 9, 3, 10, 4, 20, 2];
let n = arr.length;
console.log(
  "Length of the Longest contiguous subsequence is " +
    findLongestConseqSubseq(arr, n)
);
