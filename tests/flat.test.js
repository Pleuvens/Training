const { flat_iterative, flat_recursive } = require('../src/flat');

test('RECURSIVE: flat to ', () => {
    expect(flat_recursive([])).toEqual([]);
});
