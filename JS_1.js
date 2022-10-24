// bài 1
var User = {};
User.name = "Hoang";
User.surname = "Viet";
User.name = "Bui";
delete User.name;


// bài 2
function Tong(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    console.log(sum);
}

var salaries = {
    bui: 1200,
    viet: 1300,
    hoang: 1350,
};
Tong(salaries);

// bài 3
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}
var menu = {
    width: 200,
    height: 300,
    name: "Bui Viet Hoang",
};
multiplyNumeric(menu);

// bài 4
var style = ["Jazz", "Blues"];

function change() {
    style.push("Rock-n-Roll");

    var lenght = style.length;
    if (lenght % 2 !== 0) {
        var mid_index = Math.ceil(lenght / 2);
        style[mid_index - 1] = "Classic";
    }

    style.splice(0, 1);

    style.unshift("Rap", "Reggae");

    console.log(style);
}
change();

// bài 5
function camelize(str) {
    return str
        .split("-")
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

console.log(camelize("list-style-image"));

// bài 6
function filterRangeInPlace(arr, a, b) {
    return arr.filter((item) => a <= item && item <= b);
}

var arr = [1, 2, 3, 4, 5];
console.log(filterRangeInPlace(arr, 2, 4));

// bài 7
function to_name_arr(obj) {
    var arr_name = obj
        .filter((item) => {
            return item.name;
        })
        .map((item) => {
            return item.name;
        });
    console.log(arr_name);
}

var initArray = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2" },
    { age: 20 },
    { name: "Hoang2", age: 18 },
];

to_name_arr(initArray);

// bài 8
function getAverageAge(arr) {
    var age_list = arr
      .filter((item) => {
        return item.age;
      })
      .map((item) => {
        return item.age;
      });
    var arr_lenght = Object.keys(age_list).length;
  
    var average_age = age_list.reduce((prev, item) => prev + item) / arr_lenght;
    console.log(average_age);
  }
  
  var initArray = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2" },
    { age: 20 },
    { name: "Hoang2", age: 18 }
  ];
  getAverageAge(initArray);
  

// bài 9
let flattened = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(flattened.flat());

// bài 10
function print_number() {
    var start_num = 1;
    var number = document.getElementById("number").value;
    number = parseInt(number);
    var html = "";

    if (isNaN(number)) {
        document.getElementById("result").innerHTML =
            start_num + "<br/>" + "Vui lòng nhập giá trị số vào ô input";
    } else {
        for (var i = start_num; i <= number; i++) {
            html += i + " <br/>";
        }
        document.getElementById("result").innerHTML = html;
    }
}
