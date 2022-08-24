
const arcadeScores = (leaderboard,currentScores) => {
    //add all scores from leaderboard and new scores to a new array
    let allscores = []
    for (const score of leaderboard){
        allscores.push(score)
    }
    for(const score of currentScores){
        allscores.push(score)
    }
    //sort it by score, reverse it
    allscores.sort((a,b) => {return a-b})
    allscores.reverse()

    let loopLimit = 5 //setting the initial loop limit

    let newLeaderboard = [] //establish the new leaderboard
    
    //populate the new leaderboard, bumping up the limit in case there are duplicate scores
    for(i=0;i<loopLimit;i++){
        let nextIndex = i+1
        if(allscores[i]===allscores[nextIndex]){
            newLeaderboard.push(allscores[i])
            loopLimit++
        } else {
            newLeaderboard.push(allscores[i])
        }
    }

    let placementArray = [] //establish an array that will hold only unique values from the new leaderboard

    //iterate the new leaderboard, pushing unique values to the placementArray 
    for (const score of newLeaderboard) {
        let foundScore = placementArray.find(s => {return s === score})
        if(foundScore){

        } else {
            placementArray.push(score)
        }
    }

    let finalArray = [] //establish the array that will be returned

    //iterate currentScores (passed to the function originally) and if a score placed, add that placement to a the finalArray
    for (const score of currentScores) {
        let foundScoreIndex = placementArray.findIndex((s => s === score))
        if(foundScoreIndex !== -1){
            finalArray.push((foundScoreIndex) + 1)
        }
        
    }
    return finalArray
}

let leaderboard = [ 490, 450, 400, 320, 320, 290 ]
let currentScores = [ 50, 310, 400, 490, 450, 480, 350, 350, 200, 350, 180 ]


let finalArray = []

console.log(arcadeScores(leaderboard,currentScores))

console.log(finalArray)