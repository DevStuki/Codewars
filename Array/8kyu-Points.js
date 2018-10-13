/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

/* Beginning
function points(games) {    
    const len = games.length;
    let total = 0;
    for(let i = 0; i < len; i++){                
        let firstNum = parseInt((games[i])[0]);
        let secondNum = parseInt((games[i])[2]);
        
        if(firstNum>secondNum){
            total += 3;
        }else if(firstNum==secondNum){
            total += 1;
        }else{
            continue;
        }        
    }
    return total;
}
*/

function points(games){
    return games.reduce((points, val) => {        
        let x = val[0];        
        let y = val[2];        
        return points += x > y ? 3 : x === y ? 1 : 0;
    }, 0);
}



console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));
