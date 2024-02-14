let input = document.getElementById("input");
let buttons = document.querySelectorAll("button")

let string = "";
let arr = Array.from(buttons);

arr.forEach(eachButton => {
  eachButton.addEventListener('click', (e) => {
    if(e.target.value == '=') {
      string = eval(string);
      input.value = string;
    } 
    else if(e.target.value == 'AC') {
      string = "";
      input.value = string;
    }
    else if (e.target.value == 'DEL') {
      string = string.substring(0, string.length -1);
      input.value = string;
    }
    else {
      string += e.target.value;
      input.value = string;
    }
  })
})