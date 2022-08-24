//function that returns true or false based on if a word is a boolean

let word = "tattarrattat"

const palindromeTest = (word) => {
    let wordArray = word.split("")
    let reverseWordArray = structuredClone(wordArray).reverse()
    let reverseWord = reverseWordArray.join("")
    if(word === reverseWord){
        return true
    } else {
        return false
    }
}

console.log(palindromeTest(word))