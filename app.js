// h1 html element mdn 검색
// toggle()

const h1 = document.querySelector("h1");

 function handleTitleClick(){
    h1.classList.toggle("clicked");
 }

 h1.addEventListener("click", handleTitleClick);