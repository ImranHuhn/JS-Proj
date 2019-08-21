// declare a variable named student with an object inside that has properties name, age, occupation (use your information) then print the variable

// add a propety with your birthdate as a String and must be like this object["key"] then print the variable student

// add an array with all your education but usding .key and inside the array you must have the other objects with the information of each of the schools you went to lik the name, years in the school, and graduationDate and then print the variablw student

// then print one of the schools name

var student = {
    name: "Imran Huhn",
    age: 29,
    occupation: "Student",
};
console.log(student);
student["birthdate"] = "April";
console.log(student);
student.education = ["p.s", "i.s", "h.s", "college"];
console.log(student);
console.log(student.education[3]);

console.log('==============================');