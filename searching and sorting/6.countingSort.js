function countingSort(arr) {
  let n = arr.length;

  //finding the max element in the array
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(arr[i], max);
  }

  //creating a count array of size max+1
  let countArray = new Array(max + 1).fill(0);

  // storing the frequency of each element in the count array
  for (let i = 0; i < n; i++) {
    countArray[arr[i]]++;
  }

  console.log("countArray", countArray)

  // storing the cumulative frequency of each element in the count array
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  console.log("cumulative", countArray)

  let output = new Array(n);


  console.log("output", output)

  // creating outputArray from countArray
  for (let i = 0; i < n; i++) {
    console.log("i", i, "before countArray", countArray);
    output[countArray[arr[i]] - 1] = arr[i];
    countArray[arr[i]]--;

    console.log("i", i,"after countArray", countArray);
  }

  return output;
}

const inputArray = [4, 3, 7, 1, 5, 5, 3, 0];
console.log(countingSort(inputArray));
