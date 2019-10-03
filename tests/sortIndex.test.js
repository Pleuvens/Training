const sort = require("../src/sortIndex");

test("", () => {
    A = ['C', 'D', 'E', 'F', 'G'];
    sort(A, [3, 0, 4, 1, 2]);
    expect(A).toEqual(['D', 'F', 'G', 'C', 'E']);
})
