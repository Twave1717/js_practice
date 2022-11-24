// h1 html element mdn 검색

const h1 = document.querySelector("h1");

 function handleTitleClick(){
    const clickedClass = "clicked"; // 반복 줄이고 체크 가능해짐.

    if(h1.className === clickedClass){
        h1.className = "";
    } else{
        h1.className = clickedClass;
    }
        // CSS를 직접 지정하지 않고 class를 지정한다.
 }

 h1.addEventListener("click", handleTitleClick);