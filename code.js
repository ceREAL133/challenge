let userInput = document.getElementById('userInput');
let textholder = document.querySelector('.textHolder')
let body = document.querySelector('.body');
let main = document.querySelector('.main')

const regex = new RegExp ('^[a-zA-z\\s]*$');
const tmp = userInput.value;
let save = '';
userInput.oninput = () => {
    !regex.test(userInput.value) ? userInput.value = save : save = userInput.value
}

function checkColor() {
    userInput.value = userInput.value.toLowerCase();
    if (userInput.value === 'red' ){
        textholder.textContent = 'stop';
        body.style.backgroundColor = 'red';
    } else if (userInput.value === 'yellow'){
        textholder.textContent = 'wait';
        body.style.backgroundColor = 'yellow';
    } else if (userInput.value === 'green'){
        textholder.textContent = 'you can go';
        body.style.backgroundColor = 'green';
    } else{
        textholder.textContent = 'enter valid value';
        body.style.backgroundColor = 'white';
    }
}
