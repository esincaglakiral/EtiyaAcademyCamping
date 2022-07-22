

// Soru1: JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// // Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.


const findPrimeNumber = function(...numbers) {
    for (let i = 0; i<numbers.length; i++) {
      let counter = true;
      
         for (let j = 2; j < numbers[i]; j++) {
           if (numbers[i] % j === 0) {
             counter = false;
             break;
           }
         }
  
        if (counter && numbers[i] > 1) {
          console.log(numbers[i]);
        } 
      
    }
  };
 
  findPrimeNumber(19, 17, 22, 2, 1, 5, 78, 199, 86, 20, 64,2833, 88844, 15, 23);

console.log("-----------------------------------------")



// // Soru2:  Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız

// // ARKADAŞ SAYILAR AÇIKLAMASI: A ve B pozitif iki sayı olsun.
// // A’nın kendisi hariç pozitif bölenlerinin toplamı B ise ve B’nin kendisi hariç pozitif bölenlerinin toplamı A ise A ile B dost sayılardır.

// // S(A) : A’nın kendisi hariç pozitif bölenlerinin toplamı
// // S(B) : B’nin kendisi hariç pozitif bölenlerinin toplamı

// // S(A)=B ve S(B)=A ise A ile B dost sayılardır.

// // Örneğin: 220 ile 284 dost sayılardır.
// // S(220)=1+2+4+5+10+11+20+22+44+55+110=284
// // S(284)=1+2+4+71+142=220


function friendNum(firstNumber, secondNumber){
    let arrayFirst = [];
    let arraySecond = [];

    const total = (previousNumberValue, currentNumberValue) => previousNumberValue + currentNumberValue;

    for(let i = 1; i < firstNumber; i++){
        if(firstNumber % i === 0){
            arrayFirst.push(i);
        }
    }

    for(let i = 1; i < secondNumber; i++){
        if(secondNumber % i === 0){
            arraySecond.push(i);
        }
    }

    if(arrayFirst.length > 0 && arraySecond.length > 0 ){

        let totalFirst = arrayFirst.reduce(total);
        let totalSecond = arraySecond.reduce(total);

        if(totalFirst === secondNumber && totalSecond === firstNumber){
            console.log("these number are friendly number")
        }else{
            console.log("these number are not friendly number")
        }
    }
    else{
        console.log("these number are not friendly number");
    }
}

friendNum(220, 284);
friendNum(188, 568);



console.log("-----------------------------------------")




// // soru3: 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız
// // Mükemmel sayı: Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı. 
// // Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.


 const total2 = (previousNumberValue, currentNumberValue) => previousNumberValue + currentNumberValue;  //yukarıda aynısı var

function perfectNum(){
    let concArr = [];
    for(let i = 1; i <= 1000; i++){
        let array = [];
        for(let j = 1; j < i; j++){
            if(i % j === 0){
                array.push(j)
            }
        }
        if(array.length > 0){
            let conclusion = array.reduce(total2);
            if(conclusion === i){
                concArr.push(i)
            }
        }
    }
    console.log(...concArr)
}
perfectNum();

console.log("-----------------------------------------")




//soru4: 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.


function primeNmbr(){
    let resultStr = [];
    for(let i = 2; i < 1000; i++){
        let primeN = true;
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                primeN = false;
                break;
            }
        } 

        if(primeN === true){
            resultStr.push(i);
        }
    }
    console.log(...resultStr)
}

primeNmbr();