const loginForm = document.querySelector('.login_form');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('#userName');

let USER_NAME = localStorage.getItem('userName');

function paintGreeting(){
    loginInput.classList.add('hidden');
    userName.innerText = USER_NAME;
}

function userLogin(event){
    event.preventDefault();

    USER_NAME = loginInput.value;
    localStorage.setItem('userName', USER_NAME);
    paintGreeting();
}

if(USER_NAME) {
    paintGreeting();
}

loginForm.addEventListener('submit', userLogin);

