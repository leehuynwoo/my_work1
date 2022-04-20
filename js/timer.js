// 남은시간 타이머
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');


function timer() {
    const TwentyThree = new Date("2023-01-01:00:00:00+0900")
    const now = new Date();
    const gap = TwentyThree - now;
    const remainHours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const remainMinutes = Math.floor( (gap/1000/60) % 60 );
    const remainSeconds = Math.floor((gap / 1000) % 60);

    hour.innerHTML = remainHours<10 ? '0'+remainHours : remainHours;
    minute.innerText = remainMinutes<10 ? '0'+remainMinutes : remainMinutes;
    second.innerText = remainSeconds<10 ? '0'+remainSeconds : remainSeconds;
}

function time() {
    timer();
    setInterval(time,1000);
};

time();
