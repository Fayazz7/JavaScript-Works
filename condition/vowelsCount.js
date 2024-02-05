var text="HelloWorld"

var  vowels="aeiou"

var lowerText=text.toLowerCase()

vowelsCount=0
consCount=0
for (let ch of lowerText){
    if(vowels.includes(ch)){
        vowelsCount+=1
    }
    else{
        consCount+=1
    }
}
console.log("Vowel=",vowelsCount);
console.log("Consonant=",consCount);