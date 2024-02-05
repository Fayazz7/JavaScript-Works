

// Print Century year in range of 1800 to 2024

// for (i=1800;i<=2024;i++){
//     if(i%100==0){
//         console.log(i);
//     }
// }


// Print Leap year in range of 1800 to 2024

for(i=1800;i<=2024;i++){
    if(i%100==0 && i%400==0 || i%100!=0 && i%4==0){
        console.log(i);
    }
}
