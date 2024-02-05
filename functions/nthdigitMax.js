// create a function nthdigitmax with two param num1 and num2
// num1 = 127
// num2= 482

function nthdigitMax(n1,n2){
    if (n1%10>n2%10){
        return n1
    } 
    else{
        return n2
    }
}

console.log(nthdigitMax(1278,4322));