# advancedJavaScript
Starter kit for my JS Courses

Javascript fundamentals

Types (tipler): 

- string
- number 
- boolean
- array
- object
- loose typing
- dynamic typing


eşitliğin sağına yazdığımız veri türüne göre değişkenler kendilerini sonuçlandırmaktadır. örneğin;

var value = 10;  // number
var student2 = student  //string
var isItTrue = true  // boolean

ARRAYS
------------------------------------------------------------------------------------------------------------------------------------------------------

bir değişkenin birden fazla veriyi tutan versiyonuna "array" deriz. 

var students = [ "esin", "çağla", "kıral"];

// var students = new Array( "esin", "çağla", "kıral");   versiyonuyla da  yazabilmekteyiz fakat özellikle sayısal değerlerin tutulduğu 
dizilerde bu şekilde bir tanımlama karışıklık yaratabilir. bu nedenle üstteki kullanımı daha doğru ve yaygındır.

bir diziye yeni bir eleman eklemek istersek; 
students.push("elma");
şeklinde olacak şekilde push() fonksiyonunu kullanırız. böylelikle push fonksiyonu içinde yazdığımız yeni veri dizinin son elemanı olarak eklenir.

diziye eleman eklemenin bir diğer şekli ise, diyelimki dizide 4 eleman var yani son elemanın index'i 3 eğer biz bunu biliyorsak 
students[4] = "mehmet"; şeklinde 4. indexi ekleyebiliriz ama daha doğru kullanım şu şekildedir:
students[students.length] = "mehmet";  // burada length ile dizinin eleman sayısını vererek ekleme işlemi gerçekleştirir.



OBJECTS
------------------------------------------------------------------------------------------------------------------------------------------------------

var character = { firstName: "Frodo", lastName: "Baggins", city: "shire", family: "hobbit", age: 51};   // buradaki her bir özellik bir nesnedir. yani yaş, şehir gibi..

loose typing --> object models

var number = 10;
number = new Object();  // number isimli bir obje
alert(number);

loose typing daha ileri seviye bir obje modelidir. yukarıda number 10 olarak tanımlanmıştır. fakat alttaki satırda yazan şekilde sayı yerine başka bir obje atayabiliriz.

dynamic typing'te ise bir değişken tanımlayıp, bunu extend etme ve yeni özellikler ekleme gibi işlemlşer yapabiliriz



events (olaylar) 
-------------------------------------------------------------------------------------------------------------------

onchange: Bir HTML öğesi değiştirildi
onclick: Kullanıcı bir HTML öğesini tıklatır
onmouseover: Kullanıcı, fareyi bir HTML öğesinin üzerine getirir
onmouseout: Kullanıcı, fareyi bir HTML öğesinden uzaklaştırır
onkeydown: Kullanıcı bir klavye tuşuna basar
onload: Tarayıcı sayfayı yüklemeyi tamamladı

JavaScript Olay İşleyicileri
Olay işleyiciler, kullanıcı girdisini, kullanıcı eylemlerini ve tarayıcı eylemlerini işlemek ve doğrulamak için kullanılabilir:

Her sayfa yüklendiğinde yapılması gerekenler:
Sayfa kapandığında yapılması gerekenler
Kullanıcı bir düğmeye tıkladığında gerçekleştirilmesi gereken eylem
Kullanıcı veri girdiğinde doğrulanması gereken içerik
Ve dahası ...
JavaScript'in olaylarla çalışmasına izin vermek için birçok farklı yöntem kullanılabilir:

HTML olay özellikleri, JavaScript kodunu doğrudan çalıştırabilir
HTML olay öznitelikleri JavaScript işlevlerini çağırabilir
HTML öğelerine kendi olay işleyici işlevlerinizi atayabilirsiniz.
Olayların gönderilmesini veya işlenmesini engelleyebilirsiniz
Ve dahası ...




--------------------------------------------------- Functions -------------------------------------------------------------------

Fonksiyon function anahtar kelimesi bir boşluk fonksyion adı ve parantez ile tanımlanır. Bir fonksiyon bir nesne gibi de davranabilir, bir nesne yapıcısı gibi de davranabilir, kısacası javascript bir çopk yeni nesil dillerde
görmüş olduğumuz nesne tabanlı mimarilere de temel oluşturur. JavaScript fonksiyon kullanımı ile bir defa kodu yazarak birden fazla kullanabiliriz.
JavaScript fonksiyonlarına parametre ekleyerek farklı değerler için farklı sonuçlar elde edebiliriz.

Fonksiyon değer döndürme:
JavaScipt fonksiyon kodları return anahtar kelimesine geldiğinde çalışmayı durdurur.
 javascript arguments: Argümanlar nesnesi bir Array değil. Benzerdir, ancak uzunluk dışında tüm Array özelliklerinden yoksundur.
örnek bir çalışma: 

