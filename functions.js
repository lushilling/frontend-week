let number1;
let number2;

function Add(number1, number2){
  Result.innerText = parseInt(number1.value) + parseInt(number2.value);
};
function Subraction(number1, number2){
  Result.innerText = parseInt(number1.value) - parseInt(number2.value);
};
function Multiplication(number1, number2){
  Result.innerText = parseInt(number1.value) * parseInt(number2.value);
};
function Division(number1, number2){
  Result.innerText = parseInt(number1.value) / parseInt(number2.value);
};
function Power(number1, number2){
  let answer = Math.pow (parseInt(number1.value), parseInt(number2.value));
  console.log(answer);
  Result.innerText = answer;
};
