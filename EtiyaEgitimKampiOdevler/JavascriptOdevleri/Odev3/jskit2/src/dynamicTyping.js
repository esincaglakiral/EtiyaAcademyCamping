// --------------------------------- dynamic typing -------------------------------------

var customer = {
    id: 2,
    contactName:"Çağla kıral"
}

customer.country = "Turkey";  // customer extend edildi ve burada customer'a bir özellik eklendi ( extension method - genişletilmiş metot, miras mantığı)

customer.sayHello = function(){  // sayHello isimli bir method tanımlandı
  alert("Hello " + this.contactName);  // this bu fonksiyonu barındıran nesnedir, customer'ın contactName'i
}
customer.sayHello();