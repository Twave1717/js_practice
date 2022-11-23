// parseInt()   string을 int형으로 변환
// isNaN()      Number인지 아닌지 판단
// <= >= && ||  비교연산자
// ==           -> 내용만 같으면 됨. 자료형 판단 X
// ===          -> 내용과 자료형까지 판단

const age = prompt("How old are you?");

if(isNaN(parseInt(age))){
    console.log("Please Write right number");
}
else if (age < 20){
    console.log("You are not adult");
}
else{
    console.log("부어라 마셔라");
}