/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const targetText = document.querySelector("#target");
    const wordsText = targetText.innerHTML.split(" ");
    const fontSizes = ["10px", "15px", "20px", "25px", "30px"];
    let spansText = [];

    for (let i = 0; i < wordsText.length; i++) {
        let randomNumber = Math.floor(Math.random () * 5);
        let textSize = fontSizes[randomNumber];
        // Let every word have a different span with random textSize
        let span = "<span style='font-size: " + textSize + ";'>" + wordsText[i] + "</span>"
        spansText.push(span);
    }

    // Replace the text with the different spans and put together with join
    targetText.innerHTML = spansText.join(" ");
})();
