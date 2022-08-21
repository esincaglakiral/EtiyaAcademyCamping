function Customer(firstName,lastName) { //constructor
    this.firstName = firstName; //public
    this.lastName = lastName;

    var someField = "some value"; //private

    this.sendProduct = function() { //operation
        alert("Product sent!")
    }
}

var cagla = new Customer ("Esin Çağla","Kıral");
cagla.sendProduct();  //operasyonu bir metod/fonk gibi çağırmak mümkündür.