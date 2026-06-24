function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const value = obj[key];

        if (!acc[value]) {
            acc[value] = [];
        }

        acc[value].push(obj);

        return acc;
    }, {});
}

const people = [
    { name: "Ali", city: "HYD" },
    { name: "Sara", city: "MUM" },
    { name: "Raj", city: "HYD" }
];

console.log(groupBy(people, "city"));