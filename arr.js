let array = [1,2,3,4,5]

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    
    if(array.length > 0) {
        return sum / array.length
    } return 0
}

console.log(findAverage(array));