
var text="helloworld"

wc={}
var array=text.split("")

for (ch of array){
    ch in wc?wc[ch]+=1:wc[ch]=1
}

// console.log(wc);
for (let key in wc){
    if (wc[key]==1){
        console.log(key);
    }
}