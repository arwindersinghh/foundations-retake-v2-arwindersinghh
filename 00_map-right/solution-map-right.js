/* eslint-disable no-unused-vars */
function mapRight (arr, func){
    let finalArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        finalArr.push(func(arr[i]));
    }
    return finalArr;
}

