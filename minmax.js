const business = 1650;
const minister = 850;
const army = 900;

// Min between 2
// if(business<minister){
//     console.log(business)
// }else{
//     console.log(minister)
// }
// Min between 3
// if(business<minister && business<army){
//     console.log(business)
// }else if(minister<business && minister<army){
//     console.log(minister)
// }
// else{
//     console.log(minister)
// }
//Use max method

// var max=Math.max(business,minister,army)
// console.log('Biggest is:'+ max)

// Use Function 

function largestNumber(num1,num2,num3){
    if(num1>num2&&num1>num3){
        return num1
    }
    else if(num2>num3 && num2<num1){
        return num3
    }
    else{
        return num3
    }
}
var max=largestNumber(business,minister,army)
console.log('Biggest Number is:'+ max)