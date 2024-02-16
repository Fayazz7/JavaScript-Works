function performAdd(){
    let num1=+box1.value
    let num2=+box2.value
    let result= num1+num2
    console.log(result);
    document.getElementById("root").innerHTML=result

}

function performSub(){
    let num1=+box1.value
    let num2=+box2.value
    let result=num1-num2
    console.log(result);
    document.getElementById("root").innerHTML=result
}