const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

const monthName = [
    'January',
    'February',
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November',
    'December'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Adding leading zeros for single-digit time values
    h = h < 10 ? '0' + h : h;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    // Display date
    day.innerHTML = `${d} ${monthName[m]} ${y}`;

    // Display time
    hour.textContent = h;
    minute.textContent = min;
    second.textContent = sec;
}, 1000);
