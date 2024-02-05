text="A quick brown fox jumps over the lazy dog"


var alphabets="abcdefghijklmnopqrstuvwxyz"

var lowerText=text.toLowerCase()
var isPanagram=false

for (let ch of alphabets){
    if (lowerText.includes(ch)){
        isPanagram=true
    }
    else{
        isPanagram=false
    }
}

console.log(isPanagram);