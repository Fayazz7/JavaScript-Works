var items=[
    {code:"10ac",title:"onion",price:45,avlQty:50},
    {code:"11ad",title:"potatto",price:55,avlQty:75},
    {code:"10ae",title:"tomatto",price:35,avlQty:50},
    {code:"10af",title:"cabbage",price:30,avlQty:25},
    {code:"10ag",title:"brinjal",price:23,avlQty:0},
    {code:"10ah",title:"garlic",price:400,avlQty:0},
    {code:"10ai",title:"ginger",price:350,avlQty:80},

]

// //Print Length of an array of objects

// console.log(items.length);

// //Print all products title using Map method

// var productTtitle=items.map((m)=>m.title)
// console.log(productTtitle);

// //Print outOfStockItems

// var outOfStockItems=items.filter((p)=>p.avlQty==0).map((p)=>p.title)

// console.log(outOfStockItems);

// // Print inStockItems

// var inStockItems=items.filter((p)=>p.avlQty!=0).map((p)=>p.title)

// console.log(inStockItems);

// //Print costly product

// var costly=items.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
// console.log(costly.title);

// // Check is drumstick is available or not

// var isAvailable=items.some((p)=>p.title=="drumstick")
// console.log(isAvailable);

// // Print product available greater than 50

// var products=items.filter((m)=>m.price>50).map((m)=>m.title)
// console.log(products);

// //Print product ascending order by price

// var ascendingOrder=items.sort((p1,p2)=>p1.price-p2.price).forEach((p)=>console.log(p.title,p.price))

