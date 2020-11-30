/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // Alternative code
    //function randomColor() {
    //const hexCode = "0123456789ABCDEF";
    //let color = "#";
    //for (let i = 0; i < 6; i++) {
    //    color = color + hexCode[Math.floor(Math.random() * 16)];
    //}
    //return color;
    //}



    document.getElementById("run").addEventListener("click", function(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        console.log(r,g,b);
        let color = 'rgb'+'('+r+','+g+','+b+')';
        document.body.style.backgroundColor = color;
    })
})();
