function CalculateCredit() {
    var amount = document.getElementById('amount').value;
    var period = document.getElementById('period').value;
    var rate = document.getElementById('rate').value / 1200;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var paymentAmount = amount * (rate * Math.pow(1 + rate, period)) / (Math.pow(1 + rate, period) - 1);
    period++;
    var t = document.createElement('table');
    var tbody = document.createElement('tbody');
    for (var i = 0; i < period; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j<7; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    t.appendChild(tbody);
    document.getElementById('grid').appendChild(t);
    t.rows[0].cells[0].innerHTML="№";
    t.rows[0].cells[1].innerHTML="Дата";
    t.rows[0].cells[2].innerHTML="Сумма переплат";
    t.rows[0].cells[3].innerHTML="Остаток задолженности";
    t.rows[0].cells[4].innerHTML="Основной долг";
    t.rows[0].cells[5].innerHTML="Начисленные проценты";
    t.rows[0].cells[6].innerHTML="Платеж";
    t.rows[1].cells[3].innerHTML=amount;
    for (i=1;i<period;i++){
      t.rows[i].cells[0].innerHTML=i;
      t.rows[i].cells[6].innerHTML=paymentAmount.toFixed(3);
      t.rows[i].cells[5].innerHTML=(paymentAmount*rate/12).toFixed(3);
      t.rows[i].cells[4].innerHTML=(t.rows[i].cells[6].innerHTML-t.rows[i].cells[5].innerHTML).toFixed(3);
      t.rows[i].cells[2].innerHTML=(t.rows[i].cells[5].innerHTML*i).toFixed(3);
        if (month>12){
            month=1;
            year=+year+1;
        }
      t.rows[i].cells[1].innerHTML=month+'.'+year;
        month=+month+1;
    }
    for(i=2;i<period;i++){
      t.rows[i].cells[3].innerHTML=(t.rows[i-1].cells[3].innerHTML-t.rows[i].cells[4].innerHTML).toFixed(3);
    }
}













