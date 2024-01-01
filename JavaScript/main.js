let landingPage = document.querySelector(".landing-page");
let imgsArray = ["section1.jpg", "section2.jpg", "section3.jpg", "section4.jpg", "section6.jpg"];



setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("../Image/'+ imgsArray[randomNumber]+'")';
}, 5000);



let toggleBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");

toggleBtn.onclick = () => {
    links.classList.toggle("open");
};