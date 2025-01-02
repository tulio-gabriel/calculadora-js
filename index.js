let resposta;
let display = document.querySelector(".display");
let n1 = null;
let n2 = null;
let op = null;
let msg = document.querySelector("#msg");
let btn = document.querySelectorAll(".btn");
let cond;

function init() {
  cond = true;
  document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", Values);
  });
  document.querySelectorAll(".tela").forEach((item) => {
    item.innerHTML = "";
  });
  document.querySelector("#res").addEventListener("click", result);
  document.querySelector("#ligar").addEventListener("click", ligar);
  display.style.backgroundColor = " rgb(191, 191, 191)";
  msg.innerHTML = "";
}

function ligar() {
  if(cond===true){
    cond=false
    document.querySelectorAll(".btn").forEach((item) => {
      item.removeEventListener("click", Values);
    });
    document.querySelectorAll(".tela").forEach((item) => {
      item.innerHTML = "";
    });
    document.querySelector("#res").removeEventListener("click", result);
    document.querySelector("#ligar").removeEventListener("click", ligar);
    display.style.backgroundColor = "rgb(61, 61, 61)";
    display.innerHTML = "";
    msg.innerHTML = "Ligue A Calculadora";
  }
}


function Values(e) {
  const id = e.target.getAttribute("id");
  const value = e.target.innerHTML;

  if (id === "num" && value!=="0") {
    display.innerHTML += value;
    if (op === null) {
      n1 = (n1 || "") + value;
    } else {
      n2 = (n2 || "") + value;
    }
  } else if (id === "op") {
    {
      if (n1 !== null && n2 === null) {
        op = value;
        display.innerHTML += ` ${value} `;
      }
    }
  }else{
    display.innerHTML = "ERROR";
  }

  if (id === "delete") {
    display.innerHTML = "";
    n1 = null;
    n2 = null;
    op = null;
  }
}

function result() {
  if (
    n1 !== null && n2 !== null && op !== null ||
    n1 !== null && op === "√" ||
    n1 !== null && op === "%" ||
    n1 !== null && n2 !== null  && op === "%"
  ) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    switch (op) {
      case "+":
        resposta = num1 + num2;
        break;
      case "-":
        resposta = num1 - num2;
        break;
      case "÷":
        resposta = num1 / num2;
        break;
      case "X":
        resposta = num1 * num2;
        break;
      case "√":
        resposta = Math.sqrt(num1);
        break;
      case "%":
        if(num1 !== null)
        {
        resposta = num1 / 100;
        break;
        }
        if(num1 !== null && num2 !== null)
        {
        resposta = (num1 / 100) * num2;
        break;
        }
}
    display.innerHTML = resposta;
    n1 = resposta;
    n2 = null;
    op = null;
  }
  else{
    display.innerHTML = "ERROR";
  }}

