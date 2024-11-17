let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
let box = document.querySelectorAll(".box");
let box1 = box[0];
let ans = box[1];
for (data of arr) {
    box1.innerHTML += `<span>${data} </span>`;
}
function even() {
    ans.innerHTML = null;
    let an = [];
    for (data of arr) {
        if (data % 2 == 0) {
            an.push(data);
        }
    }
    for (data of an) {
        ans.innerHTML += `<span>${data} </span>`;
    }
}
function odd() {
    ans.innerHTML = null;
    let an = [];
    for (data of arr) {
        if (data % 2 != 0) {
            an.push(data);
        }
    }
    for (data of an) {
        ans.innerHTML += `<span>${data} </span>`;
    }
}
function prime() {
    ans.innerHTML = null;
    let an = [];
    for (data of arr) {
        let count = 0;
        for (let index = 1; index <= data; index++) {
            if (data % index == 0) {
                count += 1;
            }
        }
        if (count == 2) {
            an.push(data);
        }
    }
    for (data of an) {
        ans.innerHTML += `<span>${data} </span>`;
    }
}
function comp() {
    ans.innerHTML = null;
    let an = [];
    for (data of arr) {
        let count = 0;
        for (let index = 1; index <= data; index++) {
            if (data % index == 0) {
                count += 1;
            }
        }
        if (count > 2) {
            an.push(data);
        }
    }
    for (data of an) {
        ans.innerHTML += `<span>${data} </span>`;
    }
}
