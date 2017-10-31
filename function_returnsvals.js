function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const waterWarning = hazardWarningCreator('Road is flooded');
const iceWarning = hazardWarningCreator('Bridges are icey');

// rocksWarning();
// waterWarning();
// iceWarning();


// rocksWarning();
// waterWarning();
// iceWarning();


// rocksWarning();
// waterWarning();
// iceWarning();

rocksWarning('Ventura Blvd');
rocksWarning('12th and Maryland NE');
rocksWarning('17th and U St SE')

iceWarning('NY Avenue');
iceWarning('8th and H St NE');
iceWarning('15th and Benning NE');

waterWarning('Edmondson Pwky');
waterWarning('Blue Lagoon Road');
waterWarning('Wakikki Peak');