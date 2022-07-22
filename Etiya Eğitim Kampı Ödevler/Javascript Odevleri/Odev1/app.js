// değişken türleri ile alakalı kodlarım:

var urunAdi = "iphone 13";  // string
let urunFiyat = 15000;    // number

console.log(typeof urunAdi);
console.log(typeof urunFiyat);

// let sayi1 = "10";
// let sayi2 = "20";

// console.log(Number(sayi1) + Number(sayi2));

let sayi1 = 10;
let sayi2 = 20;

console.log(sayi1.toString() + sayi2.toString());

let isim = "cagla";
let soyad = "kıral";

console.log(isim + " " + soyad);
let sinavNotu = 40;

let basarilimi = (sinavNotu >= 50)

console.log(basarilimi);
console.log(typeof basarilimi); // boolean

let yas;


yas;

console.log(yas);
console.log(typeof yas);



// Bilinmesi gereken Javascript Metotları:


// toString: Belirtilen nesneyi temsil eden bir string döndürür.
          const arr2 = [1, 2, "a", "b"];
          let num = 5;

          console.log(arr2.toSting()); // output: "1, 2, a, b"
          console.log(num.toString()); // output: "5"



// join: Bir dizideki tüm ögeleri birleştirerek yeni bir string döndürür. 
      const el = ['fire', 'Air', 'water']
      console.log(el.join()); // Output: "fire, Air, water"
      console.log(el.join('')); // Output: "fireAirwater"
      console.log(el.join('-')); // Output: "fire-Air-water"



// push: Bir dizinin sonuna bir veya daha fazla eleman ekler.
      const arr1 = ['a', 'b']
      arr.push('c')
      console.log(arr1)  // Output: ["a", "b", "c"]
      console.log(arr1.push('d'))  // Output: ["a", "b", "c", "d"]


// pop: diziden son elemanı kaldırır.
     const arr3 = ['a', 'b', 'c']
     arr3.pop();
     console.log(arr3)  // Output: ["a", "b"]
     console.log(arr3.pop())  // Output: "b"



// split: bir stringi alt stringler listesine bölerek bir diziye dönüştürür.
       let txt = "a,b,c,d";
       console.log(txt.split(",")); // Output: ["a", "b", "c", "d"]
       console.log(txt.split(" ")); // Output: ["a, b, c, d"]



// charAt: bir string'de belirtilen dizindeki (index'te) karakteri dönüştürür
        const str1 = "EsinÇağlaKıral"
        console.log(str1.charAt(1)) // output: s
        console.log(str1.charAt(6)) // output: ğ


// indexOf: Dizide bir eleman arar ve konumunu döndürür (dizide varsa indexini, yoksa -1 olarak)
         const arr = ['a', 'b', 'c']
         console.log(arr.indexOf('b'))  // output: 1
         console.log(arr.indexOf('h'))  // output: -1


     
// replace: bir stringte belirtilen bir değeri başka bir değerle değiştirir.
         let str = "yazılım mühendisi"
         console.log(txt.sreplaceearch('yazılım' ,'bilgisayar'));  // output: bilgisayar mühendisi








        // array ile alakalı çalıştığım kodlar

         let urunler = ["samsung galaxy a","huawei","iphone 13 pro"];
         let fiyatlar = [9000, 12000, 20000];
         let renkler = ["gold","siyah","beyaz"];
         
         let urun1 = ["iphone 13 pro", 9000, "gold"];
         
         let urun2 = [];
         urun2[0] = "iphone 13 pro";
         urun2[1] = 12000;
         urun2[2] = "siyah";
         
         let urun3 = [
             "huawei", 
             20000, 
             ["siyah","beyaz","mavi"]
         ];
         
         console.log(urun3[2]);
         console.log(urun3[2][0]);
         console.log(urun3[2][1]);
         console.log(urun3[2][2]);
         console.log(typeof urun3[2]);
         
         console.log(urunler[0]);
         console.log(urunler[1]);
         console.log(urunler[2]);
         
         console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
         console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
         console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);
         
         let kursAdi = "Etiya akademi yazılım geliştirme kampı";
         console.log(kursAdi[5]);
         console.log(kursAdi.split(" ")[3]);
         