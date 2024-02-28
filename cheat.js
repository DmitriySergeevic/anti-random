let random_num = document.getElementById('random_num')
let create_button = document.getElementById('button_random')
let index = 1
let number_end = document.getElementById('number-end')
let number_start = document.getElementById('number-start')


let coefficient = number_end


create_button.onclick = function(){
    if (index === 1){
        let num = 0.4 * number_end.value - (Math.random() * 0.35 * number_end.value)
        num = Math.ceil(num)
        random_num.innerHTML = num
        index = 2
    }

    else if (index === 2){
        let num = 0.4 * number_end.value + (Math.random() * 0.3 * number_end.value)
        num = Math.ceil(num)
        random_num.innerHTML = num
        index = 3
    }


    else if (index === 3){
        let num = 1 * number_end.value - (Math.random() * 0.35 * number_end.value)
        num = Math.ceil(num)
        random_num.innerHTML = num
        index = 1
    }

}