
function Customer(first,last,city,country,age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("esin","kıral","istanbul","Turkey",24);

Customer.prototype.eMail = "esinkrl@gmail.com";
Customer.prototype.fullName = function(){
    return this.first + " " + this.last;
};

alert(someCustomer.city);
alert(someCustomer.eMail);
alert(someCustomer.fullName());

// modüler uygulamalar gerçekleştirmek için kullanılan bir yöntemdir.
// javascriptte prototyping vasıtasıyla nesnelerimize daha sonradan yeni özellikler ekleyebilmekteyiz
