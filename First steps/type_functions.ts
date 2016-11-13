"use strict"

let add: (first: number, second: number) => number;
add = function (first, second) {
    return first + second;
}

console.log(add(1, 2));

let addFirst: (first: number) => ((second: number) => number);
addFirst = function (first) {
    return function (num) {
        return first + num;
    }
}

console.log(addFirst(1)(2));