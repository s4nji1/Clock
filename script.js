function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hours');
    const minuteHand = document.getElementById('minutes');
    const secondHand = document.getElementById('seconds');

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg+180}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg+180}deg)`;
    secondHand.style.transform = `rotate(${secondDeg+180}deg)`;
}

setInterval(updateClock, 1000);

updateClock();