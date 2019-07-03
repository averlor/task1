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

var sec = localStorage.getItem('time') || 86400000;

function timer() {
    sec--;
    localStorage.setItem('time', sec);
    setTimeout('timer()', 1000);
    countdown.innerHTML = Math.floor(sec / 1000 / 3600) + ' : ' + Math.floor(sec % 3600000 / 1000 / 60) + ' : ' + Math.floor(sec % 3600000 % 60000 / 1000) + ' : ' + Math.floor(sec % 1000);
    if (sec === 0) {
        countdown.innerHTML = 'Время вышло'
        localStorage.setItem('time', sec);
    }
}
timer();