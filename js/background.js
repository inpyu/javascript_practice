const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.querySelector("body");

// <img> �±׸� ������ش�
// document.createElement('img')�� ���� �ڵ带 ��Ÿ����
const image = new Image();

image.src = `img/${chosenImage}`;

// <img src="" class=""> �̹��� ȿ���� ���� Ŭ������ �߰��Ѵ�
image.classList.add("bgImage");

body.appendChild(image);