let leaderboard = [ 490, 450, 400, 320, 320, 290 ]
let currentScores = [ 50, 310, 480, 200, 350, 180 ]

const arcadeScores = (leaderboard,currentScores) => {
    let allscores = []
    for (const score of leaderboard){
        allscores.push(score)
    }
    for(const score of currentScores){
        allscores.push(score)
    }
    allscores.sort((a,b) => {return a-b})
    allscores.reverse()
console.log(allscores)
    let newLeaderboard = []

}

arcadeScores(leaderboard,currentScores)