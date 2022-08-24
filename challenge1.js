// Challenge 1
// Sum of numbers below 100 that are multipls of 3 or 5
// 467335

let sum = 0

for(let i=1;i<1001;i++){
    if(i%3 || i%5){
        sum += i
    }
}

console.log(sum)