/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const element = document.querySelector('img[alt="Kiss?"]');
    const hover = element.getAttribute('data-hover');
    const src = element.getAttribute('src');

    element.addEventListener('mouseover', function () {
        element.src = hover;
    })

    element.addEventListener('mouseout', function () {
        element.src = src;
    })


})();
