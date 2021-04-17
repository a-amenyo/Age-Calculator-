function calculateAge (){
let dateOfBirth = document.getElementById("dob").value;
let ageAtDate = document.getElementById("age-at-date-of").value;

let age = document.getElementById("age"); 
// Getting the days, years and months for the date of birth calendar 
let newDateOfBirthY = new Date(dateOfBirth);
// 1995

// Getting the days, years and months for the age at  date of  calendar 
let newAgeOfDateY = new Date(ageAtDate);
// 2021
// Calculating the Age difference 
let ageDiff = Math.abs(newAgeOfDateY - newDateOfBirthY);
let show  = ageDiff / 3.1536E+10;
// returns back to years-26 
age.innerText = "Your age is : " + Math.floor(show);
// console.log(ageDiff);
}

let findAge = document.getElementById("find-age");
findAge.onclick = function(){
    calculateAge();
}