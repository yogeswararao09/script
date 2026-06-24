Array.prototype.myReduce = function (callback, initialValue) {
    const arr = this;

    let accumulator;
    let startIndex = 0;

    if (arguments.length > 1) {
        accumulator = initialValue;
    } else {
        while (startIndex < arr.length && !(startIndex in arr)) {
            startIndex++;
        }

        if (startIndex >= arr.length) {
            throw new TypeError(
                "Reduce of empty array with no initial value"
            );
        }

        accumulator = arr[startIndex++];
    }

    for (let i = startIndex; i < arr.length; i++) {
        if (i in arr) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }

    return accumulator;
};

console.log([1, 2, 3].myReduce((a, b) => a + b));