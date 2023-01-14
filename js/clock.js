const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock()//웹사이트 실행 후 1초 뒤 실행되는 것을 막기 위함
setInterval(getClock, 1000);
