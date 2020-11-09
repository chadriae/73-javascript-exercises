/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var age = prompt("What is your age?");
    var gender = prompt("Are you M/W/X?");
    var town = prompt("What town do you live in?");

    if (confirm("Are you " + age + " years old, " + gender + " and do you live in " + town + "?")) {
        window.alert("Thank you for your information.")
    }

    else {
        window.alert("Start over again, please.");
        window.location.reload();
    }

}

)();
