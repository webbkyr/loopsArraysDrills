//use while loop instead of a for loop//

function max(numbers) {
    let i = 0; 
    let maxNumber = numbers[0];
    while (i <= numbers.length) {
      if (numbers[i] > maxNumber) {
          maxNumber = numbers[i];
          }
        i++;
    }
    return maxNumber;
  }
   
    

    
   function min(numbers) {
    let i = 0;
    let minNumber = numbers[0];
    while (i <= numbers.length) {
      if (numbers[i] < minNumber) {
        minNumber = numbers[i];
      }
      i++;
    }
    return minNumber;
   }
   
   
   
   /* From here down, you are not expected to 
      understand.... for now :)  
      
      
      Nothing to see here!
      
   */
   
   
   // tests
   
   function testFunctionWorks(fn, input, expected) {
     if (fn(input) === expected) {
       console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
       return true;
     }
     else {
       console.log(
         'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
         ' but was ' + fn(input)
       );
       return false;
     }
   }
   
   
   (function runTests() {
     // we'll use the variables in our test cases
     const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
     const realMin1 = numList1[3];
     const realMax1 = numList1[6];
     const numList2 = [0, 1, 2, 3, 4];
     const realMin2 = numList2[0];
     const realMax2 = numList2[4];
     
     const testResults = [
       testFunctionWorks(max, numList1, realMax1),
       testFunctionWorks(max, numList2, realMax2),
       testFunctionWorks(min, numList1, realMin1),
       testFunctionWorks(min, numList2, realMin2),
     ];
     
     const numPassing = testResults.filter(function(result){ return result; }).length;
     console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
   })();