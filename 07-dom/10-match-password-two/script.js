/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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
            document.querySelector("#pass-one").value = "error";
            firstPassword.classList.add("error");
            document.querySelector("#pass-two").value = "error";
            secondPassword.classList.add("error");
        }
    })
})();
