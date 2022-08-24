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

for(let i=1; i<=n; i++){
    let char = ' '
    let string = ''
    for(let ii=1; ii<=n; ii++){
        if(ii>count){
        char = "#"
        }
        string+=char
    }
    count--
console.log(string)
}