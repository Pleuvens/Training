function sort(A, B)
{
    /* V1
    let tmp = [];
    for (let i = 0; i < A.length; i++)
        tmp[B[i]] = A[i];
    for (let i = 0; i < A.length; i++)
        A[i] = tmp[i];
    */
    for (let i = 0; i < A.length; i++)
    {
        let tmp = A[B[i]];
        A[B[i]] = A[i];
        A[i] = tmp;
        B[B[i]] = B[i];
    }
}

module.exports = sort;
