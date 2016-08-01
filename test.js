const expect = chai.expect;

describe('BubbleSort', () => {
  it('should return the argument array if it is empty.', () => {
    const argumentArray = [];
    expect(bubbleSort(argumentArray)).to.equal(argumentArray);
  });

  it ('should return a sorted array.', () => {
    expect(bubbleSort([1, 5, 7, 8, 0])).to.eql([0, 1, 5, 7, 8]);
    expect(bubbleSort([-1, 5, 7, -8, 0])).to.eql([-8, -1, 0, 5, 7]);
    expect(bubbleSort([3, 3, 3, 2, 0])).to.eql([0, 2, 3, 3, 3]);
  });
});

describe('FizzBuzz', () => {
  it('should return null if no argument is passed in.', () => {
    expect(fizzbuzz()).to.be.null;
  });

  it('should return an array.', () => {
    expect(Array.isArray(fizzbuzz(1))).to.be.true;
  });

  it('should replace any multiple of three with "fizz" and any multiple of five with "buzz".', () => {
    expect(fizzbuzz(3)).to.eql([1, 2, 'fizz']);
    expect(fizzbuzz(5)).to.have.members([1, 2, 'fizz', 4, 'buzz']);
  });

  it('should replace any multiple of three and five with "fizzbuzz".', () => {
    expect(fizzbuzz(15)).to.have.members(
      [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']
    );
  });
});

describe('Pow', () => {
  it('should return the correct value.', () => {
    expect(pow(3, 2)).to.eql(9);
    expect(pow(20, 2)).to.eql(400);
    expect(pow(2, 8)).to.eql(256);
  });

  it('should return 1 when the power is 0.', () => {
    expect(pow(1,0)).to.eql(1);
    expect(pow(-1,0)).to.eql(1);
  });

  it('should work with negative numbers.', () => {
    expect(pow(-5, 0)).to.eql(1);
    expect(pow(-5, 1)).to.eql(-5);
    expect(pow(-5, 2)).to.eql(25);
  });
});


describe('Insertion Sort', () => {
  it('should return the argument array when it is empty', () => {
    const argumentArray = [];
    expect(insertionSort(argumentArray)).to.equal(argumentArray);
  });

  it('should return a sorted array.', () => {
    expect(insertionSort([1, 5, 9, 20])).to.eql([1, 5, 9, 20]);
    expect(insertionSort([1, 20, 9,5])).to.eql([1, 5, 9, 20]);
    expect(insertionSort([1, 20, 5, -9])).to.eql([-9, 1, 5, 20]);
  });

  it('should return null when called without an argument', () => {
    expect(insertionSort()).to.be.null;
  });
});
