"use strict";

// console.log("just checking");



function showMultiplicationTable(number){

    for (var i = 1; i <= 10 ; i++) {
       var b = number * i;
        console.log(number + " * " + i + " = " + b) ;
    }

}




for (var i = 0; i < 10; i++ ) {
    var randomNum = (Math.floor(Math.random() * 200) + 20);
    if (randomNum % 2 === 0 ){
        console.log (randomNum + " even");
    } else {
        console.log (randomNum + " odd");
    }
}




for (var i = 1 ; i <= 9 ; i++ ) {
    var str = i.toString()
    var repeat = str.repeat(i);
    console.log(repeat);
}

for (var i = 100 ; i >= 5 ; i = i - 5 ){
    console.log(i);
}