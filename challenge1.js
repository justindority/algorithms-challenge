// Challenge 1
// Sum of numbers below 1000 that are multipls of 3 or 5
// 234168

let sum = 0

for(let i=1;i<1001;i++){
    if(i%3===0 || i%5===0){ //if the number is divisible by 3 or 5
        sum += i //add the number to sum
    }
}

console.log(sum)