function moveZero(arr)
{
   let count = 0;

   for(let i=0; i<arr.length; i++)
   {
      if(arr[i] !== 0)
      {
         [arr[i], arr[count]] = [arr[count], arr[i]];
         count++;
      }
   }

   return arr; 
}

console.log(moveZero([1, 2, 0, 4, 3, 0, 5, 0]))