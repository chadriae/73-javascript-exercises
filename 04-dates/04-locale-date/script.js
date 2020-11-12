/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const weekday = new Date().getDay();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayofthemonth = new Date().getDate();
    const month = new Date().getMonth();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const yearnow = new Date().getFullYear();

    document.getElementById("target").innerHTML = `${days[weekday]}  ${dayofthemonth} ${months[month]} ${yearnow}, ${hour}h${minute}`;

})();
