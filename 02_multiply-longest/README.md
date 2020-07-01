### Multiply Longest

#### Total Points: 7.00

Create the function `multiplyLongest` which takes an array as an argument and returns a new function. The function returned accepts a number argument and when it is invoked, it multiplies
each element by the number argument and returns a new array with the values.

In addition, the function returned accepts a second argument (an array). If the array (second argument) is larger than the current array, the current array is replaced with the longer array. Review the details below.

The function returned takes two arguments:

- First Argument (required) - the first argument is a number that represents what number to multiply each element in the array by.
- Second Argument - The second argument is a new array with numbers. If the array is larger than the array passed into `multiplyLongest`, or if it is longer than the current longest array, the new array passed in replaces the current longest array.

Here are a few examples:

```js
const funcReturned = multiplyLongest([1, 2, 3, 4]);
funcReturned(2); // returns ==> [2,4,6,8] all the elements in the array were multipled by two
funcReturned(4); // returns ==> [4,8,12,16] all the elements in the array were multiplied by four
funcReturned(2, [1, 2]); // returns ==> [2,4,6,8], even though a new array was passed in, its length is smaller than the current array so the original array [1,2,3,4] is used
funcReturned(5, [1, 2, 3, 4, 5, 6, 7]); // returns ==> [5,10,15,20,25,30,35], the new array is longer than the previous longest array ([1,2,3,4]), the new array is used and will be used for future invocations
funcReturned(2); // returns ==> [2,4,6,8,10,12,14]
funcReturned(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // returns ==> [2,4,6,8,10,12,14,16,18,20] the new array replaced the previous longest array, the new array will be used for future invocations
funcReturned(3); // returns ==> [3,6,9,12,15,18,21,24,27,30]
```
