window.onload=function() {
    var amount = prompt("На какую сумму хотите взять кредит?");
    var period = prompt("На сколько месяцев?");
    var rate = prompt("По какой процентной ставке?") / 1200;
    var month = prompt("С какого месяца(в формате ХХ)?");
    var year = prompt("С какого года?");
    var paymentAmount = amount * (rate * Math.pow(1 + rate, period)) / (Math.pow(1 + rate, period) - 1);
    period++;
    var t = document.createElement('table');
    var tbody = document.createElement('tbody');
    for (var i = 0; i < period; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j<8; j++) {
            var td = document.createElement('td');
            if ((j%7)==0){
                btn=document.createElement('input');
                btn.type="button";
                btn.onclick=function () {
                    document.getElementById('modal').style.display="block";
                    document.getElementById('overlay').style.display="block";
                }
                btn.value="Добавить платеж";
                td.appendChild(btn);
            }
            tr.appendChild(td);
            td.id = "td";
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
    t.rows[0].cells[7].innerHTML=" ";
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
    document.getElementById("closeModal").onclick=function () {
        document.getElementById('modal').style.display="none";
        document.getElementById('overlay').style.display="none";
    }
}













