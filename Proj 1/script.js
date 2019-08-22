function tipCalc(bill) {
    var newBill;
    if ( bill < 50 ) {
        newBill = bill * .2;
    } else if ( bill >= 50 && bill <= 200 ) {
        newBill = bill * .15;
    } else {
        newBill = bill * .1;
    }
    return newBill;
}

var restBill = [ 124 , 48 , 268 ]
var tip = [tipCalc(restBill[0]) , tipCalc(restBill[1]) , tipCalc(restBill[2])]
var total = [ tip[0] + restBill[0] , tip[1] + restBill[1] , tip[2] + restBill[2] ]

console.log(tip);
console.log(total);