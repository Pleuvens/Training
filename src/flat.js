function flat_iterative(array, depth=1) {
    let res = [];
    for (let item of array) {
        if (!Array.isArray(item)) {
            res.push(item);
            continue;
        }
        let d = 0;
        while (d < depth && item.length > 0)
        {
            let current = item.shift();
            if (!Array.isArray(current))
                res.push(current);
            else if (d < depth - 1)
            {
                item = [...current, ...item];
                d++;
            } else {
                item = [current, ...item];
                d++;
            }
        }
        res = [...res, ...item];
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
