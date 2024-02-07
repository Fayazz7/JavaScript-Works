// reduce method function for array

var array=[10,20,30,40,30,50]

var sum=array.reduce((n1,n2)=>n1+n2)
// console.log(sum);

var maxElement=array.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxElement);

var minElemnt=array.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(minElemnt);