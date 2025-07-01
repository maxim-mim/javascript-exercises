const sumAll = function(a, b) {
    let result = 0;
    let big, small;

    if ((!(Number.isInteger(a) && Number.isInteger(b))) || (a < 0 || b < 0)) {
        return "ERROR";
    }

    if (a > b) {
        big = a;
        small = b;
    } else {
        big = b;
        small = a;
    }

    for (let i = small; i <= big; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
