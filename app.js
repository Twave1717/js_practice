const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const hello = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(){
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    hello.innerText = `Hello ${username}`;
    hello.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();

    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}


if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
}