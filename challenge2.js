//Challenge 2
//Creating ### pyramid size of n, pattern of:
//    #
//   ##
//  ###
// ####
//#####

let n = 10
let string = ""
let count = n-1

for (let i=1; i<=n; i++){ //loop for length of n
    let char = ' ' //make char a space
    let string = ''
    for(let ii=1; ii<=n; ii++){ //loop for the length of n again
        if(ii>count){ //once the loop counter hits the count variable
        char = "#" //change the character from a space to a #
        }
        string+=char //add the character to the string
    }
    count-- //
    console.log(string)
}