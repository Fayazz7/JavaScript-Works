// Normal Functiom

function addNumbers(n1,n2){
    return n1+n2
}
// console.log(addNumbers(15,15));

function subNumbers(n1,n2){
    return n1-n2
}

// console.log(subNumbers(20,10));

// Arrow Function

var add=(n1,n2)=>n1+n2
// console.log(add(10,20));

var sub=(n1,n2)=>n1-n2
// console.log(sub(20,10));

var maxTwo=(n1,n2)=>n1>n2?n1:n2
// console.log(maxTwo(200,1000));

var cube=(n1)=>n1**3
// console.log(cube(3));

var oddEven=(num)=>num%2==0?"even":"odd"
// console.log(oddEven(2));