// ----------------------------- Loops (döngüler) ---------------------------------

for (var i = 0; i <= 10; i++){
    // alert(i);
}

for(var j = 0; j <= 10; j++){
    if(j == 5){
        break;  // j=5 olduğunda döngü kırılır
    }
    // alert(j);

}

for(var k = 0; k <= 10; k++){
    if(k == 5){
        continue;  // k=5 olduğunda döngü 5'i atlar ve 6 dan devam eder
    }
    // alert(k);

}

var number = 1;
while(number < 10){  // şart bloğu
    // alert(number);
    number = number + 1;

}


var number2 = prompt("Which number would you like to start with?");
var result = "";
do{
    result += number2;
    result += "-";
    number2 --;
}while(number2 > 0);  // girilen sayı 0 dan büyük olduğu sürece girilen sayıdasn başlayıp 1 azaltan döngü bloğudur.
alert(result);