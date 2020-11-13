/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let arrayIDs = [];

        // create array of 10 random numbers
        for (i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 100);
            arrayIDs.push(randomNumber);
            document.getElementById(`n-${i + 1}`).innerHTML = randomNumber;
        }

        // write smallest number
        let min =  Math.min.apply (null, arrayIDs);
        document.getElementById('min').innerHTML = min;

        // write biggest number
        let max =  Math.max.apply (null, arrayIDs);
        document.getElementById('max').innerHTML = max;

        // sum of all numbers
        let sum = arrayIDs.reduce((a, b) => a + b, 0);
        document.getElementById('sum').innerHTML = sum;

        // average of all numbers
        let avg = sum / arrayIDs.length;
        document.getElementById('average').innerHTML = avg;
        



            



    })


})();
