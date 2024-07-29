function printTable() {
    const number = parseInt(document.getElementById('number').value);
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultTable =document.getElementById('Result of your table ');

    if (isNaN(number)|| isNaN(start)|| isNaN(end)|| start > end ) {
        alert("please enter correct number and concedered start is less than or equal to end");
        return;
    }

let tableHTML= '<tr><th>Multiplication</th><th>Result</th></tr>';
for (let i = start; i<= end; i++) {
    tableHTML += `<tr><td> ${number} x ${i}</td><td>${number*i}</td></tr>`;
}
resultTable.innerHTML=tableHTML
 

}






 
















