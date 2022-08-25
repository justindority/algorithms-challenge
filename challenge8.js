//function that returns true or false based on if a word is a boolean

let word = "tattarrattat"

const palindromeTest = (word) => {
    let wordArray = word.split("") //make word array
    let reverseWordArray = structuredClone(wordArray).reverse() //reverse it
    let reverseWord = reverseWordArray.join("") //make reverse string
    if(word === reverseWord){ //if word equals reverse word
        return true
    } else {
        return false
    }
}

console.log(palindromeTest(word))