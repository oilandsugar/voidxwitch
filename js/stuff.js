console.log("test");

const setBackgroundImage = () => {
  let images = [
    "img/random-background/background-1.jpg",
    "img/random-background/background-2.jpg",
    "img/random-background/background-3.jpg",
    "img/random-background/background-4.jpg",
    "img/random-background/background-5.jpg",
    "img/random-background/background-6.jpg",
    "img/random-background/background-7.jpg",
    "img/random-background/background-8.jpg",
    "img/random-background/background-9.jpg",
    "img/random-background/background-10.jpg",
    "img/random-background/background-11.jpg",
    "img/random-background/background-12.jpg",
    "img/random-background/background-13.jpg",
    "img/random-background/background-14.jpg",
    "img/random-background/background-15.jpg",
    "img/random-background/background-16.jpg"
  ]
  let randSelect = images[Math.floor(Math.random() * images.length)];
  let headerImg = document.getElementById("main-img");
  console.log(headerImg)
  document.getElementById("main-img").style.backgroundImage = 'url(' + randSelect + ')';
}

setBackgroundImage();
