function flat_iterative(array, depth=0) {
    let res = [];
    for (let item of array) {
        if (!Array.isArray(item)) {
            res.push(item);
            continue;
        }
    }
    return res;
}

function flat_recursive(array, depth=0) {
    if (depth < 0)
        return array;
    let flatten = [];
    for (let item of array) {
        if (!Array.isArray(item))
            flatten.push(item);
        else
            flatten.push(flat_recursive(item, depth - 1));
    }
    return flatten;
}

module.exports = { flat_iterative, flat_recursive };
