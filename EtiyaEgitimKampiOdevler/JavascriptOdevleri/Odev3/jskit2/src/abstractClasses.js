var Person = { 
    name: "None",
    email: "None",
    sendEmail: function() {
        console.log("Mail sent to :" + this.name + "/" + this.email)
    }
}

function Customer(name,email) {
    this.name = name;  //implemente edildi
    this.email = email;
    //Other staff
}

function Employee(name,email) {
    this.name = name;
    this.email = email;
    //Other staff
}

Customer.prototype = Person;  // müşteri sınıfını person sınıfından inherit edildi.
var someCustomer = new Customer("esin","esinkrl@gmail.com");
someCustomer.sendEmail();

Employee.prototype = Person;
var someEmployee = new Employee("cagla","cglkrl@gmail.com");
someEmployee.sendEmail();

// sınıf olsalar da tek başlarına bir anlamları yoktur.
// tamamlanmış ve tamamlanmamış operasyonları içermektedir.
