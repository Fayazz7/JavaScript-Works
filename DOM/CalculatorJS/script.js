function displayScreen(num){
    let operatorArray=["+","-","/","*","."]
    let lastChar= root.value.slice("-1")
    if (operatorArray.includes(lastChar) && operatorArray.includes(num) ){
        return
    }
    else{
        root.value+=num
    }
}

function backSpace(){
    let currValue=root.value
    let lastChar=currValue.slice(0,-1)
    root.value=lastChar
}

function clearBox(){
    root.value=""
}

function evaluateExpression(){
    let curExpression=root.value
    let result=eval(curExpression)
    root.value=result
}