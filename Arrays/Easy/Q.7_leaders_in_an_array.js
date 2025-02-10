/**
Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

Note: The rightmost element is always a leader.

Examples:

Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
 */

function leaders(arr)
{
    const result = [];
    const n = arr.length;

    // Start with the rightmost element
    let maxRight = arr[n - 1];

    // Rightmost element is always a leader
    result.push(maxRight);

    // Traverse the array from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(maxRight);
        }
    }

    // Reverse the result array to maintain
    // original order
    result.reverse();

    return result;
}

// Driver code
const arr = [ 16, 17, 4, 3, 5, 2 ];
console.log(leaders(arr));
