//---------------------------------- Arrays ----------------------------------------

// var students = new Array( "esin", "çağla", "kıral"); 

var students = ["esin", "cagla", "kıral"];
// document.getElementById("demo").innerHTML = students[1];

students[2] = "melis";  // değer değiştirildi
document.getElementById("demo").innerHTML = students[2];

students.push("elma"); // diziye eleman eklendi
document.getElementById("demo").innerHTML = students[3];

students[students.length] = "mehmet";   //diziye eleman eklendi
document.getElementById("demo").innerHTML = students