function longestString() {
  var longest = '';
  for (var  i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

------------------------------------------------- loops (döngüler) ------------------------------------------------------------

for, while, do while

Farklı Döngü Çeşitleri
JavaScript, farklı döngü türlerini destekler:

for - bir kod bloğunda birkaç kez döner
for/in - bir nesnenin özellikleri arasında dolaşır
for/of - yinelenebilir bir nesnenin değerleri arasında dolaşır
while - belirtilen bir koşul doğruyken bir kod bloğunda döngü yapar
do/while - ayrıca belirtilen koşul doğru olduğunda bir kod bloğunda döngü yapar

örneğin;

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 2;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}




----------------exception handling (Hata Yakalama)------------- ------------------------------------------------------------
try, catch, finally:

try ifadesi, çalıştırılacak (denemek) bir kod bloğu tanımlar.

Catch ifadesi, herhangi bir hatayı işlemek için bir kod bloğu tanımlar.
finally ifadesi, sonuçtan bağımsız olarak çalıştırılacak bir kod bloğu tanımlar.

throw ifadesi özel bir hatayı tanımlar.

try ifadesi, yürütülürken hatalara karşı test edilecek bir kod bloğu tanımlamanıza olanak tanır,
try ve catch bloklarının faaliyetini gösteren ve çalıştıran bloktur.

Catch ifadesi, try bloğunda bir hata oluştuğunda yürütülecek bir kod bloğu tanımlamanıza olanak tanır.

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}

throw ifadesi, özel bir hata oluşturmanıza olanak tanır.

Teknik olarak bir istisna atabilirsiniz (bir hata atın).

İstisna bir JavaScript Dizesi, bir Sayı, bir Boolean veya bir Nesne olabilir:
throw "Too big";    // throw a text
throw 500;          // throw a number


örnek gösterim:

<!-- <h2>JavaScript try catch</h2>

<p>Please input a number between 5 and 10:</p> -->

<!-- <input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {      // hatalar catch bloğunda yakalanır
    message.innerHTML = "Input is " + err;
  }
}
</script> -->

burada yapılmak istenen şey koşulllara göre input içerisine girilen verinin hatalı veri olup olmadığını bizlere söylemesidir.





------------------------------------------------------ Validation (doğrulama) ----------------------------------------------------------------
validasyon keyword'leri:

disabled: HTML inputunu disabled olarak işaretlersek o inputu sadece görebiliriz, fakat herhangi bir veri girişi yapamayız
readonly: sadece okunabilir
max: number için
min: number için
pattern(e.g [A-Za-z]{3}): numerik olmayan ve sadece 3 karakter girilebilecek bir alan seçmiş oluruz
required: zorunlu alan kulllanımı gerektiğinde
type: tipi/türünü vermemizi sağlar
Maxlength: belli sayıda/uzunlukta veri girişi yapabilmemizi sağlar(bizim belirleyeceğimiz max uzunluk)
Novalidate: formlar için kullanılmaktadır, formda validasyon yapmak istemediğimizi belirtiriz




--------------------------------------------------- HTML DOM Manipulation---------------------------------------------------------
DOM Nedir?
DOM (Document Object Module) HTML dökümanları içerisinde bulunan nesnelere kolaylıkla erişim sağlamak ve üzerinde 
işlemler yapabilmek için tasarlanan bir modeldir. DOM ile HTML dosyamızda bulunan her şeye erişim sağlayabiliriz.


getElementById:
html nesnelerine bakarak id'si belirtilen id'ye eşit olan elementi bulup ona göre işlem yapmamızı sağlar. mesela aşağıdaki
erişim sağladığımız kodu inceleyelim. Document ile HTML belgemiz içerisinde bir değere erişeceğimizi belirtiyoruz. 
getElementById(“sehir”), id değeri “sehir” olan elemana ulaşıyoruz. innerHTML ile id değeri “sehir” olan düğümün içindeki 
veriye ulaşabiliyoruz.

<!-- <p id=”sehir”>İstanbul</p>
<script type=”text/javascript”>
 
  var konum = document.getElementById(“sehir”).innerHTML;
  alert(konum);
</script> -->



getElementByTagName: tag'ın ismiyle çağırır (ul,li..)
......getElementByTagName("li").innerHTML;


getElementByClassName: tag'lara veya elementlere verilen class isimlerini kullanırız.


querySelectorAll: mesela birden fazla p tag'i var ve class adı intro2 olanları seçmek istiyoruz, o halde;
......document.querySelectorAll("p.intro2"); 


getElementByName: tag'lere verilmiş olan "name" ile erişilme. eğer tag'lara name ile bir isim verillmişse bu yöntemle de ulaşabiliriz


addEventListener: event eklemek istediğimizde kullanırız. bunu kulllanırken hangi id'ye ait elemente event ekleyeceğizi belirleyebilriiz.
örneğin; 
document.getElementById("tryIt").addEventListener("click", chanceColor)
function changeColor(){...........}    yazarsak tryIt isimli id'ye sahip tag'a click eventi eklemek istemiş oluruz


removeEventListener: var olan bir html nesnesinin event'ini silmek/kaldırmak istediğimizde kullanabiliriz.
örneğin; 
document.getElementById("tryIt").removeEventListener("click", chanceColor)
function changeColor(){...........}    yazarsak tryIt isimli id'ye sahip tag'daki click eventini silmek istemiş oluruz




Working With Nodes: Node(düğüm) iç içe olan bu yapıyı hiyerarşik olarak ayırır. HTML belgesi içerisinde bütün elemanlar bir düğümdür:
head ve body elemanları birer düğümdür. Node elemanları arasında ebeveyn-çocuk-kardeş ilişkisi vardır. Bu iki düğüm html düğümünün altında bulundukları 
için html düğümünün çocuklarıdır. Head, body aynı köke (aynı tag altında) bağlı oldukları için de kardeşlerdir.
appendChild()
insertBefore()
removeChild()
replaceChild()










