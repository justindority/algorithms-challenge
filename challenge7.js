//find the highest palindrome that is the product of 2 three digit numbers

let highestPalindrome = 0

for(num1=100;num1<1000;num1++){ //iterate 3 digit numbers
    for(num2=100;num2<1000;num2++){ //again
        let product = num1 * num2 //multiply them
        let productString = product.toString() //make it a string
        let productStringArray = productString.split('') //split to array
        let productReverseStringArray = structuredClone(productStringArray).reverse() //reverse array
        let productReverseString = productReverseStringArray.join("")//make the reverse array a string
        if(productString === productReverseString){ //if reverse string equals regular string
            highestPalindrome = product //make it highestPalindrome
        }
    }
}

console.log(highestPalindrome)