
// Unequal String Merging
var string1="ABCD"

var string2="PQRSTUV"

// Merging
var smString=string1<string2?string1:string2
console.log(smString.length);
var out=""

for(let i=0;i<smString.length;i++){
    out+=string1[i]+string2[i]
}

// console.log(out);

// Sliceing

var bal=""
if (string1.length>string2.length){
    bal=string1.slice(smString.length)
    out+=bal
}
else{
    bal=string2.slice(smString.length)
    out+=bal
}

console.log(out);