var year=2024

if (year%100 == 0 && year%400 == 0 || year%100 !=0 && year%4 == 0){
    console.log("Leap Year");
}
else{
    console.log("Not Leap Year");
}