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

test('RECURSIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_recursive([0, [1, [2, [3, [4]]]]])).toEqual(array.flat());
});

test('RECURSIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_recursive([0, [1, [2, [3, [4]]]]], 1)).toEqual(array.flat(1));
});

test('RECURSIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_recursive([0, [1, [2, [3, [4]]]]], 2)).toEqual(array.flat(2));
});

test('RECURSIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_recursive([0, [1, [2, [3, [4]]]]], 3)).toEqual(array.flat(3));
});

test('RECURSIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_recursive([0, [1, [2, [3, [4]]]]], 4)).toEqual(array.flat(4));
});

test('RECURSIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_recursive([0, [1, [2, [3, [4]]]]], 5)).toEqual(array.flat(5));
});

test('ITERATIVE: flatten empty array', () => {
    expect(flat_iterative([])).toEqual([]);
});

test('ITERATIVE: flatten array [0, 1, 2, [3, 4]]', () => {
    let array = [0, 1, 2, [3, 4]];
    expect(flat_iterative([0, 1, 2, [3, 4]])).toEqual(array.flat());
});

test('ITERATIVE: flatten array [[0, 1, 2], [3, 4]]', () => {
    let array = [[0, 1, 2], [3, 4]];
    expect(flat_iterative([[0, 1, 2], [3, 4]])).toEqual(array.flat());
});

test('ITERATIVE: flatten array [0, 1, 2, 3, 4]', () => {
    let array = [0, 1, 2, 3, 4];
    expect(flat_iterative([0, 1, 2, 3, 4])).toEqual(array.flat());
});

test('ITERATIVE: flatten array [0, 1, [2, [3, 4]]]', () => {
    let array = [0, 1, [2, [3, 4]]];
    expect(flat_iterative([0, 1, [2, [3, 4]]])).toEqual(array.flat());
});

test('ITERATIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_iterative([0, [1, [2, [3, [4]]]]])).toEqual(array.flat());
});

test('ITERATIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_iterative([0, [1, [2, [3, [4]]]]], 1)).toEqual(array.flat(1));
});

test('ITERATIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_iterative([0, [1, [2, [3, [4]]]]], 2)).toEqual(array.flat(2));
});

test('ITERATIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_iterative([0, [1, [2, [3, [4]]]]], 3)).toEqual(array.flat(3));
});

test('ITERATIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_iterative([0, [1, [2, [3, [4]]]]], 4)).toEqual(array.flat(4));
});

test('ITERATIVE: flatten array [0, [1, [2, [3, [4]]]]]', () => {
    let array = [0, [1, [2, [3, [4]]]]];
    expect(flat_iterative([0, [1, [2, [3, [4]]]]], 5)).toEqual(array.flat(5));
});
