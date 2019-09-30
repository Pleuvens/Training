function flat_iterative(array, depth=1) {
    let res = [];
    for (let item of array) {
        if (!Array.isArray(item)) {
            res.push(item);
            continue;
        }
        let flatten_item = [];
        let tmp_item = [...item];
        for (let d = 0; tmp_item.length > 0 && d < depth; d++) {
            let delete_list = [];
            for (let elt of tmp_item)
            {
                if (!Array.isArray(elt))
                    flatten_item.push(elt);
            }
            for (let elt of delete_list)
                tmp_item.remove(elt);
        }
        res.concat(flatten_item);
    }
    return res;
}

function flat_recursive(array, depth=1) {
    if (depth <= 0)
        return array;
    let flatten = [];
    for (let item of array) {
        if (!Array.isArray(item))
            flatten.push(item);
        else
            flatten = [...flatten, ...flat_recursive(item, depth - 1)];
    }
    return flatten;
}

module.exports = { flat_iterative, flat_recursive };
