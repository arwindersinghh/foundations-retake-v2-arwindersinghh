/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('multiplyLongest', () => {
  it('returns a function', () => {
    const funcReturned = multiplyLongest([1, 2, 3, 4]);
    expect(typeof funcReturned).toBe('function');
  });

  it('the function returned multiplies the numbers in the array passed to multiplyLongest and returns a new array', () => {
    const funcReturned = multiplyLongest([1, 2, 3, 4]);
    const doubledArray = funcReturned(2);

    expect(doubledArray).toEqual([2, 4, 6, 8]);
  });

  it('can be called multiple times', () => {
    const funcReturned = multiplyLongest([10, 20, 30, 40]);
    const doubledArray = funcReturned(2);
    const tripledArray = funcReturned(3);
    const quadrupledArray = funcReturned(4);

    expect(doubledArray).toEqual([20, 40, 60, 80]);
    expect(tripledArray).toEqual([30, 60, 90, 120]);
    expect(quadrupledArray).toEqual([40, 80, 120, 160]);
  });

  it('the function returned accepts a second argument (an array), if the array argument is larger than the previous "largest array", it returns a new array multiplying each index by the first argument', () => {
    const funcReturned = multiplyLongest([10, 20, 30]);
    expect(funcReturned(2)).toEqual([20, 40, 60]);

    // the array [1,2,3,4] is greater than the previous array [10,20,30] so the smaller array is replaced with the longer array
    const largerArrayDoubled = funcReturned(2, [1, 2, 3, 4]);
    const largerArrayTripled = funcReturned(3);
    expect(largerArrayDoubled).toEqual([2, 4, 6, 8]);
    expect(largerArrayTripled).toEqual([3, 6, 9, 12]);

    // the array [20, 30, 40, 50, 60, 70] is greater than the previous array [1,2,3,4] so the smaller array is replaced with the longer array
    const largestArrayDoubled = funcReturned(2, [20, 30, 40, 50, 60, 70]);
    const largestArrayTripled = funcReturned(3);
    expect(largestArrayDoubled).toEqual([40, 60, 80, 100, 120, 140]);
    expect(largestArrayTripled).toEqual([60, 90, 120, 150, 180, 210]);
  });

  it('if the array argument is smaller than the longest array ever passed to it, a string is returned', () => {
    const funcReturned = multiplyLongest([10, 20, 30]);
    expect(funcReturned(2)).toEqual([20, 40, 60]);

    const warningString = funcReturned(2, [100, 200]);
    expect(warningString).toBe('The array length needs to be 3 or greater');

    expect(funcReturned(2, [1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
    expect(funcReturned(3, [20, 40, 60, 80])).toBe(
      'The array length needs to be 5 or greater'
    );
    expect(funcReturned(5, [1000, 5, 6])).toBe(
      'The array length needs to be 5 or greater'
    );
    expect(funcReturned(4, [50, 60, 70, 80, 90, 100, 110])).toEqual([
      200,
      240,
      280,
      320,
      360,
      400,
      440,
    ]);
    expect(funcReturned(3, [3, 6, 9, 12, 15])).toBe(
      'The array length needs to be 7 or greater'
    );
  });
});
