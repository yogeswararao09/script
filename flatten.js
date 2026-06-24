function flattenDeep(arr) {
    const stack = [...arr];
    const result = [];

    while (stack.length) {
        const item = stack.pop();

        if (Array.isArray(item)) {
            for (let i = item.length - 1; i >= 0; i--) {
                stack.push(item[i]);
            }
        } else {
            result.push(item);
        }
    }

    return result;
}

const nested = [1, [2, [3, [4, [5]]]]];
console.log(flattenDeep(nested)); // [1,2,3,4,5]