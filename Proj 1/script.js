var john = {
    fname : john,
    mass : 70,
    height : 5,
    jBMI: function() {
        return this.mass / (this.height * this.height);
    }
};
var mike = {
    fname : mike,
    mass : 70,
    height : 5,
    mBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

console.log("John has a BMI of " + john.jBMI())
console.log("Mike has a BMI of " + mike.mBMI())

if (john.jBMI() > mike.mBMI()) {
    console.log("John's BMI is greater")
} else if (john.jBMI() < mike.mBMI()) {
    console.log("Mike's BMI is greater")
} else {
    console.log("Both have the same BMI")
}

