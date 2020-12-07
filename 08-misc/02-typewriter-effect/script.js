/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let textHtml = document.querySelector("#target");
    let stringText = textHtml.innerHTML;
    let speed = 50; // The speed/duration of the effect in milliseconds 
    let i = 0;

    function typeWriter() {
        if (i < stringText.length) {
            textHtml.innerHTML += textHtml.innerHTML.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})();
