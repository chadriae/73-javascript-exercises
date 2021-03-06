/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const targetDiv = document.querySelector("#target");

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 10; i++) {
        // creates a table row
        let row = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
        const cell = document.createElement("td");
        let cellText = document.createTextNode((j + 1 ) * (i + 1));
        cell.appendChild(cellText);
        row.appendChild(cell);
        }
    // add the row to the end of the table body
    tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    targetDiv.appendChild(tbl);
})();
