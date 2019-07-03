// маска для телефона
$(() => {
    $('#phone').mask("+7 *** *** ****");
});

// отправка данных
$(() => {
    $('#form-order').submit(e => {
        if ($('#familyName').val() == 0 || $('#name').val() ==0 || $('#lastName').val() == 0 || $('#phone').val() == 0) {
            e.preventDefault();
            alert('Форма не должна быть пустой!')
        }
    });
});

// таймер
var today = new Date(),
    nextDay = new Date();
nextDay.setDate(today.getDate()+1);

var time = nextDay - today;

localStorage.setItem('time', time)


var sec = localStorage.getItem('time');
console.log(sec);


function timer() {
    sec--;
    console.log(sec);
    localStorage.setItem('time', sec);
    setTimeout('timer()', 1000);
    countdown.innerHTML = sec;
    if (sec === 0) {
        countdown.innerHTML = 'Время вышло'
        localStorage.setItem('time', sec);
    }
}
timer();