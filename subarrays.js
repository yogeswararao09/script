function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, [-1]);

    let sum = 0;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        const target = sum - k;

        if (map.has(target)) {
            for (const start of map.get(target)) {
                result.push(nums.slice(start + 1, i + 1));
            }
        }

        if (!map.has(sum)) {
            map.set(sum, []);
        }

        map.get(sum).push(i);
    }

    return result;
}

console.log(subarraySum([1, 2, 3, 0, 3], 3));