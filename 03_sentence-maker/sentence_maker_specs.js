/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('sentenceMaker', () => {
  it('returns a string value', () => {
    const total = sentenceMaker.call({ a1: 'Hello', a2: 'world!' });
    expect(typeof total === 'string').toBe(true);
  });

  it("is designed to be called within an object's context", () => {
    const myObj = { sentenceMaker: sentenceMaker, a1: 'some', a2: 'words' };
    let sentence = myObj.sentenceMaker();

    expect(typeof sentence === 'string').toBe(true);
    expect(sentence).toBe('some words');
  });

  it('concatenates all strings to return a new string', () => {
    const sentence = sentenceMaker.call({
      a1: 'Hello',
      a2: [1, 2, 3],
      a3: 'Fullstack',
      a4: 10,
    });
    expect(sentence).toBe('Hello Fullstack');
  });

  it("skips properties of the object's prototype", () => {
    const WordObj = function() {
      this.one = 'I';
      this.two = 'have';
      this.three = 'a';
      this.four = 'dream';
    };

    WordObj.prototype['five'] = 'word';
    WordObj.prototype['six'] = 'more';

    const objectWithWords = new WordObj();

    expect(sentenceMaker.call(objectWithWords)).toBe('I have a dream');
  });
});
