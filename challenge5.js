//round up grades to the next multiple of 5 if the difference between the grade
//and the next multiple of 5 is less than 3

//don't round grades below 38


let inputGrades = [ 73, 67, 38, 33, 70,71,72,73,74,75,38,39 ]
let outputGrades = []

outputGrades = inputGrades.map(grade => {
    if(grade<38){
        return grade
    } else {
        for(let i=40;i<=100;i+=5){
            let difference = i - grade
            if(difference < 3 && grade < i){
                return i
            } else if (difference === 3){
                return grade
            }
            }
            return grade
        }
    }
)

console.log(outputGrades)