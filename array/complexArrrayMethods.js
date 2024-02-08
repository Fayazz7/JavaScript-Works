
var items=[
    {code:"10ac",title:"onion",price:45,avlQty:50},
    {code:"11ad",title:"potatto",price:55,avlQty:75},
    {code:"10ae",title:"tomatto",price:35,avlQty:50},
    {code:"10af",title:"cabbage",price:30,avlQty:25},
    {code:"10ag",title:"brinjal",price:23,avlQty:0},
    {code:"10ah",title:"garlic",price:400,avlQty:0},
    {code:"10ai",title:"ginger",price:350,avlQty:80},

]

//some() method is used to check whena items is available or not it returns a boolean values (true or false)

// Check is drumstick is available or not

var isAvailable=items.some((p)=>p.title=="drumstick")
console.log(isAvailable);

//forEach() is like a for for a array to print all keys

items.forEach((p)=>console.log(p.title))
