console.log("test");

const setBackgroundImage = () => {
  let images = [
    "img/random-background/are-you-ok-1.jpg",
    "img/random-background/are-you-ok-2.jpg",
    "img/random-background/are-you-ok-3.jpg",
    "img/random-background/are-you-ok-4.jpg",
    "img/random-background/are-you-ok-5.jpg",
    "img/random-background/are-you-ok-6.jpg",
    "img/random-background/are-you-ok-7.jpg",
    "img/random-background/are-you-ok-8.jpg",
    "img/random-background/are-you-ok-9.jpg",
    "img/random-background/are-you-ok-10.jpg",
    "img/random-background/are-you-ok-11.jpg",
    "img/random-background/are-you-ok-12.jpg",
    "img/random-background/are-you-ok-13.jpg",
  ]
  let randSelect = images[Math.floor(Math.random() * images.length)];
  let headerImg = document.getElementById("main-img");
  console.log(headerImg)
  document.getElementById("main-img").style.backgroundImage = 'url(' + randSelect + ')';
}

setBackgroundImage();
