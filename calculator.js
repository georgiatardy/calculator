let display = document.querySelector("#display");


let buttons = document.querySelectorAll('.num');
console.log(buttons);

let values = [];

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    display.innerHTML += event.target.value;
    values.push(event.target.value);
  });
}

let equals = document.querySelector('#equals');
equals.addEventListener('click', function() {
  console.log(eval(values.join("")));
  display.innerHTML = (eval(values.join("")));
})

let clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
  values = [];
  display.innerHTML = " ";
  console.log(values);
})
