let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
setInterval(() => {
    let currentTime = new Date()
let h = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
let m = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();  
let s = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();

hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;

}, 1000);
