// ------------------------- function signature --------------------------------------

function functionName(parameter1, parameter2){
    return parameter1 * parameter2;

    // burada function içerisindeki parametrelerle return kullanılarak işlem yaptırılmıştır.
    // yani 2 parametre kullanılarak operatör ile geriye bir değer döndürülmüştür.
}
//  alert(functionName(4, 5));




// ------------------------- function without "return" --------------------------------

function functionWithOutReturn(parameter1, parameter2){
    alert("bu fonksiyonda return kullanımamıştır.")
}
// functionWithOutReturn();



// -------------------------- Parameter defaults --------------------------------------

function functionName2(params1, params2) {  // fonk adı aynıda olabilirdi böyle olursa sıra önemli olur, son gördüğü fonk. işlemini gerçekleştirir.
    if(params2 === undefined){
        params2 = 0;
    }
    
}
//  alert( functionName2(2, 3));
 



 // ---------------------------- The Arguments Object -------------------------------

 var x = findMax(2, 345, 400, 123, 55, 98, 78, 389);

 function findMax(){
    var i, max=0;

    for(i=0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];  
        }
    }

    return max;
 }

console.log(findMax(x))
alert(findMax(x))




// yukarıda yapılan işlemde döngü tasarlanarak en büyük sayıyı bulmaya çalışıyoruz.
// göndermiş olduğumuz findMax fonksiyonu bir argüman array'inde çalışacaktır.
// findMax 8 değerden oluşan bir obje array'idir.


