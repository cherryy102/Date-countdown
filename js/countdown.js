const spanDays = document.querySelector('.days');
const spanHours = document.querySelector('.hours');
const spanMinutes = document.querySelector('.minutes');
const spanSeconds = document.querySelector('.seconds');
const date = document.querySelector('.dateValue');
const time = document.querySelector('.timeValue');

let endDate;
if (localStorage.getItem('endDate')) {
    endDate = localStorage.getItem('endDate');
}
const getDate = () => {
    let userDate = date.value;
    let userTime = time.value;
    let endUserData;
    console.log(userDate);
    endUserData = `${userDate} ${userTime}`;
    if (userDate != '' && userTime != '') {
        document.querySelector('.error').textContent = "";
        endDate = new Date(`${endUserData}`).getTime();
        localStorage.setItem('endDate', endDate);
    } else {
        document.querySelector('.error').textContent = "Fields cannot be empty!";
    }
}
document.querySelector('button').addEventListener('click', getDate);
const countdown = () => {
    const nowDate = new Date().getTime();
    let days = Math.floor((endDate / (1000 * 60 * 60 * 24)) - (nowDate / (1000 * 60 * 60 * 24)));
    let hours = Math.floor(((endDate / (1000 * 60 * 60)) - (nowDate / (1000 * 60 * 60))) % 24);
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor(((endDate / (1000 * 60)) - (nowDate / (1000 * 60))) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.floor(((endDate / (1000)) - (nowDate / (1000))) % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    if (endDate) {
        spanDays.innerHTML = `<p class='time'>${days} <span class='text'>days </span></p> `;
        spanHours.innerHTML = `<p class='time'>${hours} <span class='text'>hours</span> </p> `;
        spanMinutes.innerHTML = `<p class='time'>${minutes} <span class='text'>minutes</span> </p> `;
        spanSeconds.innerHTML = `<p class='time'>${seconds} <span class='text'>seconds</span></p> `;
    }
}
countdown();
setInterval(countdown, 1000);