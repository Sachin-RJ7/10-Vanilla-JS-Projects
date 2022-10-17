const monthName = document.getElementById('month');
const dayName = document.getElementById('day');
const dateNumber = document.getElementById('date');
const yearNumber = document.getElementById('year');

const date = new Date();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = date.getMonth();
let day = weekday[date.getDay()];

monthName.innerText = date.toLocaleDateString("en", {
    month:"long"
})

dayName.innerText = day;

dateNumber.innerText = date.getDate();

yearNumber.innerText = date.getFullYear();