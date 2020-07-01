/* eslint-disable no-unused-vars */
function multiplyLongest (arr) {
    return function (num, arr2 = []) {
        if(arr2.length > arr.length){
            return arr2.map(currentNum => {
                return currentNum * num;
            });
        }

        else return arr.map(currentNum => {
            return currentNum * num;
        })
    }
}