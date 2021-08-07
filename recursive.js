// n*(n-1)

function factorial(num){
    if(num==1){
        return 1
    }
    let result;
    return result=num*factorial(num-1)
}
console.log(factorial(5))