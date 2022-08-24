//find the highest palindrome that is the product of 2 three digit numbers

let highestPalindrome = 0

for(num1=100;num1<1000;num1++){
    for(num2=100;num2<1000;num2++){
        let product = num1 * num2
        let productString = product.toString()
        let productStringArray = productString.split('')
        let productReverseStringArray = structuredClone(productStringArray).reverse()
        let productReverseString = productReverseStringArray.join("")
        if(productString === productReverseString){
            highestPalindrome = product
        }
    }
}

console.log(highestPalindrome)