const clock = document.querySelector("div#clock");

function getClock(){
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2,"0");
    const month = String(date.getMonth()).padStart(2,"0");
    const day = String(date.getDay()).padStart(2,"0");
    clock.innerText = `${year}-${month}-${day}`;
}

getClock()//������Ʈ ���� �� 1�� �� ����Ǵ� ���� ���� ����
setInterval(getClock, 1000);
