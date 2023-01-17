const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.querySelector("body");

// <img> 태그를 만들어준다
// document.createElement('img')와 같은 코드를 나타낸다
const image = new Image();

image.src = `img/${chosenImage}`;

// <img src="" class=""> 이미지 효과를 위해 클래스를 추가한다
image.classList.add("bgImage");

body.appendChild(image);