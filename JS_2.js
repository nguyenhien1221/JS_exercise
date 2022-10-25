// bài 1
const chunk = (arr, size) => {
    const result = arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / size);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    console.log(result);
};

const input = [1, 2, 3, 4, 5];
chunk(input, 2);

// bài 3
const Uniq = (arr) => {
    const unique_arr = arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);

    console.log(unique_arr);
};

const Array = [2, 1, 0, 3, 2, 1, 2];
Uniq(Array);

// bài 4
const Count = (arr) => {
    var count = arr.reduce((output, item) => {
        output[item] = output[item] + 1 || 1;
        return output;
    }, {});
    console.log(count);
};

const input_arr = [0, 1, 1, 2, 2, 2];
Count(input_arr);

// bài 5
const Min = (arr) => {
    const min = arr.reduce((min, item) => {
        return min < item ? min : item;
    });
    console.log("số nhỏ nhất là: " + min);
};

const Max = (arr) => {
    const max = arr.reduce((max, item) => {
        return max > item ? max : item;
    });
    console.log("số lớn nhất là: " + max);
};

const arr = [12, 45, 21, 65, 38, 76, 108, 43];
Min(arr);
Max(arr);

// bài 6
const Group = (arr, key) => {
    const group = arr.reduce((output, item) => {
        let group_key = item[key];

        if (!output[group_key]) {
            output[group_key] = [];
        }
        output[group_key].push(item);

        return output;
    }, {});

    console.log(group);
};

const place_arr = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "GZ", name: "TYJ", age: 25 },
    { area: "SZ", name: "AAA", age: 23 },
    { area: "FS", name: "BBB", age: 21 },
    { area: "SZ", name: "CCC", age: 19 },
];
Group(place_arr, "area");


// bài 2
const Difference = (a1, a2) => {
    const merge = [...a1, ...a2];
    var result = [];
    
    const flat = merge.reduce((output, item) => {
        return output.concat(item);
    }, []);

    const count = flat.reduce((output, item) => {
        output[item] = output[item] + 1 || 1;
        return output;
    }, {});

    for (let key in count) {
        if (count[key] === 1) {
            result.push(key);
        }
    }
    console.log(result);
};

const input1 = [1, 2, 3, 4, 5];
const input2 = [2, 3, 6];
Difference(input1, input2);
