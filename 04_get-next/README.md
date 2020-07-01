# Get Next

### Total Points: 7.00

Create the function `iterable` that accepts an array argument.  The `iterable` function will return a function object. When the function returned is invoked, it will return the next value from the original array passed to the `iterable` function. The returned function may also accept an index directly. Furthermore, it will cycle back to the beginning once it reached the end of the array.

Some examples:

```
var getNext = iterable([55,65,75]);
getNext(); // returns 55
```

```
var getNext = iterable([55,65,75]);
getNext(); // 55
getNext(); // 65
getNext(); // returns 75 since getNext was previously called
```

```
var getNext = iterable([55,65,75]);
getNext(1); // 65
getNext(); // 75, because it continues from the above index
```

```
var getNext = iterable([55,65,75]);
getNext(); // 55
getNext(); // 65
getNext(); // 75
getNext(); // 55, because it cycles back to the beginning
```