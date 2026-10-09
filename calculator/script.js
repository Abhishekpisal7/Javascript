let keys = document.querySelector(".keys");
let inputCal = document.querySelector("#inputCal");

const calculator = (event) => {
  if(!event.target.classList.contains("key")){
    return
  }
  
  let input = event.target.innerText;

  if(inputCal.innerText === "0"){
    inputCal.innerText = "";
  }
   
  if (input === "Clear") {
    inputCal.innerHTML = "0";
    return;
  }

  if(input !== '='){
    inputCal.append(input)
  }

  if (input === "=") {
    let result = eval(inputCal.innerText)
    inputCal.innerText = ''
    inputCal.append(result)
  }
};

keys.addEventListener("click", calculator);