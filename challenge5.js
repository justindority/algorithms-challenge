//round up grades to the next multiple of 5 if the difference between the grade
//and the next multiple of 5 is less than 3

//don't round grades below 38


let inputGrades = [ 73, 67, 38, 33, 70,71,72,73,74,75,38,39 ]
let outputGrades = []

outputGrades = inputGrades.map(grade => { //iterate grades using map
    if(grade<38){
        return grade
    } else {
        for(let i=40;i<=100;i+=5){ //iterate multiples of 5
            let difference = i - grade //difference of current multiple of 5 and the grade
            if(difference < 3 && grade < i){ //if the difference is less than 3 (and grade is less than the multiple of 5)
                return i //return the multiple of 5 (round)
            } else if (difference === 3){ //if difference is 3
                return grade //return the grade
            }
            }
            return grade
        }
    }
)

console.log(outputGrades)