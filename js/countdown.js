let endDate;
if (localStorage.getItem('endDate')) {
    endDate = localStorage.getItem('endDate');
}
const getDate = () => {
    const userDate = document.querySelector('.dateValue').value;
    const userTime = document.querySelector('.timeValue').value;
    const endUserData = `${userDate} ${userTime}`;
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
    const days = Math.floor(Math.abs((endDate / (1000 * 60 * 60 * 24)) - (nowDate / (1000 * 60 * 60 * 24))));
    const hours = Math.floor(Math.abs(((endDate / (1000 * 60 * 60)) - (nowDate / (1000 * 60 * 60))) % 24));
    const displayHours = hours < 10 ? `0${hours}` : hours;
    const minutes = Math.floor(Math.abs(((endDate / (1000 * 60)) - (nowDate / (1000 * 60))) % 60));
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(Math.abs(((endDate / (1000)) - (nowDate / (1000))) % 60));
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    if (endDate) {
        document.querySelector('.days').innerHTML = `<p class='time'>${days} <span class='text'>days </span></p> `;
        document.querySelector('.hours').innerHTML = `<p class='time'>${displayHours} <span class='text'>hours</span> </p> `;
        document.querySelector('.minutes').innerHTML = `<p class='time'>${displayMinutes} <span class='text'>minutes</span> </p> `;
        document.querySelector('.seconds').innerHTML = `<p class='time'>${displaySeconds} <span class='text'>seconds</span></p> `;
    }
}
countdown();
setInterval(countdown, 1000);