/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    for (var x=1; x <= 100; x++) {
        var skip = 0;
        if (x % 3 == 0 && x % 5 == 0) {
            console.log('fizzbuzz');
            skip = 1;
        }
        if (x % 3 == 0) {
            console.log('fizz');
            skip = 1;
        }
        if (x % 5 == 0) {
            console.log('buzz');
            skip = 1;
        }
        if (!skip) {
            console.log(x);
        }
    }

})();
