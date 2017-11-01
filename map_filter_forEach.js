//Hey Kayla great job wrapping up the hazard alert exercise.  I'm having trouble with
//my connection to Slack for some reason that's been going on for about an hour now
//so I haven't been able to message you there.  I'm going to take a shot at the forEach, 
//filter, and map exercise and then I'm going to look over everything we did today wtih my Mentor.
//Hope you have a good night and see you back in class tomorrow!

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

//const turtleMoves = [1, 3, -4, 4, -5, 6, -8, 9, -1];

const backRight = turtleMoves.filter(function(array) {
    return (array[0] >= 0) && (array[1] >=0);
});

console.log(backRight);

const totalMoves = backRight.map(function(array) {
    return (array[0] + array[1]);
});

console.log(totalMoves);