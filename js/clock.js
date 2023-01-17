const clock = document.querySelector("div#clock");

function getClock(){
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2,"0");
    const month = String(date.getMonth()).padStart(2,"0");
    const day = String(date.getDay()).padStart(2,"0");
    clock.innerText = `${year}-${month}-${day}`;
}

getClock()//웹사이트 실행 후 1초 뒤 실행되는 것을 막기 위함
setInterval(getClock, 1000);
