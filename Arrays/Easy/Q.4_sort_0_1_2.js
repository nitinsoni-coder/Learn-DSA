function sort(arr)
{
    let low = 0, mid = 0, high = arr.length - 1;

    while(mid <= high)
    {
        if(arr[mid] === 0)
        {
            [arr[low], arr[mid]] = [arr[mid], arr[low] ];
            mid++;
            low++;
        }else if(arr[mid] === 1)
        {
            mid++;
        }else if(arr[mid ] === 2)
        {
           [arr[high], arr[mid]] = [arr[mid], arr[high]];
           high--;
        }
    }

    return arr;
}


console.log(sort([0, 1, 2, 0, 1, 2])); 