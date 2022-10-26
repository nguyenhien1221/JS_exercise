// bài 1
const chunkArr = (arr, size) => {
    let result = arr.reduce((resultArray, item, index) => {
        let chunkIndex = Math.floor(index / size);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    console.log(result);
};

const input = [1, 2, 3, 4, 5];
chunkArr(input, 2);

// bài 3
const getUniq = (arr) => {
    let uniqueArr = arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);

    console.log(uniqueArr);
};

const Array = [2, 1, 0, 3, 2, 1, 2];
getUniq(Array);

// bài 4
const Count = (arr) => {
    let count = arr.reduce((output, item) => {
        output[item] = output[item] + 1 || 1;
        return output;
    }, {});
    console.log(count);
};

const input_arr = [0, 1, 1, 2, 2, 2];
Count(input_arr);

// bài 5
const getMin = (arr) => {
    let min = arr.reduce((min, item) => {
        return min < item ? min : item;
    });
    console.log("số nhỏ nhất là: " + min);
};

const getMax = (arr) => {
    let max = arr.reduce((max, item) => {
        return max > item ? max : item;
    });
    console.log("số lớn nhất là: " + max);
};

const arr = [12, 45, 21, 65, 38, 76, 108, 43];
getMin(arr);
getMax(arr);

// bài 6
const getGroupBy = (arr, key) => {
    let group = arr.reduce((output, item) => {
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
getGroupBy(place_arr, "area");

// bài 2
const getDifference = (a1, a2) => {
    let result = a1.reduce((output, item) => {
        return a2.includes(item) ? output : [...output, item];
    }, []);
    console.log(result);
};
const inputArr1 = [1, 2, 3, 4, 5];
const inputArr2 = [2, 3, 6];
getDifference(inputArr1, inputArr2);
