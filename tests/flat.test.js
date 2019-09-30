const { flat_iterative, flat_recursive } = require('../src/flat');

test('RECURSIVE: flatten empty array', () => {
    expect(flat_recursive([])).toEqual([]);
});

test('RECURSIVE: flatten array [0, 1, 2, [3, 4]]', () => {
    let array = [0, 1, 2, [3, 4]];
    expect(flat_recursive([0, 1, 2, [3, 4]])).toEqual(array.flat());
});

test('RECURSIVE: flatten array [[0, 1, 2], [3, 4]]', () => {
    let array = [[0, 1, 2], [3, 4]];
    expect(flat_recursive([[0, 1, 2], [3, 4]])).toEqual(array.flat());
});

test('RECURSIVE: flatten array [0, 1, 2, 3, 4]', () => {
    let array = [0, 1, 2, 3, 4];
    expect(flat_recursive([0, 1, 2, 3, 4])).toEqual(array.flat());
});

test('RECURSIVE: flatten array [0, 1, [2, [3, 4]]]', () => {
    let array = [0, 1, [2, [3, 4]]];
    expect(flat_recursive([0, 1, [2, [3, 4]]])).toEqual(array.flat());
});

test('RECURSIVE: flatten array [0, 1, 2, [3, 4]]', () => {
    let array = [0, 1, [2, [3, 4]]];
    expect(flat_recursive([0, 1, [2, [3, 4]]], 2)).toEqual(array.flat(2));
});
