let buttonSend = document.getElementById("send");

buttonSend.addEventListener("click", function(){
  let inputCaptcha = document.getElementById("captcha");
  let result = document.getElementById("result");

  result.innerHTML = "";

  let = int1 = 6, int2 = 7, int3 = 9;

  if (inputCaptcha.value == int1 || inputCaptcha.value == int2 || inputCaptcha.value == int3) {
    let textResult = document.createElement("h1");
    textResult.innerText = "El resultado es correcto";
    result.appendChild(textResult)
    console.log(int1, int2, int3);
  }else{
    let textResult = document.createElement("h1");
    textResult.innerText = "El resultado es incorrecto";
    result.appendChild(textResult) 
  }
});

document.querySelector(".menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".buttons").classList.toggle("show");
}