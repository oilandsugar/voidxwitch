// sliders

const sliders = document.getElementsByClassName("gallery");

for (var i = 0; i < sliders.length; i++) {
    const slidesContainer = sliders.item(i).getElementsByClassName("slider")[0];
    const slide = document.querySelector(".slide");
    const prevButton = sliders.item(i).getElementsByClassName("arrow-left")[0];
    const nextButton = sliders.item(i).getElementsByClassName("arrow-right")[0];
    
    nextButton.addEventListener("click", (event) => {
        console.log("next")
        const slideWidth = slide.clientWidth;
        console.log(slidesContainer)
        slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
        console.log("prev")
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });
}

// random background image

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
  document.getElementById("main-img").style.backgroundImage = 'url(' + randSelect + ')';
}

// setBackgroundImage();
