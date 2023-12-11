const   contain = document.querySelector('.container'),
        area = document.querySelector('.area'),
        box = document.querySelectorAll('.box'),
        modalWrapper = document.querySelector('.modal__wrapper'),
        modalWindow = document.querySelector('.modal__window'),
        content = document.getElementById('content'),
        btnClose = document.getElementById('btn-close'),
        modalOverlay = document.querySelector('.modal__overlay');

let     move = 0,
        result = '';

area.addEventListener('click', e => {
    if (e.target.className = 'box') {
        move % 2 ===0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

const check = () => {
    const arr = [
        [ 0,1,2],
        [ 3,4,5],
        [ 6,7,8],
        [ 0,3,6],
        [ 1,4,7],
        [ 2,5,8],
        [ 0,4,8],
        [ 2,4,6]
    ];
    for (i=0; i < arr.length; i++) {
        if ( box[arr[i][0]].innerHTML == 'X' && box[arr[i][1]].innerHTML == 'X' && box[arr[i][2]].innerHTML == 'X')
    {
        result='крестики';
        showResult(result);
    } else if ( box[arr[i][0]].innerHTML == '0' && box[arr[i][1]].innerHTML == '0' && box[arr[i][2]].innerHTML == '0')
    {
        result='нолики'
        showResult(result);
    } else if (move == 9) {
        result='ничья'
        showResultDraw(result);
    }
    } 
}




function delayModalWindow () {
    setInterval(function() {
        modalWrapper.style.display = 'block'
    }, 500)
}

const showResult = winner => {
    content.innerHTML = `Победили ${winner}!`;
    // modalWindow.style.display = 'block'
    delayModalWindow ();
}

const showResultDraw = winner => {
    content.innerHTML = `${winner}!`;
    // modalWindow.style.display = 'block'
    delayModalWindow ();
}

const closeModal = () => {
    modalWrapper.style.display = 'none';
    location.reload();
}

modalOverlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);