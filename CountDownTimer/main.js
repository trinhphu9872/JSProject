const newYear = "1 Jan 2022"

function countdown() {
    const YearNext =new Date(newYear);
    const year = new Date();
    const second = Math.floor((YearNext - year) / 1000);
    const days = Math.floor(second / 3600 / 24)
    const hour = Math.floor(days * 24)
    const min = Math.floor(hour * 60)
    console.log(days);
    console.log(hour);
    console.log(min);
    console.log(second);
    getId("days").innerHTML = days
    getId("hours").innerHTML = hour
    getId("mins").innerHTML = min
    getId("seconds").innerHTML = second
}

function getId(id) {
    return document.getElementById(id);
}
setInterval(countdown,1000)
countdown();