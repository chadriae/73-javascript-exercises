/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    const element = document.querySelector('img[alt="Carousel"]');
    const src = element.getAttribute('src');
    let currentPic = 0;
    const lastPic = gallery.length - 1;

    // your code here
    document.querySelector('#next').addEventListener("click", function() {
        if(currentPic < lastPic){
        currentPic++;
        element.src = gallery[currentPic];
        console.log(currentPic);
        }
        else {
        currentPic = 0;
        element.src = gallery[currentPic];
        }
    });

})();
