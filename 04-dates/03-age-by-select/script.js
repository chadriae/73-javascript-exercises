/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        const day = document.getElementById("dob-day").value;
        const month = document.getElementById("dob-month").value;
        const year = document.getElementById("dob-year").value;
        const today = new Date();

        console.log(today);
        console.log(today.getMonth());
        
        let age = today.getFullYear() - year;
        if (today.getMonth() < month){
            age --;
        }
        alert(`You are born on ${day}/${month}/${year} and you are ${age} years old.`);
    }
    )
})();
