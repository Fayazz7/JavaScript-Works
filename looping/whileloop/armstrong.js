var num=1634

// ArmStrong NUmber means if the given number are equls to the number digit count * every number that means the given number is ArmStrong Number

var digiCount=String(num).length

var sum=0
var target=num
while (num!=0){
    let digit= num %10
    let exp = digit**digiCount
    sum = sum+exp
    num = Math.floor(num/10)
}
// if (sum==target){
//     console.log("The Given Number is ArmStrong NUmber");
// }
// else{
//     console.log("The given Number is Not ArmStrong Number");
// }
console.log(sum==target?"The Given Number is ArmStrong NUmber":"The given Number is Not ArmStrong Number");