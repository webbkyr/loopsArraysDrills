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

console.log(rocksWarning());
console.log(waterWarning());
console.log(iceWarning());

console.log(rocksWarning());
console.log(waterWarning());
console.log(iceWarning());