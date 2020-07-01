/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('mapRight accepts an array and a mapping function, and returns an array that is the reverse mapped array', () => {
  it('works with doubler function', () => {
    const doubler = function(x) {
      return x * 2;
    };
    const mappedArr = mapRight([1, 2, 3, 4, 5], doubler);
    expect(mappedArr).toEqual([10, 8, 6, 4, 2]);
  });

  it('works with objects', () => {
    const books = [
      { title: 'Lord of the Rings', pages: 1000 },
      { title: 'Harry Potter', pages: 400 },
      { title: 'Where the Wild Things Are', pages: 30 },
    ];
    const getPages = function(book) {
      return book.pages;
    };
    const mappedArr = mapRight(books, getPages);
    expect(mappedArr).toEqual([30, 400, 1000]);
  });

  it('does not modify the original array', () => {
    const arr = [4, 5, 6];
    const copyOfOriginal = arr.slice();
    const mappedResult = mapRight(arr, function(x) {
      return x - 5;
    });
    expect(mappedResult).toEqual([1, 0, -1]);
    expect(arr).toEqual(copyOfOriginal);
  });

  it('does not use Array.prototype.map or Array.prototype.reverse', () => {
    spyOn(Array.prototype, 'map');
    spyOn(Array.prototype, 'reverse');

    const doubler = function(x) {
      return x * 2;
    };
    const mappedArr = mapRight([1, 2, 3, 4, 5], doubler);

    expect(Array.prototype.map.calls.count()).toEqual(0);
    expect(Array.prototype.reverse.calls.count()).toEqual(0);
  });
});

