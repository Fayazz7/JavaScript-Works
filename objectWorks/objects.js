// Create an emplyee object

var employee={
    code:"200A",
    name:"Fayaz",
    department:"Python"
}

console.log(employee.name);

// to find an attribute in this object

if ("name" in employee){
    console.log("Found");
}
else{
    console.log("Not Found");
}