function myFunction(){
    var message, x;
    message = document.getElementById("message"); 
    message.innerHTML = "";
    x = document.getElementById("demo1");

    try{
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(err){
        message.innerHTML = "Input " + err;
    }
    finally{
        document.getElementById("demo1").value = "";
    }

}
console.log(myFunction());