const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

<<<<<<< HEAD
getClock()//������Ʈ ���� �� 1�� �� ����Ǵ� ���� ���� ����
setInterval(getClock, 1000);
=======

setInterval(sayHello, 5000);
>>>>>>> parent of 8e9ffe2 (chapter 5-1 Timeout)
