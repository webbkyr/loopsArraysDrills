const turtle = [[0,0], [0,5], [-1,-3], [-3,1], [2,-4], [3,2]];

//write function for the movements the turtle shouldnt take//
function badMovements(turtle) {
    //create empty array//
    let result = [];
    //top level loop will loop through top level array//
    for (let i = 0; i < turtle.length; i++) {
        //nested loop will loop through numbers within the above array//
        for (let j = 0; j < turtle[i].length; j++) {
            //if the number at position [i][j] is negative, push to results//
            if (turtle[i][j] < 0 ) {
                result.push(turtle[i][j]);
            }
        }
    }
 return result;
}
console.log(turtle);
console.log(badMovements(turtle));

//defined function where the value is returned where the position [0] AND position [1] is greater than or equal to 0//
//how does it know to go inside the nested array?//
const filteredMovements = turtle.filter(num => num[0] >= 0 && num[1] >= 0);


const totalMovements = turtle.map(num => num[0]+ num[1]);

console.log(filteredMovements);     

console.log(totalMovements);

//Use the forEach method to log out how many steps the turtle took in each case.

const direction = turtle.forEach(steps => console.log(steps[0]+steps[1]));

console.log(direction);
