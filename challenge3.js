//Challenge 3
//Count the number of buildings that are the tallest

let buildings = [ 1150, 3023, 2020, 3023, 3023 ]
let tallestBuilding = 0
let tallestBuildingCount = 0

for (const building of buildings) { //iterate buildings
    if(building > tallestBuilding){ //if building is greater than the record tallest building
        tallestBuilding = building //replace the record
    }
}

for(const building of buildings){ //iterate buildings
    if(building===tallestBuilding){ //if building matches the record tallest one
        tallestBuildingCount++ //bump up count
    }
}

console.log(tallestBuildingCount)