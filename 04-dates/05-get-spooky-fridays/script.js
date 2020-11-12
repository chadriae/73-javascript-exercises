/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        const givenyear = document.getElementById("year").value;
        let spookyMonth = [];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        for (var month=0; month<12; month++) {
            var givenDate = new Date(givenyear, month, 13);
            if(givenDate.getDay() == 5){
              spookyMonth.push(months[month]);
           }
        }
        alert(spookyMonth);
    })

})();