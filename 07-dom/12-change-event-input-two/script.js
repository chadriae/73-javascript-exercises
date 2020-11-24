/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.querySelector("#pass-one").onkeyup = function countChar () {
        let input = document.getElementById("pass-one");
        let count = document.getElementById("pass-one").value.length;
        const numbers = /([0-9].*[0-9])/;

        if (count >= 8 && input.value.match(numbers)) {
            document.querySelector(".indicator").innerHTML = "ok";
        }
    }
})();
