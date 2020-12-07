/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        // your code here
    Array.from(document.querySelectorAll('.actions > button')).forEach((btn) => {
        btn.addEventListener('click', () => {
            let minValue = Number(btn.dataset.min);
            let maxValue = Number(btn.dataset.max);
            let value = Number(btn.textContent);
                if (value < maxValue) {
                    value++;
                } else {
                    value = minValue;
                }
                if (value < 9) {
                    value = `0${value}`;
                }
            btn.textContent = `${value}`;
            updateNumber();
        });
    });
          
    const updateNumber = () => {
        let phoneNr = '0';
        Array.from(document.querySelectorAll('.actions > button')).forEach((btn) => {
                phoneNr += btn.textContent;
            }
        );
        document.getElementById('target').textContent = phoneNr;
    };
})();
