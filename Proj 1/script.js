var markMass = Number(prompt("Enter Mark's Mass in kg"));
var markHeight = Number(prompt("Enter Mark's Height meters"));
var markBMI = markMass / ( markHeight * markHeight );

var johnMass = Number(prompt("Enter John's Mass in kg"));
var johnHeight = Number(prompt("Enter John's Height meters"));
var johnBMI = johnMass / ( johnHeight * johnHeight );

alert("Is Mark's BMI larger than John's BMI?");
alert( markBMI > johnBMI );
