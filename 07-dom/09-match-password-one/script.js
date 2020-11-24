/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let firstPassword = document.querySelector("#pass-one");
    let secondPassword = document.querySelector("#pass-two");

    document.querySelector("#run").addEventListener("click", function() {
        if (firstPassword.value === secondPassword.value) {
            alert('The passwords match');
        }
        else {
            document.querySelector("#pass-one").style.borderColor = "red";
            document.querySelector("#pass-two").style.borderColor = "red";
        }
    });
})();
