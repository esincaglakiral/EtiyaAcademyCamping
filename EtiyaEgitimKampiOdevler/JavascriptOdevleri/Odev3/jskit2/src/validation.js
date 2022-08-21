function validate() {
    var numberEntered = document.getElementById("numberBox")

    if (numberEntered.checkValidity() == false) {  // checkValidity metodu vasıtasıyla girilen değerin kurallara uygun olup olmadığını test ediyoruz
        console.log(numberEntered.validationMessage)
    }
    else{
        console.log("Input OK")
    }
}