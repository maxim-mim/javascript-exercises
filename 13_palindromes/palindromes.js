const palindromes = function (string) {

    

    let arr = string.split("");

    let toClear = [",", "!", ".", " "]

    for (let i = 0; i <= arr.length; i++) {
        for (let char of toClear) {
            if (arr[i] === char) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    let normal = arr.join("").toLowerCase();

    let backwards = arr.reverse().join("").toLowerCase();

    console.log(normal);
    console.log(backwards);



    if (normal === backwards) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("racecar"))