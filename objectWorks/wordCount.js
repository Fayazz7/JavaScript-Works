
var text="hello world hello world hello"
var wc={}

//Method 1
// array=text.split(" ").map(m=>m in wc?wc[m]+=1:wc[m]=1)

//Method 2
// var array=text.split(" ")
// for (w of array){
//     w in wc?wc[w]+=1:wc[w]=1
// }

//Method 3
// var array=text.split(" ")
// for (w of array){
//     if (w in wc){
//         wc[w]+=1
//     }
//     else{
//         wc[w]=1
//     }
// }

console.log(wc);