function binarySearch(arr, key)
{
   for(let i = 0; i<arr.length; i++)
   {
      if(arr[i] === key) return i;
   }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 4;

console.log(binarySearch(arr, k))