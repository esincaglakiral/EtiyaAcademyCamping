var student = {
    firstName: "esin",
    lastName: "kıral",
    fullName: function(){  //fullName fonksiyon olarak tanımlanmıştır
        return this.firstName + " " + this.lastName;
    }
}

alert(student.fullName());


function Customer(first,last,city,country,age){ // fonksiyonu bir nesne gibi kullanabiliriz, obje görevi göreceği için Customer büyük harfle başlatıldı 
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}
var someCustomer = new Customer("esin","kıral","istanbul","Turkey",24)
// new Customer dediğimizde arkada customer türünde bir nesne oluşuyor, her ne kadar bir fonk görünümünde olsada aslında nesne görevi görecektir

console.log(someCustomer.age)