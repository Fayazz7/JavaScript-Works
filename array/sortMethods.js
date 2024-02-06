// sort methods


var array=[10,2,20,30,25,40,100,1000,51]

// array.sort()  //it will sort the array string value
// console.log(array);

//if you want to sort ascending order

function compare(o1,o2){
    return o1<o2?-1:1 //-1 represent 1st parameter 1 represent second parameter
}

// console.log(array);

array.sort((n1,n2)=>n1-n2)
console.log(array);