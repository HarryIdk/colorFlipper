const nick = ['#ffffff' , '#f0ebbb' , '#d8e2dc' , '#a4c3b2' , '#52616b']// number

const nickName = document.querySelector('.color')// put .color in nickName.

const mick = document.getElementById('btn') // put button's element id in mick.

function changeColor(){
  return nick[Math.floor(Math.random() * nick.length)]// round the random number of nick's length
  // turn the random to nick's value and return in the web page. 
}

mick.addEventListener('click', () => { // tell mick to check if the button is clicked.
  const randomColor = changeColor(); // put changeColor function in randomColor.
  document.body.style.backgroundColor = randomColor;  // goto css file and change the  body's background color.
  nickName.textContent = randomColor; // turn the textContent to the result of randomColor.
})

