function sendEmail(personInterfaces) {
    var to = personInterfaces.eMail;
    var name = personInterfaces.name;

    var send = function(){
        console.log("Mail sent to :" + name + "/" + to);
    }

    send();
}

function Customer(name,eMail) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

function Employee(name,eMail) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

var someCustomer = new Customer("cagla","cglkrl@gmail.com");
var someEmployee = new Employee("esin","esinkrl@gmail.com");
sendEmail(someCustomer);
sendEmail(someEmployee);

//interfaces: tek başlarına bir anlamları olmaz.