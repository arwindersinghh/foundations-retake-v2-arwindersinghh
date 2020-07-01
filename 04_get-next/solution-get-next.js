/* eslint-disable no-unused-vars */
function iterable (arr) {
    return function(){
        //everytime I attempt to make getNext into a function
        //I get a failure
       return getNext = arr[0];
    };
}