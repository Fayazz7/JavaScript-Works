//How the promise Works

var complete = new Promise((res, rej) => {
    isCompleted = false
    if (isCompleted) {
        res("completed")
    }
    else {
        rej("not")
    }
})
complete.then(res => console.log("Start Angular"))
complete.catch(rej => console.log("eror"))
