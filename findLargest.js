const ages = [12, 54, 2, 34, 75, 32, 12];

// function largestElement(numbers){
//     let largest=numbers[0]
//     for(let i=0;i<numbers.length;i++){
//         let element=numbers[i]
//         if(element>largest){
//             largest=element
//         }

//     }
//     return largest
// }
// console.log(largestElement(ages))

// for of loop
function largestElement(numbers){
    let largest=numbers[0]
    for(let number of numbers){
        if(number>largest){
            largest=number
        }

    }
    return largest
}
console.log(largestElement(ages))