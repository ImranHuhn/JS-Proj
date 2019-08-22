var teamJohn = ( 116 + 94 + 123 ) / 3
var teamMike = ( 116 + 94 + 123 ) /3

if ( teamJohn > teamMike ) {
    console.log( "John's team is the winner!" )
} else if ( teamJohn < teamMike ) {
    console.log( "Mike's team is the winner!" )
} else {
    console.log( "No winner. It's a tie" )
}

console.log( "Here are the results:" )
console.log( "John's team has " + teamJohn )
console.log( "Mike's team has " + teamMike )

console.log( "=====================================" )

var teamMary = ( 89 + 120 + 100 ) / 3

console.log( "Mary's team has " + teamMary )

if ( teamMary > teamMike && teamJohn ) {
    console.log( "Mary's team is the winner" )
} else if ( teamMary == teamJohn ) {
    console.log( "Mary's team is tied with John's team" )
} else if ( teamMary == teamMike ) {
    console.log( "Mary's team is tied with Mike's team" )
} else {
    console.log( "Mary's team did not win" )
}