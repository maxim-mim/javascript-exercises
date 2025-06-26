const removeFromArray = function(arr, ...rmList) {

    for (let item of rmList) {
       let rmIndex = arr.indexOf(item);

       if (rmIndex === -1) {
            continue;
       }

        do {
            arr.splice(rmIndex, 1);
            rmIndex = arr.indexOf(item);
        } while (rmIndex !== -1)
        
    }
    // console.log(arr);
    // return arr;
};


// let array = [1, 2, 3, 4];
// removeFromArray(array, 3);


// Do not edit below this line
module.exports = removeFromArray;
