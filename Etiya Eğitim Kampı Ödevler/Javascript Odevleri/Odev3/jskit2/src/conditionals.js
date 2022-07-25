// contions - şart blokları

function dateMessage(){
var date = new Date();
var hour = date.getHours();

if(hour >= 5 && hour <= 11 ){
    alert("good morning!")
}
else if(hour > 11 && hour < 17){
    alert("good afternoon!")
}

else if(hour >= 17 && hour <= 23){
    alert("good evening!")
}
else{
    alert("good night!")
}

}

// dateMessage();


function languageSelect(){
    var language = prompt("What is your language?") // prompt: kullanıcıdan manuel olarak veri girmesini sağlayan metod

    switch(language){
        case "french":
            alert("French");
            break;

        case "Turkish":
            alert("Turkish");
            break;

        case "English":
            alert("English");
            break;

        default:
            alert("Spanish");
            break;
    }
}
languageSelect();