// Fucntion to calculate year born in 

function calculate() {
	
    let  number = document.getElementById("number").value;
    
    if (number == "" || number == 0) {
        
        alert("Invalid input.Please type your correct age!");
        return;
    }
    
    let date = new Date().getFullYear();
    
    let birthyear = date- number;
    
    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your birth year is " + birthyear;
    
}
// Hiding Year text until find year is clicked
document.querySelector("#year").style.display = "none";

document.querySelector("#button").onclick = function() {  calculate();  };

// For loop 
// // let friends = [["Steve", "London", 28], ["Anna", "Italy", 24], ["Marsh", "Paris", 35]];

// for (x= 0; x < friends.length; x++) {
	
// 	document.write(friends[1][x]);
// 	document.write("<br />");
	
// }

