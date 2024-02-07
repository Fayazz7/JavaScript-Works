
var bike={
    name:"MT5",
    brand:"Yamaha",
    price:150000,
    model:2022,
    offer:100000
}

console.log(bike.name);

if ("offer" in bike){
    bike.offer+=20000
}
else{
    bike.offer=50000
}
console.log(bike);

