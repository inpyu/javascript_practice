const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock()//������Ʈ ���� �� 1�� �� ����Ǵ� ���� ���� ����
setInterval(getClock, 1000);
