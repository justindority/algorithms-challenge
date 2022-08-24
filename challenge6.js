const moduleMasses = [
    53035,
    84950,
    100012,
    75128,
    96658,
    80583,
    72951,
    131866,
    99675,
    115923,
    65140,
    59430,
    81288,
    53129,
    96172,
    58912,
    138055,
    62920,
    122353,
    59176,
    149310,
    105061,
    58808,
    103111,
    128538,
    61366,
    53480,
    94427,
    121742,
    143966,
    63092,
    92543,
    67136,
    81575,
    131971,
    71040,
    57035,
    114448,
    101314,
    123688,
    137916,
    68612,
    122453,
    98141,
    61137,
    97628,
    126791,
    111826,
    50630,
    67829,
    126285,
    97331,
    88587,
    64552,
    111221,
    89639,
    72177,
    132711,
    51062,
    98061,
    57919,
    57166,
    134565,
    58677,
    62505,
    85253,
    147337,
    84791,
    114516,
    95597,
    139271,
    83561,
    68285,
    100684,
    86803,
    85887,
    74554,
    113749,
    81899,
    107220,
    110959,
    118220,
    52743,
    71651,
    74775,
    106517,
    132133,
    56919,
    129699,
    137357,
    75781,
    59409,
    134589,
    131438,
    101641,
    105503,
    104371,
    145308,
    75777,
    107333
]

//divide by 3, round down, subtract 2

let total = 0
let finalNumber = 0

fuelRequirements = moduleMasses.map(mod => {
let number = mod
    if((number%3)===0){
        finalNumber = (number/3) - 2
    } else if(((number-1)%3)===0){
        finalNumber = ((number - 1)/3) - 2
    } else if(((number-2)%3)===0){
        finalNumber = ((number-2)/3) - 2
    }
    total += finalNumber
})

console.log(total)
