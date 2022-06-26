const newName = window.prompt('adınız nedir?');


let text = document.querySelector('.text1');

let newText = text.innerHTML = `Merhaba ${newName} ! Hoş geldin!
`


function clock() {

        
const fullDate = new Date();

const hours = fullDate.getHours();
const mins = fullDate.getMinutes();
const secs = fullDate.getSeconds();


const hourText = document.getElementById('hour').textContent = hours;

const minsText = document.getElementById('minute').textContent = ':' + mins;

const secsText = document.getElementById('second').textContent = ':' + secs;

}

setInterval(clock, 100)
















