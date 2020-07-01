/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('iterable function', () => {
  it('iterable is a function object', () => {
    expect(typeof iterable).toBe('function');
  });

  it('should receive an array, and should return a function', () => {
    const inputVal = ['foo', 'bar', 'baz'];
    const returnVal = iterable(inputVal);
    expect(typeof returnVal).toBe('function');
  });

  const storedValues = ['a', 'b', 'c', 22];
  let getNext;

  const generateRandomArray = function(length) {
    let randomIntegers = [];
    for (let i = 0, length; i < length; i++) {
      randomIntegers.push(Math.round(Math.random() * length));
    }
    return randomIntegers;
  };

  beforeEach(() => {
    getNext = iterable(storedValues);
  });

  it('getNext retrieves the 0th index value by default', () => {
    expect(getNext()).toBe('a');
  });

  it('getNext can take a number argument and will return the corresponding index value in the array', () => {
    expect(getNext(2)).toBe('c');
  });

  it('if you invoke getNext four times, the fourth time will retrieve the 3rd index value', () => {
    getNext();
    getNext();
    getNext();

    expect(getNext()).toBe(22);
  });

  it('if you invoke getNext six times, the sixth time will retrieve the 5th index value', () => {
    let randomIntegers = generateRandomArray(50);
    let getNext = iterable(randomIntegers);

    getNext();
    getNext();
    getNext();
    getNext();
    getNext();

    expect(getNext()).toEqual(randomIntegers[5]);
  });

  it('if getNext is invoked with a numerical index, it will retrieve the value at that index', () => {
    let randomIntegers = generateRandomArray(40);
    let getNext = iterable(randomIntegers);

    expect(getNext(5)).toEqual(randomIntegers[5]);
  });

  it("if getNext is invoked with a numerical index, the next invocation of getNext will access the next index value after the given parameter's index value", () => {
    let randomIntegers = generateRandomArray(40);
    let getNext = iterable(randomIntegers);

    getNext(5);

    expect(getNext()).toEqual(randomIntegers[6]);
    expect(getNext()).toEqual(randomIntegers[7]);
  });

  it('if all values are returned, the following getNext call will start at the 0th index', () => {
    let randomIntegers = generateRandomArray(3);
    let getNext = iterable(randomIntegers);

    getNext(2);

    expect(getNext()).toEqual(randomIntegers[0]);
  });
});
