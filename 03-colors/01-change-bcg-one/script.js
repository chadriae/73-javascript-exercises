/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("red").addEventListener("click", function(){
        //var color = '#ff0000';
        document.body.style.backgroundColor = 'red';
    })
    document.getElementById("green").addEventListener("click", function(){
        //var color = '#00ff40';
        document.body.style.backgroundColor = '#00ff40';
    })
    document.getElementById("yellow").addEventListener("click", function(){
        //var color = '#ffff00';
        document.body.style.backgroundColor = '#ffff00';
    })
    document.getElementById("blue").addEventListener("click", function(){
        //var color = '#0080ff';
        document.body.style.backgroundColor = '#0080ff';
    })
})();
