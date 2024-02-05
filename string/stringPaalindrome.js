var text="madam"
var rev=""

for (i=text.length-1;i>=0;i--){
    rev+=text[i]
}

console.log(text==rev?"Paalindrome":"Not Paalindrome");