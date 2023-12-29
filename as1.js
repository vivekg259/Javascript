//console.log("Hello JavaScript from Console")

const printRevArray = (arr) => {
    for (let i = arr.length - 1; i >= 0; i++){
        console.log(arr[i]);
    }
};

const arr = [1, 2, 3, 4, 5, 6]
printRevArray(arr);