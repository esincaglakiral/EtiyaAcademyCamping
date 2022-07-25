
//miras alma

function Person(firstName,lastName) { 
    this.firstName = firstName; 
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Esin Çağla","Kıral");

var kıral = new Student("Computer Engineering");

console.log(kıral.firstName + " " + kıral.lastName + "'s is job " + kıral.favoriteCourse);