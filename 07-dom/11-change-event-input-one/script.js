/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.querySelector("#pass-one").onkeyup = function countChar () {
        let count = document.getElementById("pass-one").value.length;
        document.getElementById("counter").innerHTML = count + "/10";
        if (count == 10) {
            alert("Your password can't be longer than 10 characters.");
        }
    }
})();
