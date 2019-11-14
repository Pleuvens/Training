function decode(message)
{
    let res = '';
    let j = 0;
    let dir = 1;
    for (let i = 0; i < message[0].length; i++)
    {
        res += message[j][i];
        j += dir;
        if (j >= message.length || j < 0)
        {    
            dir *= -1;
            j += 2 * dir;
        }
    }
    return res;
}
