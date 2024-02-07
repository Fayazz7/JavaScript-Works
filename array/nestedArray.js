
var data=[
    [ 'tea', 20 ],
    [ 'coffe', 30 ],
    [ 'milk', 10 ],
    [ 'fift', 25 ],
    [ 'oreo', 40 ]
  ]


//How to Find Costly Product from a Nested array using Reduce() Method

var costly=data.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)
// console.log(costly);

//How to set an Array descending order using Sort() Method

var descending=data.sort((o1,o2)=>o2[1]-o1[1])
// console.log(descending);

//to Change Ascending order
var descending=data.sort((o1,o2)=>o1[1]-o2[1])
// console.log(descending);