<<<<<<< HEAD
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const hello = document.querySelector("h1");
=======
// h1 html element mdn 검색
// toggle()
>>>>>>> e131ca2b78c1cd0c5f68a66022a13aded29192e4

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

<<<<<<< HEAD
function paintGreetings(){
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    hello.innerText = `Hello ${username}`;
    hello.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
=======
 function handleTitleClick(){
    h1.classList.toggle("clicked");
 }
>>>>>>> e131ca2b78c1cd0c5f68a66022a13aded29192e4

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