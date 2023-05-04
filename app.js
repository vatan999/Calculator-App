(() => {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })


    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = 'empty';
        } else {
            let ans = eval(screen.value);
            screen.value = ans;
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = '';
    })


})();