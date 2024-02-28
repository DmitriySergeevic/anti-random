let random_num = document.getElementById('elementToReplace')
let create_button = document.getElementById('button_random')
let index = 1
let number_end = document.getElementById('number-end')
let number_start = document.getElementById('number-start')



random_num.innerHTML = Math.ceil(Math.random() * 50)


function replaceElement(num) {

    random_num.classList.add('fade-in');
    random_num.innerHTML = num;

    // Убираем класс с анимацией через 0.5 секунд
    setTimeout(function() {
        random_num.classList.remove('fade-in');
    }, 500);
}


create_button.onclick = function(){
    if (index === 1){
        let num = 0.4 * number_end.value - (Math.random() * 0.35 * number_end.value)
        num = Math.ceil(num)
        replaceElement(num)
        index = 2
    }

    else if (index === 2){
        let num = (0.4 * number_end.value + (Math.random() * 0.3 * number_end.value)) - number_end.value/20
        num = Math.ceil(num)
        replaceElement(num)
        index = 3
    }


    else if (index === 3){
        let num = 1 * number_end.value - (Math.random() * 0.35 * number_end.value) 
        num = Math.ceil(num)
        replaceElement(num)
        index = 1
    }
}