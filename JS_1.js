// bài 1
const userInfo = {};
userInfo.name = "Hoang";
userInfo.surname = "Viet";
userInfo.name = "Bui";
delete userInfo.name;

// bài 2
function getSum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    console.log(sum);
}

const salaries = {
    bui: 1200,
    viet: 1300,
    hoang: 1350,
};
getSum(salaries);

// bài 3
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}
const menu = {
    width: 200,
    height: 300,
    name: "Bui Viet Hoang",
};
multiplyNumeric(menu);

// bài 4
let style = ["Jazz", "Blues"];

function changeStyle() {
    style.push("Rock-n-Roll");

    let lenght = style.length;
    if (lenght % 2 !== 0) {
        let mid_index = Math.ceil(lenght / 2);
        style[mid_index - 1] = "Classic";
    }

    style.splice(0, 1);

    style.unshift("Rap", "Reggae");

    console.log(style);
}
changeStyle();

// bài 5
function camelizeName(str) {
    return str
        .split("-")
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

console.log(camelizeName("list-style-image"));

// bài 6 (update a > b)
function filterRangeInPlace(arr, a, b) {
    // switch a vs b
    let c = a > b ? a : b;
    a = a < b ? a : b;
    return arr.filter((item) => a <= item && item <= c);
}

const arr = [1, 2, 3, 4, 5];
console.log(filterRangeInPlace(arr, 4, 1));

// bài 7  ( change filter() + map() to reduce() )
function getNameArr(obj) {
    let arrName = obj.reduce((output, item) => {
        return item.name ? [...output, item.name] : output;
    }, []);
    console.log(arrName);
}

const userName = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2" },
    { age: 20 },
    { name: "Hoang2", age: 18 },
];
getNameArr(userName);

// bài 8
function getAverageAge(arr) {
    let ageList = arr.reduce((output, item) => {
        return item.age ? [...output, item.age] : output;
    }, []);
    let averageAge =
        ageList.reduce((prev, item) => prev + item) / ageList.length;
    console.log(averageAge);
}

const initArray = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2" },
    { age: 20 },
    { name: "Hoang2", age: 18 },
];
getAverageAge(initArray);

// bài 9 ( change flat() to reduce() )
function flatArr(arr) {
    return arr.reduce((output, item) =>
            output.concat(Array.isArray(item) ? flatArr(item) : item),[]);
}

const inputArr = [[[1, 2]], [[[3, 4]], [5, 6]]];
console.log(flatArr(inputArr));

// bài 10
function printNumber() {
    let startNum = 1;
    let number = document.getElementById("number").value;
    number = parseInt(number);
    let html = "";

    if (isNaN(number)) {
        document.getElementById("result").innerHTML =
            startNum + "<br/>" + "Vui lòng nhập giá trị số vào ô input";
    } else {
        for (let i = startNum; i <= number; i++) {
            html += i + " <br/>";
        }
        document.getElementById("result").innerHTML = html;
    }
}
