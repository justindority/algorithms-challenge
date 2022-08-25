const totalLegs = 60
const percentageLegs = [.25,4]
const remainingLegs = [.75,2]

// 60 = 4(x(.25)) + 2(x(.75)) I FORGOT HOW TO DO ALGEBRA

const calculate = (totalLegs, percentageLegs, remainingLegs) => {
    const a = remainingLegs[0] * remainingLegs[1]
    const b = percentageLegs[0] * percentageLegs[1]
    const c = a + b
    return totalLegs / c
}

console.log(calculate(totalLegs,percentageLegs,remainingLegs))

