//Challenge 3
//Count the number of buildings that are the tallest

let buildings = [ 1150, 3023, 2020, 3023, 3023 ]
let tallestBuilding = 0
let tallestBuildingCount = 0

for (const building of buildings) {
    if(building > tallestBuilding){
        tallestBuilding = building
    }
}

for(const building of buildings){
    if(building===tallestBuilding){
        tallestBuildingCount++
    }
}

console.log(tallestBuildingCount)