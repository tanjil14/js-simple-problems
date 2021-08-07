const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum=0

// for(let i=0;i<numbers.length;i++){
//     let element=numbers[i]
//     sum+=element
    
// }
// console.log(sum)

// use Function 
function sumOfArray(arrs){
    for(let element of arrs){
        sum+=element
    }
    return sum
}
console.log(sumOfArray(numbers))